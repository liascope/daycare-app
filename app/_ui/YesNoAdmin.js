export default function YesNoAdmin({ label, value, onChange, name, calm = false, wc = false }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <h4 className="md:uppercase text-stone-600/50 md:tracking-wide tracking-tight font-bold">{label}</h4>
      <div className="flex flex-row gap-5">
        <label className="text-stone-700 tracking-wide text-sm md:text-base font-semibold md:font-bold md:tracking-tight">
          {' '}
          <input required type="radio" name={name} checked={value === true} onChange={() => onChange(true)} className="mr-2" />
          {calm ? 'easy' : wc ? '💩' : 'Yes'}{' '}
        </label>

        <label className="text-stone-700 tracking-wide text-sm md:text-base font-semibold md:font-bold md:tracking-tight">
          {' '}
          <input required type="radio" name={name} checked={value === false} onChange={() => onChange(false)} className="mr-2 " />
          {calm ? 'uneasy' : wc ? '💧' : 'No'}{' '}
        </label>
      </div>
    </div>
  )
}
