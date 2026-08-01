'use client'
import ReportSectionAdmin from '../_ui/ReportSectionAdmin'
import { RatingAdmin } from '../_ui/RatingAdmin'
import { meals } from '../_services/data'
import { useDaycareForm } from '../_services/DaycareFormContext'

export default function EatDrinkForm() {
  const { form, setForm, issue, setIssue } = useDaycareForm()

  return (
    <ReportSectionAdmin
      title="Eat & Drink"
      color="bg-linear-to-tl from-emerald-400 to-emerald-200"
      gotIssue={issue.eatDrink}
      onClick={() => setIssue((i) => ({ ...i, eatDrink: !i.eatDrink }))}
    >
      <RatingAdmin
        label={`${form.name} ate well`}
        name="appetit"
        value={form.appetit}
        onChange={(val) => setForm((prev) => ({ ...prev, appetit: val }))}
      />
      <h4 className="md:uppercase text-stone-600/50 md:tracking-wide tracking-tight font-bold">{form.name} ate today:</h4>
      <div className="grid grid-cols-2 mt-2">
        {meals.map((item) => (
          <label className="text-stone-700 tracking-wide text-sm font-semibold md:font-bold md:tracking-tight" htmlFor={item} key={item}>
            {' '}
            <input
              id={item}
              className="mr-5"
              type="checkbox"
              checked={form.meal.includes(item)}
              onChange={() =>
                setForm((prev) => ({ ...prev, meal: prev.meal.includes(item) ? prev.meal.filter((v) => v !== item) : [...prev.meal, item] }))
              }
            />{' '}
            {item}{' '}
          </label>
        ))}
      </div>
      <RatingAdmin
        label={`${form.name} drank well`}
        name="drink"
        value={form.drink}
        onChange={(val) => setForm((prev) => ({ ...prev, drink: val }))}
      />
    </ReportSectionAdmin>
  )
}
