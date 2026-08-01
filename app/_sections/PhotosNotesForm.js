'use client'
import ReportSectionAdmin from '../_ui/ReportSectionAdmin'
import { useDaycareForm } from '../_services/DaycareFormContext'

export default function PhotosNotesForm() {
  const { photos, setPhotos, issueTags, setForm, form } = useDaycareForm()

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files)
    const newPhotos = files.map((file) => ({ file, name: file.name, title: '' }))
    setPhotos((prev) => [...prev, ...newPhotos])
  }

  const updateTitle = (index, title) => {
    setPhotos((prev) => prev.map((p, i) => (i === index ? { ...p, title } : p)))
  }

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <ReportSectionAdmin title="Photos & Notes" color="border-orange-300 bg-linear-to-r from-orange-300 to-orange-100" photo={true}>
      <div className="flex flex-col gap-6">
        {/* Upload */}
        <div className="flex flex-col items-center gap-3">
          <label
            htmlFor="photosFile"
            className="
          flex
          w-xs
          cursor-pointer
          items-center
          justify-center
          rounded-xl
          border-2
          border-dashed
          border-orange-300
          bg-orange-50
          px-5
          py-4
          font-bold
          md:uppercase
          tracking-wide
          text-orange-600/80
          transition
          hover:bg-orange-100
        "
          >
            + Add photos
          </label>

          <input id="photosFile" type="file" multiple accept="image/*" onChange={handlePhotoChange} className="hidden" />

          <p className="text-xs text-stone-500">Add photos from today's activities</p>
        </div>

        {/* Uploaded photos */}
        {photos.length > 0 && (
          <div className="flex flex-col gap-3">
            {photos.map((photo, index) => (
              <div
                key={photo.name}
                className="
              flex
              gap-0.5
              md:gap-3
              rounded-xl
              border
              border-stone-200
              bg-white
              p-3
              flex-row
              items-start justify-between
            "
              >
                <div className="flex md:flex-row flex-col gap-1 w-full md:items-center">
                  <input
                    type="text"
                    value={photo.title}
                    onChange={(e) => updateTitle(index, e.target.value)}
                    placeholder="Description"
                    className="flex-1
                rounded-lg
                border
                border-stone-300
                px-3
                py-2
                text-sm
                outline-none
                focus:border-orange-400
              "
                  />

                  <span className="text-xs md:w-1/4 text-stone-400 px-1">{photo.name}</span>
                </div>

                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="
                rounded-lg
                px-3
                py-2
                text-red-500
                transition 
                hover:bg-red-50
              "
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Issues */}
        {issueTags.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="
              text-sm
              font-bold
              uppercase
              tracking-wide
              text-stone-500
            "
              >
                Issues:
              </span>

              {issueTags.map((item) => (
                <span
                  key={item}
                  className="
                rounded-full
                bg-red-100
                px-3
                py-1
                text-sm
                font-bold
                text-red-600
              "
                >
                  {item}
                </span>
              ))}
            </div>

            <textarea
              required
              id="notes"
              rows={5}
              value={form.comment}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  comment: e.target.value,
                }))
              }
              placeholder="Describe the issue..."
              className="
            resize-none
            rounded-xl
            border
            border-orange-300
            p-4
            outline-none
            focus:border-orange-500
            focus:ring-2
            focus:ring-orange-100
          "
            />
          </div>
        )}
      </div>
    </ReportSectionAdmin>
  )
}
