'use client'
import { useDaycareForm } from '../_services/DaycareFormContext'
export default function SelectChild({ allChildren }) {
  const { form, setForm } = useDaycareForm()
  return (
    <div className="mb-10 flex justify-center">
      <div
        className="
          w-full
    max-w-lg
    rounded-2xl
    border
    border-stone-200
    backdrop-blur-xl
    p-6
    shadow-sm
    "
      >
        <label
          htmlFor="reportChild"
          className="
        mb-3
        flex
        items-center
        gap-2
        text-sm
        font-extrabold
        uppercase
        tracking-wide
        text-stone-700
      "
        >
          Report for
        </label>

        <select
          required
          id="reportChild"
          name="child_id"
          value={form?.id ?? ''}
          onChange={(e) => {
            const value = e.target.value

            if (!value) {
              setForm((f) => ({
                ...f,
                id: '',
                name: '',
              }))
              return
            }

            const selectedChild = allChildren?.find((c) => c.id === value)

            if (!selectedChild) return

            setForm((f) => ({
              ...f,
              id: selectedChild.id,
              name: selectedChild.name,
            }))
          }}
          className="
        w-full
        cursor-pointer
        rounded-xl
        border
        border-stone-300
        bg-white
        px-4
        py-3
        font-semibold
        text-stone-700
        shadow-sm
        outline-none
        transition
        hover:border-teal-400
        focus:border-teal-500
        focus:ring-2
        focus:ring-teal-100
      "
        >
          <option value="">Select a child...</option>

          {allChildren?.map((child) => (
            <option key={child.id} value={child.id}>
              {child.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
