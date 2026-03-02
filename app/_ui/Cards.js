export default function Cards ({children, style}){
   return (<div className={`w-50 h-25 md:w-60 md:h-30 sm:w-70 sm:h-35 lg:w-100 lg:h-50 p-1 flex flex-row bg-linear-to-br shadow-2xl from-orange-50 via-orange-200 to-orange-50 rounded-2xl sm:text-2xl lg:text-3xl md:text-xl text-lg  ${style}`}>{children}</div>) 
}