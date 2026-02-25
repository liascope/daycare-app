'use client'
import { deleteUser } from "../_services/actions"
import { useState } from "react"

export default function DeleteUser({active,allChildren}) {
 const [confirm, setConfirm] = useState('')
 const [child, setChild] = useState({id:'', name:''})
 const [deletedChild, setDeletedChild] = useState(false)

async function handleDelete () {
        try {
        await deleteUser(child.id)
        setDeletedChild(true)
        setConfirm(()=>`Child ${child.name} successfully deleted`)
        setTimeout(async () => {
        
     setConfirm('')
     setDeletedChild(false)
     setConfirm('')
     setChild({id:'', name:''})
  }, 4000)}
        catch (err) {alert(err)
    }
}
if (!active) return;

     return (<form action={handleDelete} className="absolute z-10 bg-white flex flex-col w-full gap-5 p-2 rounded">
        
           {confirm ? <div className="flex flex-col items-center justify-center"><h2 className="py-3">{confirm}</h2>
          {!deletedChild && <div className="flex flex-row gap-7"><div className="bg-linear-to-br from-emerald-200 via-emerald-300 to-teal-50 py-2 px-5 cursor-pointer hover:via-emerald-200 rounded" onClick={()=>setConfirm('')}>No</div><button className="bg-linear-to-br from-orange-200 via-orange-300 to-teal-50 px-5 py-2 cursor-pointer hover:via-orange-200 rounded" type="submit">Yes</button></div>}
           </div> : <ul className="flex flex-col gap-2 transition-all duration-100 ">{allChildren?.map(child =>{return (<li className="odd:bg-orange-200/80 even:bg-orange-100 px-5 rounded hover:bg-orange-200 flex flex-row items-center justify-between tracking-widest font-extrabold" key={child.id}>{child.name}<span className="text-red-500/80 flex items-center justify-center w-7 h-7 hover:scale-95 rounded-full cursor-pointer m-1" onClick={()=>{setConfirm(`Delete ${child.name}?`); setChild({id:child.id, name:child.name})}}>❌</span></li> )})}</ul>}
              </form>)
}