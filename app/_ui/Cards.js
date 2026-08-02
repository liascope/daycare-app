export default function Cards({ children, style }) {
  return (
    <div
      className={`w-40 h-32 sm:w-52 sm:h-40 md:w-72 md:h-56 p-2 shadow-lg backdrop-blur-xl transition-all hover:-translate-y-2 border-y-4 rounded-2xl border-r duration-200 flex flex-row items-center ${style}`}
    >
      {children}
    </div>
  )
}
