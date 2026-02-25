
export default function ReportSectionAdmin({ title, color, children, gotIssue, onClick, photo=false }) {
   
  return (
    <div className="w-full">
      <h1 className={`relative w-full flex flex-row items-center justify-between px-10 py-3 text-center text-xl font-bold rounded tracking-wide uppercase text-shadow-sm ${color}`}>
        {title}{photo ? '' : <div onClick={onClick} className={`${gotIssue ? 'bg-red-500' : ''} w-4 h-4 rounded-full border-2 border-red-500`}></div>}
      </h1> 
     <div className="overflow-hidden flex flex-col md:font-extralight rounded transition-all duration-500 ease-in-out bg-linear-to-tl from-teal-50 via-gray-50 to-teal-50 max-h-700">
     <div className="flex flex-col px-2 py-5 gap-7  text-shadow-xs"> {children}</div>
     </div>
    </div>
  );
}
