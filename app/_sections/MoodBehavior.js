import RatingParent from "../_ui/RatingParent";
import YesNo from "../_ui/YesNo";

export default function MoodBehavior({data}){
    if (!data?.mood) return <div className="w-full  text-center"> - </div>
    return(<>
    <RatingParent title={`${data?.children?.name || ''} general mood`} rating={data?.mood}/>
    <RatingParent title={`${data?.children?.name || ''} played with others`} rating={data?.playWothers}/>
    <YesNo title={`${data?.children?.name || ''} was rather`} isTrue={data?.calm} getMood={true}/>
    <span className={`${data?.conflicts ? 'border-amber-300 border-b-8 rounded-full mx-[15%] border-dotted' : ''}`}><YesNo title={`${data?.children?.name || ''} had conflicts`} isTrue={data?.conflicts}/></span>

    </>)
}