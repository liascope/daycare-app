import { useFormStatus } from 'react-dom'
import Spinner from './Spinner'

export default function SubmitButton({ children, disabled, deleteBtn = false }) {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`w-full rounded-xl px-6 py-3 font-bold text-white transition-all duration-200 cursor-pointer hover:shadow-md
    disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]
    ${deleteBtn ? 'bg-orange-600 hover:bg-orange-700' : 'bg-teal-600 hover:bg-teal-700'}`}
    >
      {pending ? (
        <div className="flex justify-center">
          <Spinner padding="py-0" />
        </div>
      ) : (
        children
      )}
    </button>
  )
}
