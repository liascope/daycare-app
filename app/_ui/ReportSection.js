'use client'
import { useState } from "react";
export default function ReportSection({ title, color, children }) {
    const [open, setOpen] = useState(false)
  return (
    <div className={`border-l-8 shadow-2xl cursor-pointer ${color} rounded-r-4xl rounded-l-sm overflow-hidden `}>
      <h1 onClick={()=>setOpen((open)=>!open)} className={`py-5 text-lg md:text-2xl lg:text-3xl font-extrabold shadow-2xl tracking-widest uppercase hover:bg-teal-500/10 text-gray-600/80 rounded-r-4xl transition-all duration-500 ease-linear  ${
      open ? 'translate-x-12 lg:translate-x-30' : 'translate-x-0'
       }`}>
        {title}
      </h1>
     <div className={`overflow-hidden flex flex-col transition-all duration-500 ease-in-out ${!open ? 'max-h-0' : 'max-h-700'}`}>
     <div className="flex flex-col gap-20 py-20 text-shadow-lg uppercase font-extrabold lg:text-2xl md:text-xl text-lg tracking-widest text-center text-gray-50"> {children}</div>
     </div>
    </div>
  );
}
