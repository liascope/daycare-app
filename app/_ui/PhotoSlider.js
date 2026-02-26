"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import DownloadButton from "../_features/DownloadButton";
export default function PhotoSlider({ images}) {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    const firstThree = images.slice(0, 3);

    // console.log(images?.map(p=>p.url))
    
    if (firstThree.every((_, i) => loadedImages[i])) {
    }
  }, [loadedImages, images]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-fit overflow-hidden"
    ><DownloadButton photos={images}/>
      
      {/* pic slider */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-full flex flex-col shrink-0 transition-all duration-700 ease-in-out relative overflow-hidden sm:h-140 h-90 rounded-md`}
          >
            <div className="relative px-10 flex flex-wrap items-center py-2 justify-between"><span className="flex flex-row normal-case font-medium"> {src?.title}</span></div>

            <div className="relative w-full h-full group">
              <Image
                src={src?.url}
                alt={`img-${index + 1}`}
                fill
                sizes="1000px"
                className={`absolute object-contain transition-transform duration-500 group-hover:scale-103  brightness-90 
             saturate-75 
             contrast-90  `}
                onLoad={() => handleImageLoad(index)}   
              />
            </div>
          </div> 
        ))}
      </div>
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-0 -translate-y-1/2
               text-orange-100
            bg-orange-300
               h-fit rounded-full
               shadow-md hover:shadow-lg
               transition-transform duration-300"
  >
    <ChevronLeftIcon className="sm:w-12 w-7 sm:h-12 h-7" />
  </button>

  {/* Right Arrow */}
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-0 -translate-y-1/2
               text-orange-100 bg-orange-300 rounded-full
               h-fit
               shadow-md hover:shadow-lg
               transition-transform duration-300"
  >
    <ChevronRightIcon className="sm:w-12 w-7 sm:h-12 h-7" />
  </button>
    </div>
  );
}
