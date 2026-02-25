"use client"

import JSZip from "jszip"
import { saveAs } from "file-saver"
import Download from "../_icons/Download"

export default function DownloadButton({ photos }) {
  const downloadImages = async () => {
    const zip = new JSZip()

    await Promise.all(
      photos.map(async (photo, index) => {
        const res = await fetch(photo.url)
        const blob = await res.blob()
        zip.file(photo.title || `image-${index}.png`, blob)
      })
    )

    const content = await zip.generateAsync({ type: "blob" })
    saveAs(content, "photos.zip")
  }

  return (
     <button className="cursor-pointer font-extrabold bg-linear-to-br from-teal-200 via-teal-400 to-teal-200
      hover:via-teal-600 rounded-sm w-10 shadow-sm transition-colors absolute right-5 duration-300" onClick={downloadImages}>
       <Download/>
    </button>
  )
}