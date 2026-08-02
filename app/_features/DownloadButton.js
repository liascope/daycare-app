'use client'

import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import Download from '../_icons/Download'

export default function DownloadButton({ photos }) {
  const downloadImages = async () => {
    const zip = new JSZip()

    await Promise.all(
      photos.map(async (photo, index) => {
        const res = await fetch(photo.url)
        const blob = await res.blob()

        zip.file(photo.title || `image-${index}.png`, blob)
      }),
    )

    const content = await zip.generateAsync({
      type: 'blob',
    })

    saveAs(content, 'photos.zip')
  }

  return (
    <button
      type="button"
      title="Download photos"
      onClick={downloadImages}
      className="absolute right-4 top-4 z-20 p-1 md:p-2 lg:p-3
        flex items-center justify-center rounded-full
        backdrop-blur-md shadow-md transition-all duration-200 hover:bg-orange-300/80 hover:text-white/80
        active:scale-95
        cursor-pointer"
    >
      <Download />
    </button>
  )
}
