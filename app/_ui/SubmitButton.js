import { useFormStatus } from "react-dom"
import Spinner from "./Spinner"

export default function SubmitButton ({children, disabled, deleteBtn =false}) {
const { pending } = useFormStatus()
  return (
    <button
    disabled={disabled}
      type="submit"
      className={`p-3 uppercase w-44 cursor-pointer font-extrabold 
       text-white
       shadow-sm transition-colors duration-300 ${deleteBtn ? 'bg-linear-to-br from-orange-200 via-orange-300 to-teal-50 px-5 py-2 cursor-pointer hover:via-orange-200 rounded' : 'rounded-xl bg-linear-to-br from-teal-200 via-teal-400 to-teal-200 hover:via-teal-600'}`}>
      {pending ? <div className="scale-50"><Spinner padding="py-0"/></div>: children}
    </button>
  )
}
