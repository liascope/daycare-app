'use client'
import { useDaycareForm } from "../_services/DaycareFormContext"
export default function SelectChild ({allChildren}) {
const {form, setForm} = useDaycareForm();
   return (<div className="w-full flex justify-end">
   <label htmlFor="reportChild" className="flex flex-row justify-between items-center md:w-[49%] lg:w-[35%] w-full cursor-pointer text-xl md:text-lg transition-all duration-300 hover:via-teal-400 py-4 rounded-sm text-white/90 uppercase font-extrabold tracking-widest bg-linear-to-bl from-orange-200 via-orange-300 to-orange-50 px-5 mb-10">Report for      
<select required id='reportChild' className="focus:outline-none text-center focus:ring-0 focus:border-t-transparent font-extrabold uppercase tracking-widest text-2xl" value={form?.id ?? ""} name="child_id"
  onChange={(e) => { const value = e.target.value
 if (!value) { setForm(f=>({...f, id: "", name: "" }))
   return }
    const selectedChild = allChildren?.find(c => c.id === value)
    if (!selectedChild) return
    setForm(f=>({...f, id: selectedChild.id, name: selectedChild.name}))}}>
  <option value=''> -- select --</option>
  {allChildren?.map(child => (
    <option className="text-teal-600/90 font-extrabold tracking-widest" key={child.id} value={child.id}>
      {child.name} </option>))}
</select>
</label> 
</div>)
}