import { color } from "../_services/data"

export default function ActivityLearning({data}){

 if (data?.activities.length === 0) return <div className="w-full text-center">No activities.</div>
    
    
 return (<div className="flex flex-col justify-center">
        <h2 className="text-center">{data?.children?.name || ''} did following activities</h2>
<div className="flex flex-wrap justify-evenly gap-1 sm:gap-3 p-7">
 {data?.activities?.map((act,i)=><div key={act} className={`text-lg odd:-rotate-2 even:rotate-2 sm:text-xl md:text-2xl lg:text-3xl tracking-wide uppercase font-extrabold p-3 w-fit rounded-2xl hover:rotate-1 ${color[i]}`}>{act}</div>)}
</div></div>)



}