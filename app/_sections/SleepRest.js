import RatingParent from "../_ui/RatingParent";
import YesNo from "../_ui/YesNo";
import { sleepDuration } from "../_services/data";

export default function SleepRest ({data}){

    return(<>

    <YesNo title={`${data?.children?.name || ''} took a nap`} isTrue={data?.sleep}/>

    {data?.sleep && <div className="flex flex-col items-center gap-20">
         <RatingParent title="Sleep latency" rating={data?.sleep_latency}/>
         
        <div className="flex items-center flex-col justify-center">
        <h2 className="lg:text-2xl md:text-xl text-lg">Sleep duration</h2>
        <div className={`lg:text-4xl md:text-2xl text-xl font-bold border-4 p-6 m-6 w-fit rounded-2xl ${sleepDuration[data?.sleep_duration]?.color}`}>{sleepDuration[data?.sleep_duration]?.duration}</div></div>
        
        <RatingParent title="Sleep quality" rating={data?.sleep_quality}/>
        </div>}

    </>)
   
}