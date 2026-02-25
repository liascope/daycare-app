'use client'
import ReportSectionAdmin from "../_ui/ReportSectionAdmin"
import YesNoAdmin from "../_ui/YesNoAdmin"
import { useDaycareForm } from "../_services/DaycareFormContext"
export default function HygieneCareForm () {
    const {issue, setIssue, form, setForm} = useDaycareForm();
    return (  <ReportSectionAdmin title="Hygiene & Care" color="border-blue-300 bg-linear-to-r from-blue-300 to-blue-100" gotIssue={issue.hygeneCare} onClick={() => setIssue((i) => ({...i, hygeneCare: !i.hygeneCare}))}>
    <YesNoAdmin label={`${form.name} had diaper changed`} name="diaper" value={form.diaper}
    onChange={(val) => setForm((prev) => ({ ...prev, diaper: val })) }/>   
   {form.diaper && (<YesNoAdmin label={`${form.name} did`} name="wcType" wc={true} value={form.wcType}
    onChange={(val) => setForm((prev) => ({ ...prev, wcType: val })) }/>)} 
   <YesNoAdmin label={`${form.name} used toilet`}  name="wc" value={form.wc} onChange={(val) => setForm((prev) => ({ ...prev, wc: val })) }/>
    <YesNoAdmin label={`${form.name} washed hands`} name="cleanHands" value={form.cleanHands} onChange={(val) =>  setForm((prev) => ({ ...prev, cleanHands: val })) } />
    </ReportSectionAdmin>)
}