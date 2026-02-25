import { useFormStatus } from "react-dom"
import Spinner from "./Spinner"

export default function SubmitButton ({children, disabled}) {
const { pending } = useFormStatus()
  return (
    <button
    disabled={disabled}
      type="submit"
      className="p-3 uppercase w-45 cursor-pointer font-extrabold bg-linear-to-br from-teal-200 via-teal-400 to-teal-200
      hover:via-teal-600
       text-white
       rounded-xl
       shadow-sm transition-colors duration-300">
      {pending ? <div className="scale-50"><Spinner padding="py-0"/></div>: children}
    </button>
  )
}
