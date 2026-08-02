import RatingParent from '../_ui/RatingParent'
import Image from 'next/image'
export default function EatDrink({ data }) {
  if (!data?.eat) return <div className="w-full text-center"> - </div>

  return (
    <>
      <RatingParent title={`${data?.children?.name || ''} ate well`} rating={data?.eat} />

      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-5">{data?.children?.name} ate</h2>

        <div className="flex flex-wrap justify-center">
          {data?.meal?.map((m) => (
            <div key={m} className="md:w-30 md:h-30 w-20 h-20 relative m-1 sm:m-3">
              {' '}
              <Image className="absolute" src={`/food/${m?.replace(/\s+/g, '')}.png`} alt={m} fill sizes="120px" priority />
            </div>
          ))}
        </div>
        <div className="text-xs tracking-widest"> {data?.meal?.map((meal) => meal.replace(/-/g, ' ')).join(', ')}</div>
      </div>
      <RatingParent title={`${data?.children?.name} drank well`} rating={data?.drink} />
    </>
  )
}
