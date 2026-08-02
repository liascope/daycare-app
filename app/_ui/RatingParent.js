import Image from 'next/image'

export default function RatingParent({ rating, title }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-5">{title}</h2>
      <div className="w-30 h-30 relative m-3">
        <Image className="absolute w-30 h-30" src={`/emojis/${rating}.png`} alt={`emoji-${rating}`} fill sizes="120px" />
      </div>{' '}
    </div>
  )
}
