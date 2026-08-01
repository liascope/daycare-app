'use client'
import ReportSectionAdmin from '../_ui/ReportSectionAdmin'
import { activity } from '../_services/data'
import { useDaycareForm } from '../_services/DaycareFormContext'

export default function ActivityLearningForm() {
  const { setIssue, issue, form, setForm } = useDaycareForm()
  return (
    <ReportSectionAdmin
      title="Activity & Learning"
      color="border-cyan-300 bg-linear-to-r from-cyan-300 to-cyan-100"
      gotIssue={issue.activityLearning}
      onClick={() => setIssue((i) => ({ ...i, activityLearning: !i.activityLearning }))}
    >
      <h3 className="md:uppercase text-stone-600/50 md:tracking-wide tracking-tight font-bold">{form.name} did following activities:</h3>
      <div className="grid grid-cols-2 mt-2">
        {activity.map((item) => (
          <label className=" text-stone-700 tracking-wide text-sm font-semibold md:font-bold md:tracking-tight" htmlFor={item} key={item}>
            <input
              id={item}
              className="mr-5"
              type="checkbox"
              checked={form.activities.includes(item)}
              onChange={() =>
                setForm((prev) => ({
                  ...prev,
                  activities: prev.activities.includes(item) ? prev.activities.filter((v) => v !== item) : [...prev.activities, item],
                }))
              }
            />{' '}
            {item}{' '}
          </label>
        ))}
      </div>
    </ReportSectionAdmin>
  )
}
