export default function ReportedToday({ reportedToday }) {
  const today = new Date().toISOString().slice(0, 10)
  return (
    <div
      className="
    flex-1
    w-full
    rounded-2xl
    border
    border-stone-200
    backdrop-blur-2xl
    p-5
    shadow-sm
  "
    >
      <h2
        className="
      mb-4
      text-center text-lg
      md:text-xl font-bold"
      >
        Reports Today
        <span className="block text-sm font-semibold text-stone-500">
          {new Date(today).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </span>
      </h2>

      {reportedToday?.length === 0 ? (
        <p className="text-center text-stone-500">No reports today.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-2">
          {reportedToday.map((child) => (
            <span
              key={child}
              className="
            rounded-full
            bg-teal-100
            px-4
            py-2
            text-sm
            font-bold
            text-teal-700
          "
            >
              ✓ {child}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
