
import Image from "next/image"
import { sleepDuration } from "../_services/data"
import Cards from "./Cards"

export default function Dashboard ({data}){
const defaultImage = "/defaultPhoto.png"

const photos = data?.photos?.slice(0, 2).map(p => p.url) || []

while (photos.length < 3) {
  photos.push(defaultImage)
}

     return (<div className="w-full flex flex-col items-center h-fit py-10 font-extrabold">
        <header className="[text-shadow:3px_3px_3px_rgba(0,0,0,0.6)] text-5xl flex flex-col md:flex-row text-orange-300/90 md:gap-5 tracking-tighter uppercase justify-center items-end mb-20"> <span className="flex flex-row items-center justify-center"><span className=" text-6xl text-teal-600/90 tracking-widest">{data?.children?.name|| '' }</span>`s DAY,</span> <p className="py-2 normal-case"> {new Date(data?.report_date).toLocaleDateString("de-DE",{
    day: "2-digit",
    month: "short",
    year: "numeric" })}</p>
    </header>

        <div className="flex flex-wrap items-center justify-center [text-shadow:1px_2px_2px_rgba(0,0,0,0.5)]
        text-3xl tracking-wide uppercase font-bold mb-20">
<Cards style='border-y-4 text-rose-300 rounded-r-xl border-r -rotate-2 hover:rotate-0 transition-transform duration-200'>
    <div className="flex justify-center items-center p-7">
    <Image
      src={`/emojis/${data?.mood || 0}.png`}
      alt={`emoji-${data?.mood || 0}`}
      width={250}
      height={250}
      className="-rotate-3 object-contain"
      priority
    />
  </div>
    <div className=" p-3 w-full flex items-center justify-center">Mood</div></Cards>

<Cards style='border-y-4 rounded-l-xl border-l rounded-l-xl text-emerald-300 border-l rotate-2 hover:rotate-0 transition-transform duration-200' ><div className="p-3 w-full flex items-center justify-center">Appetite</div>
        <div className="flex justify-center items-center p-7">
    <Image
     src={`/emojis/${data?.eat || 0}.png`}  alt={`emoji-${data?.eat || 0}`}
      width={250}
      height={250}
      className="rotate-3 object-contain"
      priority
    />
  </div>
      </Cards>
<Cards style='border-y-4 text-violet-300 rounded-r-xl border-r rotate-4 hover:rotate-0 transition-transform duration-200' >
<div className={`border-4 shadow-2xl scale-80 ${sleepDuration[data?.sleep_duration || 0]?.color} rounded-full flex -rotate-10 text-white items-center justify-center w-full h-full  text-center`}>{sleepDuration[data?.sleep_duration || 0]?.duration}</div>

<div className="p-3 w-full flex items-center justify-center  ">Sleep</div>
</Cards>


<Cards style='border-y-4 rounded-l-xl border-l rounded-l-xl text-blue-300 border-l -rotate-1 hover:rotate-0 transition-transform duration-200' >


<div className="w-full h-full flex justify-center items-center relative scale-80 ">

  {photos.map((src, index) => (
    <div key={index} className={`absolute border-4 rounded-full w-full h-full shadow-2xl
        ${index === 0 ? "rotate-5 z-20  ml-18" : ""}
        ${index === 1 ? "ml-10 mb-2 -rotate-20 z-10" : ""}
        ${index === 2 ? "z-0 ml-2 mt-1" : ""}
      `} > <Image className="absolute rounded-full object-cover brightness-90 saturate-75 contrast-90" src={src} alt={`img${index}`} fill sizes="100px"/> </div> ))}
</div>

<div className="p-3 w-full flex items-center justify-center  ">Photos</div>

</Cards>
<Cards style='border-y-4 rounded-l-xl border-l rounded-l-xl text-amber-300 border-l rotate-1 hover:rotate-0 transition-transform duration-200'>
  <ul className="border-4 shadow-2xl scale-80 rounded-3xl flex -rotate-10 items-center justify-center w-full h-full  text-center text-lg normal-case flex-col  text-shadow-2xs bg-linear-to-bl from-violet-100 via-yellow-200 to-yellow-100">
    {data?.hashs.length > 0 ? data?.hashs.map((h,i)=><li className="odd:text-amber-600/90 even:text-yellow-600/90" key={i}>{h}</li>) : <div className="text-amber-600 tracking-widest">#noIssues𖤓</div>}
    
  </ul>
  <div className="p-3 w-full flex items-center justify-center">Issues</div></Cards>
</div>
     </div>)
}