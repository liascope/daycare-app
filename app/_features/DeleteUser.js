'use client'
import { deleteUser } from "../_services/actions"
import { useState } from "react"


import SubmitButton from "../_ui/SubmitButton"
export default function DeleteUser({active,allChildren}) {
 const [confirm, setConfirm] = useState('')
 const [child, setChild] = useState({id:'', name:''})
 const [deletedChild, setDeletedChild] = useState(false)

async function handleDelete() {
if (process.env.NEXT_PUBLIC_DEMO_MODE === "true") { 
      setDeletedChild(true)
      setConfirm(`Child ${child.name} successfully deleted`)
       setTimeout(() => {
        setConfirm('')
        setDeletedChild(false)
        setChild({ id: '', name: '' })
      }, 3500); 
      return}
    try {
      await deleteUser(child.id)
      setDeletedChild(true)
      setConfirm(`Child ${child.name} successfully deleted`)
      setTimeout(() => {
        setConfirm('')
        setDeletedChild(false)
        setChild({ id: '', name: '' })
      }, 3500)
    } catch (err) {
      alert(err)
    }
}
if (!active) return;

     return (<form action={handleDelete}>
        
           {confirm ? <div className="flex flex-col items-center justify-center"><h2 className="py-3 text-lg">{confirm}</h2>
          {!deletedChild && <div className="flex flex-row gap-7"><div className="bg-linear-to-br from-emerald-200 via-emerald-300 to-teal-50 p-3 w-44 text-white/90 cursor-pointer hover:via-emerald-200 rounded" onClick={()=>setConfirm('')}>No</div>
          <SubmitButton deleteBtn={true}>Yes</SubmitButton>
          </div>}
           </div> : <ul className="flex flex-col gap-2 transition-all duration-100 ">{allChildren?.map(child =>{return (<li className="odd:bg-orange-200/80 even:bg-orange-100 px-5 rounded hover:bg-orange-200 flex flex-row items-center justify-between tracking-widest font-extrabold" key={child.id}>{child.name}<span className="text-red-500/80 flex items-center justify-center w-7 h-7 hover:scale-95 rounded-full cursor-pointer m-1" onClick={()=>{setConfirm(`Delete ${child.name}?`); setChild({id:child.id, name:child.name})}}>❌</span></li> )})}</ul>}
              </form>)
}