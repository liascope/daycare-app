import Login from "./_features/Login"
import { getUser } from "./_services/actions"
import { redirect } from "next/navigation"

export default async function Page (){
const user = await getUser()

if (user) {
 return redirect(`/daycare/${user?.role}`)
}

 return(<Login /> )
}