export default function YesNoAdmin ({ label, value, onChange, name, calm=false, wc=false }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <h4 className="uppercase text-stone-600/50 tracking-wide text-sm font-extrabold">{label}</h4>
      <div className="flex flex-row gap-5">
      <label className="uppercase text-stone-600 tracking-wide text-sm font-extrabold"> <input required type="radio"  name={name} checked={value === true} onChange={() => onChange(true)} className="mr-2" />
       {calm ? 'easy' : wc ? '💩' : 'Yes'}  </label>

      <label className="uppercase text-stone-600 tracking-wide text-sm font-extrabold" > <input required type="radio"  name={name}  checked={value === false} onChange={() => onChange(false)}  className="mr-2" />
        {calm ? 'uneasy' : wc? '💧' : 'No'}  </label></div>
    </div>
  )
}
