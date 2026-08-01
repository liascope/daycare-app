const RATING_OPTIONS = [
  { label: 'okay', value: 1 },
  { label: 'good', value: 2 },
  { label: 'very good', value: 3 },
]

export function RatingAdmin({ label, value, onChange }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <h4 className="md:uppercase text-stone-600/50 md:tracking-wide tracking-tight font-bold">{label}</h4>
      <div className="flex flex-row gap-1 md:gap-3 w-fit whitespace-nowrap">
        {RATING_OPTIONS.map((opt) => (
          <label
            key={opt.value}
            className="text-stone-700 tracking-wide text-sm md:text-base font-semibold md:font-bold md:tracking-tight flex flex-row items-center justify-center"
          >
            <input type="radio" name={label} checked={value === opt.value} onChange={() => onChange(opt.value)} className="mr-1 md:mr-2" required />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  )
}
