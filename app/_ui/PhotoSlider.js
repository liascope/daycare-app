'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import DownloadButton from '../_features/DownloadButton'

export default function PhotoSlider({ images = [] }) {
  const [current, setCurrent] = useState(0)

  if (!images.length) {
    return null
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-stone-100/20">
      <DownloadButton photos={images} />

      {/* Slider */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="shrink-0 w-full flex flex-col gap-3 p-4 sm:p-6">
            {/* Title */}
            {src?.title && <div className="text-center font-semibold text-stone-600 ">{src.title}</div>}

            {/* Image */}
            <div className="relative w-full h-72 sm:h-96 lg:h-144 rounded-2xl overflow-hidden">
              <Image
                src={src.url}
                alt={`img-${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className=" object-contain transition-transform duration-500 hover:scale-105 brightness-95 saturate-90"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2
              rounded-full bg-white/80 backdrop-blur
              shadow-md p-2  text-stone-700 hover:bg-white transition"
          >
            <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2
              rounded-full bg-white/80 backdrop-blur shadow-md p-2
              text-stone-700 hover:bg-white transition"
          >
            <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </>
      )}

      {/* Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all
                ${current === index ? 'bg-orange-500/70 w-6' : 'bg-white'}
              `}
            />
          ))}
        </div>
      )}
    </div>
  )
}
