'use client'
import ReportSectionAdmin from "../_ui/ReportSectionAdmin"
import { useDaycareForm } from "../_services/DaycareFormContext"

export default function PhotosNotesForm () {
    
const {photos, setPhotos, issueTags, setForm,form} = useDaycareForm();

const handlePhotoChange = (e) => {const files = Array.from(e.target.files);
  const newPhotos = files.map(file => ({file, name: file.name, title: ''})); setPhotos(prev => [...prev, ...newPhotos]);};

const updateTitle = (index, title) => {setPhotos(prev => prev.map((p, i) => i === index ? { ...p, title } : p  ));};

const removePhoto = (index) => {setPhotos(prev => prev.filter((_, i) => i !== index));};

 return (
    <ReportSectionAdmin title="Photos & Notes" color="border-orange-300 bg-linear-to-r from-orange-300 to-orange-100" photo={true}>
     <div className="flex flex-col gap-2 items-center w-[90%]">
    <label htmlFor="photos" className="cursor-pointer transition-all duration-300 hover:via-teal-400 py-4 rounded-sm text-white/90 uppercase font-extrabold tracking-widest bg-linear-to-br from-orange-200 via-orange-300 to-teal-50 px-5 mb-10">Add photos</label>
    <input  id='photos' type="file"  multiple accept="image/*" onChange={handlePhotoChange} className="hidden"/>
    {photos.length > 0 && (<ul> {photos.map((photo, index) => (
      <li key={index} className="flex flex-row items-center justify-between normal-case gap-5 md:gap-2 text-stone-600 border-y-2">
        <input id='photos' className="focus:outline-none focus:ring-0 focus:border-t-transparent border-r-2" type="text" value={photo.title}
          onChange={(e) => updateTitle(index, e.target.value)}
          placeholder="Description"/>
        <span>{photo.name}</span>
        <button type="button" className="hover:scale-98 cursor-pointer border-l-2" onClick={() => removePhoto(index)}>❌</button>
      </li>))} </ul>)}
     </div>
     {issueTags.length > 0 && (<>
    <ul className="flex flex-wrap gap-2 items-center">
    <h3 className="uppercase text-stone-600/50 tracking-wide text-sm font-extrabold">Issues:</h3>
    {issueTags?.map((item) => (<li className="odd:text-stone-600 even:text-stone-600/80 tracking-wide text-md font-extrabold" key={item}>{item}</li> ))}</ul>
    <textarea required={issueTags.length > 0} id='notes' className="p-4 border-orange-300/50 border-2 rounded-l-4xl rounded-br-4xl  focus:outline-none focus:ring-0" rows={5} value={form.comment} onChange={(e) => setForm(f=>({...f, comment:e.target.value}))} placeholder="issue notes"/></>)}
    </ReportSectionAdmin> )
}