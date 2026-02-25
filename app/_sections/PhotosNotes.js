
import PhotoSlider from "../_ui/PhotoSlider";

const titleColors =[
    {title: "#eatDrink", color: "text-emerald-400"},
    {title: "#sleepCalm", color: "text-violet-400"},
    {title:"#moodBehavior", color:"text-rose-400"},
    {title:"#activityLearning", color:"text-cyan-400"},
    {title:"#hygeneCare", color:"text-blue-400"},]

export default function PhotosNotes ({data}){

const titles = data?.hashs.map(b => ({title: b, color: titleColors.find(r => r.title === b)?.color}))

    return (
   <> 
    <div className="w-full h-full">
    <PhotoSlider images={data?.photos || []}/>
    </div>
    
  {data?.note && <div >
   <h2 className="text-center mb-5">Notes:</h2>

   <div className="flex flex-wrap items-center justify-center sm:gap-3 gap-1 my-2 normal-case">
     {titles.map((b)=>(<span key={b.title} className={`font-extrabold ${b.color}`}>{b.title}</span>))}</div>

<p className='mx-5 px-10 py-10 mt-5 bg-stone-50 text-sm rounded-bl-4xl rounded-r-4xl text-gray-700/80 normal-case text-shadow-none font-normal'> {data?.note || ''} </p></div>}

  {/* <div >
     <div className="flex flex-col gap-2 mt-4">
       <label className="text-center">Questions / Comments :</label>
       <textarea className="mx-10 p-4" rows={10} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="..."/>
     </div>
     <button className="w-full flex items-center justify-center my-10 text-2xl font-bold" type="submit">
        <div className="border-cyan-300 border-2 p-5 rounded-sm">Send</div></button>
</div> */}
</>
    )
}
 