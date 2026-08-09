'use client'
import ReportSectionAdmin from '../_ui/ReportSectionAdmin'
import { RatingAdmin } from '../_ui/RatingAdmin'
import YesNoAdmin from '../_ui/YesNoAdmin'
import { useDaycareForm } from '../_services/DaycareFormContext'

export default function MoodBehaviorForm() {
  const { form, setForm, setIssue, issue } = useDaycareForm()

  return (
    <ReportSectionAdmin
      title="Mood & Behavior"
      color="bg-linear-to-tl from-rose-400 to-rose-200"
      gotIssue={issue.moodBehavior}
      onClick={() => setIssue((i) => ({ ...i, moodBehavior: !i.moodBehavior }))}
    >
      <RatingAdmin
        label={`${form.name} general mood`}
        name="mood"
        value={form.mood}
        onChange={(val) => setForm((prev) => ({ ...prev, mood: val }))}
      />
      <RatingAdmin
        label={`${form.name} played with others`}
        name="playOthers"
        value={form.playOthers}
        onChange={(val) => setForm((prev) => ({ ...prev, playOthers: val }))}
      />
      <YesNoAdmin
        label={`${form.name} was rather`}
        name="calm"
        calm={true}
        value={form.calm}
        onChange={(val) => setForm((prev) => ({ ...prev, calm: val }))}
      />
      <YesNoAdmin
        label={`${form.name} had conflicts`}
        name="conflicts"
        value={form.conflicts}
        onChange={(val) => setForm((prev) => ({ ...prev, conflicts: val }))}
      />
    </ReportSectionAdmin>
  )
}
