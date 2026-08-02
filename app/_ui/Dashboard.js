import Image from 'next/image'
import { sleepDuration } from '../_services/data'
import Cards from './Cards'

export default function Dashboard({ data }) {
  const defaultImage = '/defaultPhoto.png'

  const photos = data?.photos?.slice(0, 2).map((p) => p.url) || []

  while (photos.length < 3) {
    photos.push(defaultImage)
  }

  return (
    <div className="w-full flex flex-col items-center h-fit py-10 font-extrabold">
      <header className="flex flex-col items-center justify-center mb-12 px-4 text-center [text-shadow:3px_3px_3px_rgba(0,0,0,0.1)]">
        <h1 className="flex flex-row items-center justify-center gap-2 text-3xl  md:text-4xl font-extrabold tracking-tight text-stone-700">
          <span className="text-teal-600 uppercase">{data?.children?.name || ''}</span>
          <span>'s Day</span>
        </h1>

        <p className="mt-3 text-lg  md:text-2xl font-semibold text-stone-500">
          {new Date(data?.report_date).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </header>

      <div className="flex flex-wrap justify-center items-center mb-16 uppercase font-bold tracking-wide gap-2">
        <Cards style="text-rose-300">
          <div className="flex justify-center items-center p-4">
            <Image src={`/emojis/${data?.mood || 0}.png`} alt="" width={120} height={120} className="object-contain" />
          </div>
          <div className="p-3 w-full flex items-center text-xs md:text-base justify-center">Mood</div>
        </Cards>

        <Cards style="text-emerald-300">
          <div className="flex justify-center items-center p-2">
            <Image src={`/emojis/${data?.eat || 0}.png`} alt={`emoji-${data?.eat || 0}`} width={120} height={120} className="object-contain" />
          </div>{' '}
          <div className="p-2 sm:p-3 w-full flex items-center justify-center text-xs md:text-base">Appetite</div>
        </Cards>

        <Cards style="text-violet-300">
          <div
            className="border-4 shadow-2xl scale-80 text-sm sm:text-lg rounded-full flex -rotate-10 items-center justify-center text-center aspect-square h-20 md:h-30
          bg-linear-to-bl from-violet-100 via-white/20 to-violet-100
          "
          >
            {sleepDuration[data?.sleep_duration || 0]?.duration}
          </div>

          <div className="p-2 md:p-5 w-full flex text-xs md:text-base items-center justify-center ">Sleep</div>
        </Cards>

        <Cards style="text-blue-300">
          <div className="w-full h-full flex justify-center items-center relative scale-80 ">
            {photos.map((src, index) => (
              <div
                key={index}
                className={`absolute mr-5 border-4 rounded-full h-20 md:h-30 shadow-2xl flex-1 aspect-square
        ${index === 0 ? 'rotate-5 z-20 ml-10 sm:ml-18' : ''}
        ${index === 1 ? 'ml-5 sm:ml-10 mb-2 -rotate-20 z-10' : ''}
        ${index === 2 ? 'z-0 ml-0 sm:ml-2 mt-1' : ''}
      `}
              >
                {' '}
                <Image
                  className="absolute rounded-full object-cover brightness-90 saturate-75 contrast-90"
                  src={src}
                  alt={`img${index}`}
                  fill
                  sizes="100px"
                />{' '}
              </div>
            ))}
          </div>

          <div className="p-2 md:p-5 w-full text-xs md:text-base flex items-center justify-center ">Photos</div>
        </Cards>

        <Cards style="text-amber-300">
          <ul className="border-4 shadow-2xl rounded-3xl flex items-center justify-center w-40 px-1 h-30 text-center text-xs sm:text-sm lg:text-xl  normal-case flex-col text-shadow-2xs bg-linear-to-bl from-violet-100 via-white/20 to-yellow-100 md:scale-90 -ml-5 md:ml-3 scale-60">
            {data?.hashs.length > 0 ? (
              data?.hashs.map((h, i) => (
                <li className="odd:text-amber-600/90 text-xs even:text-yellow-600/90" key={i}>
                  {h}
                </li>
              ))
            ) : (
              <div className="text-amber-600 tracking-tighter md:tracking-wide">#noIssues𖤓</div>
            )}
          </ul>
          <div className="sm:p-5 p-1 w-full flex items-center text-xs md:text-base justify-center -ml-6">Issues</div>
        </Cards>
      </div>
    </div>
  )
}
