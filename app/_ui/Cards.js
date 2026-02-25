export default function Cards ({children, style}){
   return (<div className={`w-100 h-50 p-1 flex flex-row bg-linear-to-br shadow-2xl from-orange-50 via-orange-200 to-orange-50 rounded-2xl ${style}`}>{children}</div>) 
}