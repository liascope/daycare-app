'use client'
import SignUpForm from "./SignUpForm"
import DeleteUser from "./DeleteUser"
import { useState } from "react"
export default function UserManagement({allChildren}) {
const [open, setOpen] = useState(false)
const [active, setActive] = useState({register:true, delete:false})

    return(
          <div className="relative w-full md:w-[50%] lg:w-[35%] uppercase font-bold text-sm text-center z-20 ">
           <h1 onClick={()=>setOpen((o)=>!o)} className="cursor-pointer text-xl transition-all duration-300 hover:via-teal-400 py-4 rounded-sm text-white/90 uppercase font-extrabold tracking-widest bg-linear-to-br from-orange-200 via-orange-300 to-teal-50 px-5">User Managment</h1>
          {open && <div className="absolute backdrop-blur-3xl flex flex-col w-full gap-5 p-2 pb-10 rounded border-b-yellow-600/80 border-b-2">
        <div className="text-shadow-2xs py-3 z-20 flex flex-row items-center justify-evenly  cursor-pointer"> 
          <h2 className={`${active.register ? 'overline text-teal-700/80' : 'text-yellow-600/80 hover:text-teal-800 '}`} onClick={()=>setActive({register:true, delete:false})}>Register new user</h2> <h2 className={`${active.delete ? 'overline text-teal-700/80' : 'text-yellow-600/80 hover:text-teal-800'}`} onClick={()=>setActive({register:false, delete:true})} > Delete User </h2></div>
       <SignUpForm active={active.register}/>
       <DeleteUser active={active.delete} allChildren={allChildren}/>
       </div>}</div>)
   

}