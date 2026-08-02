import ActivityLearning from '../_sections/ActivityLearning'
import EatDrink from '../_sections/EatDrink'
import HygieneCare from '../_sections/HygieneCare'
import MoodBehavior from '../_sections/MoodBehavior'
import PhotosNotes from '../_sections/PhotosNotes'
import SleepRest from '../_sections/SleepRest'
import ReportSection from '../_ui/ReportSection'

export default function Reports({ data }) {
  if (!data) return
  return (
    <div className="flex flex-col ">
      <ReportSection title="Eat & Drink" color="border-emerald-300 bg-linear-to-r from-emerald-300/80 to-emerald-100">
        <EatDrink data={data} />
      </ReportSection>

      <ReportSection title="Sleep & Rest Time" color="border-violet-300 bg-linear-to-r from-violet-300/80 to-violet-100">
        <SleepRest data={data} />
      </ReportSection>

      <ReportSection title="Mood & Behavior" color="border-rose-300 bg-linear-to-r from-rose-300/80 to-rose-100">
        <MoodBehavior data={data} />
      </ReportSection>

      <ReportSection title="Activity & Learning" color=" border-cyan-300 bg-linear-to-r from-cyan-300/80 to-cyan-100">
        <ActivityLearning data={data} />
      </ReportSection>

      <ReportSection title="Hygiene & Care" color="border-blue-300 bg-linear-to-r from-blue-300/80 to-blue-100">
        <HygieneCare data={data} />
      </ReportSection>

      <ReportSection title="Photos & Notes" color="border-orange-300 bg-linear-to-r from-orange-300/80 to-orange-100" issue={data?.hashs.length > 0}>
        <PhotosNotes data={data} />
      </ReportSection>
    </div>
  )
}
