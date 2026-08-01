'use client'

import ReportedToday from '../_ui/ReportedToday'
import SubmitButton from '../_ui/SubmitButton'
import UserManagement from './UserManagement'
import { useDaycareForm } from '../_services/DaycareFormContext'
import SelectChild from '../_ui/SelectChild'
import ActivityLearningForm from '../_sections/ActivitiyLearningForm'
import EatDrinkForm from '../_sections/EatDrinkForm'
import SleepRestForm from '../_sections/SleepRestForm'
import MoodBehaviorForm from '../_sections/MoodBehaviorForm'
import HygieneCareForm from '../_sections/HygieneCareForm'
import PhotosNotesForm from '../_sections/PhotosNotesForm'

export default function DaycareAdmin({ reportedToday, allChildren }) {
  const { confirm, form, handleSubmit } = useDaycareForm()

  if (!allChildren) return

  return (
    <div className="font-sans w-full h-fit flex flex-col justify-center px-2">
      <h1 className="text-center font-extrabold text-2xl md:text-3xl my-10">Administration Panel</h1>

      <div className="relative w-full flex flex-col md:flex-row justify-between gap-2">
        <UserManagement allChildren={allChildren} />
        <ReportedToday reportedToday={reportedToday} />
      </div>

      <form onSubmit={handleSubmit}>
        {confirm ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border  border-teal-200 bg-teal-50 p-8 text-center font-bold text-stone-700 shadow-sm m-5">
            <div
              className="flex md:h-12 h-9 w-9 md:w-12
      items-center justify-center rounded-full  bg-teal-500 text-xl md:text-2xl text-white"
            >
              ✓
            </div>

            <p className="text-base md:text-lg">Report successfully sent</p>

            <p className="text-xs md:text-sm text-stone-500">
              Report for
              <span className="mx-2 uppercase tracking-wider font-extrabold text-teal-700">{form.name}</span>
              has been saved.
            </p>
          </div>
        ) : (
          <fieldset className="flex flex-col py-10">
            <SelectChild allChildren={allChildren} />

            {form.name && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <EatDrinkForm />
                  <SleepRestForm />
                  <MoodBehaviorForm />
                  <ActivityLearningForm />
                  <HygieneCareForm />
                  <PhotosNotesForm />
                </div>
                <div className="w-full text-center mt-15">
                  <SubmitButton>Send Report</SubmitButton>{' '}
                </div>{' '}
              </>
            )}
          </fieldset>
        )}
      </form>
    </div>
  )
}
