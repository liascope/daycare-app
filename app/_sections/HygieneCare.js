import YesNo from "../_ui/YesNo";
import Image from "next/image";

export default function HygieneCare ({data}){

    return (<>
        <YesNo title={`${data?.children?.name || ''} had diaper changed`} isTrue={data?.diaper}/>
         {data?.diaper && (
<div className="flex flex-col items-center justify-center"><h2>{data?.children?.name || ''} did</h2><div className="w-30 h-30 relative m-3">
        <Image className="absolute w-30 h-30" src={`/toilet/${data?.wcType ? '1' : '2'}.png`}  alt="wcTyle" fill sizes="120px"  priority/>
        </div> </div>

         )}
        <YesNo title={`${data?.children?.name || ''} used the toilet`} isTrue={data?.wc}/>
        <YesNo title={`${data?.children?.name || ''} washed hands`} isTrue={data?.wash_hand}/>
        </>
    )
}