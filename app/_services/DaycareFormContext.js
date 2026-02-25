'use client'
import { createContext, useContext, useState, useEffect,} from 'react';
import { sendReport } from "./actions"

const initialForm = {
  name:'', id:'',
  appetit:null, meal:[], drink:null,// 1 | 2 | 3
  sleep:null, duration:null, quality:null, latency:null ,// true / false + 1 | 2 | 3
  mood:null, playOthers:null, calm:null, conflicts:null,// true / false + 1 | 2 | 3
  diaper:null, wc:null, wcType:null, cleanHands:null,// true / false
  activities:[],
  comment:'',
}

const DaycareFormContext = createContext();

export function DaycareFormProvider({ children }) {
 const [confirm, setConfirm] = useState(false)
 const [form, setForm] = useState(initialForm)
 const [photos, setPhotos] = useState([]) // File[]
 const [issue, setIssue] = useState({eatDrink:false, sleepCalm:false, moodBehavior:false, activityLearning:false, hygeneCare:false })
 const issueTags = Object.entries(issue).filter(([_, value]) => value === true).map(([key]) => `#${key}`);
  
useEffect(() => {
  if (!form.conflicts) return;
// { eslint-disable-next-line react-hooks/exhaustive-deps}
 setIssue(prev => prev.moodBehavior ? prev : { ...prev, moodBehavior: true });}, [form.conflicts]);

async function handleSubmit(e) {
  e.preventDefault();
  
  if (form.meal.length === 0 && !issue.eatDrink) {setIssue((prev) => ({ ...prev, eatDrink: true }))}
  if (form.activities.length === 0 && !issue.activityLearning) {setIssue((prev) =>({ ...prev, activityLearning: true }))}

 const payload = {      
    child_id: form.id,    
    photos:photos,
    report_date: new Date().toISOString().slice(0,10),
    eat: form.appetit,
    drink: form.drink,
    meal: form.meal,
    sleep: form.sleep,
    sleep_duration: form.duration,
    sleep_latency: form.latency,
    sleep_quality: form.quality,
    mood: form.mood,
    playWothers: form.playOthers,
    calm: form.calm,
    conflicts: form.conflicts,
    activities: form.activities,
    diaper: form.diaper,
    wc: form.wc,
    wcType: form.wcType,
    wash_hand: form.cleanHands,
    hashs: issueTags,
    note: form.comment
  }
try {
  await sendReport(payload);
     setConfirm((c)=>!c)
     setTimeout(() => {setConfirm(false); setForm(initialForm); setPhotos([])
     setIssue({eatDrink:false, sleepCalm:false, moodBehavior:false, activityLearning:false, hygeneCare:false })}, 4000)
} catch (err) {alert("Error: " + err.message);}}

const contextValue = {confirm, form, setForm, photos, setPhotos, issue, setIssue, issueTags, handleSubmit}
  return (<DaycareFormContext.Provider value={contextValue}> {children}</DaycareFormContext.Provider>); }

export function useDaycareForm() {
  const context = useContext(DaycareFormContext);
  if (!context) {
    throw new Error('useDaycareForm must be used within DaycareFormProvider');
  }
  return context;
}
