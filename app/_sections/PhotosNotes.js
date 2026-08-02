import PhotoSlider from '../_ui/PhotoSlider'

const titleColors = [
  { title: '#eatDrink', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { title: '#sleepCalm', color: 'text-violet-600 bg-violet-50 border-violet-200' },
  { title: '#moodBehavior', color: 'text-rose-600 bg-rose-50 border-rose-200' },
  { title: '#activityLearning', color: 'text-cyan-600 bg-cyan-50 border-cyan-200' },
  { title: '#hygeneCare', color: 'text-blue-600 bg-blue-50 border-blue-200' },
]

export default function PhotosNotes({ data }) {
  const titles =
    data?.hashs?.map((b) => ({
      title: b,
      color: titleColors.find((r) => r.title === b)?.color || 'text-stone-600 bg-stone-100 border-stone-200',
    })) || []

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Photos */}
      {data?.photos?.length > 0 && (
        <div className="w-full">
          <PhotoSlider images={data?.photos || []} />
        </div>
      )}

      {/* Notes */}
      {data?.note && (
        <div className="flex flex-col gap-4 rounded-3xl bg-stone-100/20 backdrop-blur-xl  p-5 md:p-8">
          <h2
            className="text-center text-lg md:text-xl
              font-extrabold tracking-widest text-stone-700 mb-5"
          >
            Notes
          </h2>

          {titles.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {titles.map((b) => (
                <span
                  key={b.title}
                  className={`px-3 py-1 rounded-full border text-xx md:text-sm font-bold tracking-wide
                    ${b.color}`}
                >
                  {b.title}
                </span>
              ))}
            </div>
          )}

          <p
            className="rounded-2xl backdrop-blur-xl px-5 py-5 md:px-8 md:py-8 text-sm md:text-base leading-relaxed font-medium shadow
              text-stone-600"
          >
            {data.note}
          </p>
        </div>
      )}
    </div>
  )
}
