'use server'

import { redirect } from "next/navigation";
import { supabaseAdmin } from "../lib/supabase/server";
import { createClient, createReadOnly} from "../lib/supabase/serverClient";
import { revalidatePath } from "next/cache";

export async function login (formData){
  const supabase = await createClient()
  const role = formData.get('role')
  const { error } = await supabase.auth.signInWithPassword({
      email:formData.get('email'),
      password:formData.get('password')})
  if (error) {
   return redirect('/?error=invalid')
    //  throw new Error('Invalid credentials')
  }
  const data = await getUser()

  if (!data || role !== data?.role) {
    await supabase.auth.signOut()
    // throw new Error('Invalid role selected')
     return redirect('/?error=invalid')
  }
  redirect(`/daycare/${data?.role}`)
  }


export async function logout() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
 if (error) {
     console.error(error)
    } 
    revalidatePath('/daycare/**')
     redirect('/')
}

// check logged in user for UI
export async function getUser (){
const supabase = await createReadOnly()
// show logged in user (user.id)
const { data: { user } } = await supabase.auth.getUser();
if (!user) return null

return {user, role: user.user_metadata.role}
}

//// Parent Actions /////
export async function getReport (){
  const supabase = await createReadOnly()
  const user = await getUser();
  if (!user?.user) {redirect('/')}

  const { data: reports, error} = await supabase
    .from('reports')
    .select(`*, children(name)`)
    .eq('child_id',  user.user.id).single();

    if (error) {
    console.log('DB Error:', error.message)
    // throw new Error('Could not load report. Please try again later.')
  }
  if (!reports) {
    return null
  }

  return reports
}


//// Admin Actions: ////

export async function createUser(formData) {
  const name = formData.get("name")?.trim()
  const email = formData.get("email")?.trim()
  const password = formData.get("password")
  const role = formData.get("role")?.trim()

  if (!name || !email || !password || !role) {
    throw new Error("fields must be filled") }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error("invalid e-mail") }

  if (password.length < 6) {
    throw new Error("password have to be at least 6 values")}

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    password, name, email, email_confirm: true, user_metadata: { role: role }})

  if (error) throw error
  const userId = data.user.id

  const { error: dbError } = await supabaseAdmin.from("children").insert({id: userId,name,role,})
  if (dbError) throw dbError
  revalidatePath('/daycare/caregiver')
}

// get all parent-user 
export async function getAllUser () {
      const { data, error } = await supabaseAdmin
        .from('children')
        .select('id, name, role')
        .eq('role', 'parent')
      if (error) throw error
      // console.log(data)
      return data
}

export async function deleteUser (id) {
  const { data, error } = await supabaseAdmin.auth.admin.deleteUser(id)
  revalidatePath('/daycare/caregiver')
}

// Admin - Form
export async function sendReport(content) {
  if (!content.child_id) throw new Error("Child is required");
  if (!content.activities?.length) throw new Error("Select at least one activity");
  if (content.hashs?.length && !content.note?.trim()) throw new Error("Notes are required when issues exist");
  if (!content.eat && !content.drink && !content.meal?.length) throw new Error ("Eat and Drink report is required")
  
  if (content.sleep === null) throw new Error("Report for sleep & rest requireddd")
  if (content.sleep === true && (!content.sleep_duration || !content.sleep_latency || !content.sleep_quality)) throw new Error ("Report for sleep & rest required")

  if (!content.mood || !content.playWothers) throw new Error("Mood report is required");
  if (content.calm === null || content.conflicts === null) throw new Error("Mood report is required");
   if (content.diaper === null || content.wc === null || content.wash_hand === null) throw new Error("Hygiene report required")
   if (content.diaper === true && content.wcType === null) throw new Error("Select wc type") 
  
  const uploadedPhotos = await Promise.all(
    content.photos.map(async (photo) => {
      if (!photo?.file) {
        console.warn("Skipping photo, no file found", photo);
        return null;
      }

      const fileName = Math.random().toString(36).slice(2) + "-" + photo.file.name;
      const { error } = await supabaseAdmin.storage
        .from("photos")
        .upload(fileName, photo.file);

if (error) {
  console.error("Upload error:", error)
  throw new Error(error.message)
}
      const { data } = supabaseAdmin.storage.from("photos").getPublicUrl(fileName);

      return {
        url: data.publicUrl,
        title: photo.title,
      };
    })
  );

  const photosToSave = uploadedPhotos.filter(Boolean);
// console.log(photosToSave)
  const { data: report, error: reportError } = await supabaseAdmin
    .from("reports")
    .upsert([{ ...content, photos: photosToSave }], { onConflict: ['child_id'] })
    .select();

 if (reportError) throw new Error(reportError.message);
    revalidatePath('/daycare/caregiver')
}

// Reported children today UI 
export async function getReportToday (){
  const { data: reports, error } = await supabaseAdmin
    .from('reports')
    .select(`report_date, children(name)`).eq('report_date', new Date().toISOString().slice(0,10));
    // console.log(reports)
    if (error) {
    console.error("DB Error:", error.message)
    throw new Error("Could not load today's reports")
    }

    const todayReported = reports.map(c => c.children.name)
    if (!todayReported) return;
    return todayReported
}
