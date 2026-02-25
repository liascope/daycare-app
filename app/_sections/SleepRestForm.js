'use client'
import ReportSectionAdmin from "../_ui/ReportSectionAdmin"
import YesNoAdmin from "../_ui/YesNoAdmin"
import { RatingAdmin } from "../_ui/RatingAdmin"
import { useDaycareForm } from "../_services/DaycareFormContext"

export default function SleepRestForm () {
const {form, setForm, issue, setIssue} = useDaycareForm()

    return (<ReportSectionAdmin title="Sleep & Rest Time" color="border-violet-300 bg-linear-to-r from-violet-300 to-violet-100" gotIssue={issue.sleepCalm} onClick={() => setIssue((i) => ({...i, sleepCalm: !i.sleepCalm}))} >
   <YesNoAdmin label={`${form.name} took a nap`} name="sleep" value={form.sleep} onChange={(val) => setForm((prev) => ({ ...prev, sleep: val })) } />
   {form.sleep && (<>
   <RatingAdmin label="Duration" name="sleep_duration" value={form.duration} onChange={(val) => setForm((prev) => ({ ...prev, duration: val })) } />
   <RatingAdmin label="Sleep quality" name="sleep_quality" value={form.quality} onChange={(val) => setForm((prev) => ({ ...prev, quality: val })) }/>
   <RatingAdmin label="Sleep latency" name="sleep_latency"value={form.latency} onChange={(val) =>setForm((prev) => ({ ...prev, latency: val }))} /></>)}
    </ReportSectionAdmin>)
}