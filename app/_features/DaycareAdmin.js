'use client'

import ReportedToday from "../_ui/ReportedToday"
import SubmitButton from "../_ui/SubmitButton"
import UserManagement from "./UserManagement"
import { useDaycareForm } from "../_services/DaycareFormContext"
import SelectChild from "../_ui/SelectChild"
import ActivityLearningForm from "../_sections/ActivitiyLearningForm"
import EatDrinkForm from "../_sections/EatDrinkForm"
import SleepRestForm from "../_sections/SleepRestForm"
import MoodBehaviorForm from "../_sections/MoodBehaviorForm"
import HygieneCareForm from "../_sections/HygieneCareForm"
import PhotosNotesForm from "../_sections/PhotosNotesForm"

export default function DaycareAdmin({reportedToday, allChildren}) { 
  
  const {confirm, form, handleSubmit} = useDaycareForm()

  if (!allChildren) return;

  return (
 
  <div className="font-sans w-full h-fit flex flex-col justify-center">
      <h1 className="text-center uppercase font-extrabold tracking-widest text-3xl my-10">Administration Panel</h1>

      <div className="relative w-full flex flex-col md:flex-row justify-between gap-2">
       <UserManagement allChildren={allChildren}/>
       <ReportedToday reportedToday={reportedToday}/>
     </div>

     <form onSubmit={handleSubmit}> 
      {confirm ? <div className="flex flex-row items-center gap-3 justify-center bg-orange-200/20 uppercase text-stone-700/80 font-bold border-orange-500/70 rounded p-10"> <div>Report for</div> <div className="text-orange-600/80 uppercase font-bold tracking-widest">{form.name}</div> successfully send.</div> : <fieldset className="flex flex-col py-10">
      <SelectChild allChildren={allChildren}/>

      {form.name && (<>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
       <EatDrinkForm/>
       <SleepRestForm/>
       <MoodBehaviorForm/>
       <ActivityLearningForm/>
       <HygieneCareForm/>
       <PhotosNotesForm/>
    </div> 
    <div className="w-full text-center mt-15"><SubmitButton >Send Report</SubmitButton> </div>  </>)}
  </fieldset> }
</form>
</div> )
}
