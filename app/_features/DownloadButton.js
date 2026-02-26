 "use client"

// Dev mood:
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
     <button className="z-50 cursor-pointer font-extrabold bg-linear-to-br from-teal-200 via-teal-400 to-teal-200
      hover:via-teal-700 rounded-sm w-10 shadow-sm transition-colors absolute right-5 duration-300" onClick={downloadImages}>
       <Download/>
    </button>
  )
}
// 
// Prod mood:
// import { saveAs } from "file-saver"
// import Download from "../_icons/Download"
// import { downloadImagesServer } from "../_services/actions"
// 
// export default function DownloadButton({ photos }) {
//   const handleDownload = async () => {
//     try {
//       const zipContent = await downloadImagesServer(photos)
// 
//       const blob = new Blob([zipContent], { type: "application/zip" })
//       saveAs(blob, "photos.zip")
//     } catch (err) {
//       console.error("Download fehlgeschlagen:", err)
//     }
//   }
// 
//   return (
//     <button
//       className="cursor-pointer font-extrabold bg-linear-to-br from-teal-200 via-teal-400 to-teal-200
//         hover:via-teal-600 rounded-sm w-10 shadow-sm transition-colors absolute right-5 duration-300"
//       onClick={handleDownload}
//     >
//       <Download />
//     </button>
//   )
// }