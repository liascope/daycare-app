import Image from 'next/image'

export default function YesNo({ title, isTrue, getMood = false }) {
  return (
    <div className="flex items-center flex-col justify-center">
      <h2 className="mb-5">{title}</h2>
      {!getMood ? (
        <div className="w-40 h-40 relative m-3 ">
          <Image className="absolute" src={`/emojis/${isTrue ? 'yes' : 'no'}.png`} alt="emoji" fill sizes="120px" priority />
        </div>
      ) : (
        <div className="w-30 h-30 relative m-3">
          <Image className="absolute w-30 h-30" src={`/emojis/${isTrue ? 'easy' : 'uneasy'}.png`} alt="emoji" fill sizes="120px" priority />
        </div>
      )}
    </div>
  )
}
