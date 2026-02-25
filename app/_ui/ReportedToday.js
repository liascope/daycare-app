
export default function ReportedToday ({reportedToday}) {
    
   const today = new Date().toISOString().slice(0,10)
    return (<div className="flex-1 w-full transition-all duration-300 py-4 rounded-sm font-extrabold bg-linear-to-br from-yellow-50 via-yellow-300 to-yellow-200 px-5 mb-10 text-white/90 uppercase tracking-wide">
  <h2 className="text-center text-xl md:text-lg mb-3">Reported Today, {new Date(today).toLocaleDateString("de-DE")} </h2>
   {reportedToday?.length === 0 ? (
      <div className='text-center'>No reports today.</div>
    ) : (<ul className="flex flex-row items-center justify-center list-disc gap-2 px-3">
 {reportedToday.map((c)=><li className="ml-6" key={c}>{c}</li>)}
</ul>)}

</div>)
}