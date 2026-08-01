export default function ReportSectionAdmin({ title, color, children, gotIssue, onClick, photo = false }) {
  return (
    <div className="w-full px-2">
      <h1
        className={`relative w-full flex flex-row items-center justify-between px-10 py-3 text-center text-lg md:text-xl font-bold rounded-2xl tracking-wide uppercase text-shadow-sm ${color}`}
      >
        {title}
        {photo ? (
          ''
        ) : (
          <div
            title="mark issue"
            onClick={onClick}
            className="transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-2 md:w-7 md:h-7 w-5 h-5 rounded-full border-4 border-dotted border-red-500 p-0.5 hover:p-1"
          >
            <div
              className={`transition-all duration-200 ease-linear w-full h-full rounded-full hover:bg-red-500/80 ${gotIssue ? 'bg-red-500' : 'bg-none'}`}
            ></div>
          </div>
        )}
      </h1>
      <div className="overflow-hidden flex flex-col md:font-extralight transition-all duration-500 ease-in-out max-h-700 backdrop-blur-3xl rounded-2xl mt-0.5 md:mt-2 shadow-md border border-stone-100">
        <div className="flex flex-col px-2 py-5 gap-7 text-shadow-xs"> {children}</div>
      </div>
    </div>
  )
}
