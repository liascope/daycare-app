export default function Spinner({ padding = 'py-10' }) {
  return (
    <div className={`flex flex-row gap-2 w-full justify-center ${padding}`}>
      <div className="w-3 h-3 rounded-full bg-sky-600/80 animate-bounce"></div>
      <div className="w-3 h-3 rounded-full bg-pink-600/80 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-600/80 animate-bounce [animation-delay:-.5s]"></div>
      <div className="w-3 h-3 rounded-full bg-green-600/80 animate-bounce [animation-delay:-.7s]"></div>
    </div>
  )
}
