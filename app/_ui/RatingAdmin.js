const RATING_OPTIONS = [
  { label: "Okay", value: 1 },
  { label: "good", value: 2 },
  { label: "very good", value: 3 },
]

export function RatingAdmin({ label, value, onChange}) {
  return (
    <div className="flex flex-row items-center justify-between text-sm ">
      <h4 className="uppercase text-stone-600/50 tracking-wide md:tracking-tight font-extrabold">{label}</h4>
     <div className="flex flex-row gap-5 md:gap-1">
      {RATING_OPTIONS.map((opt) => (
        <label key={opt.value} className="uppercase text-stone-600 tracking-wide font-extrabold md:font-bold md:tracking-tight" >
          <input 
            type="radio"
            name={label}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="mr-2"
            required
          />
          {opt.label}
        </label>
      ))}</div>
    </div>
  )
}
