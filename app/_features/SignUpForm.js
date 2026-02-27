'use client'
import { useState } from "react"
import { createUser } from "../_services/actions"
import SubmitButton from "../_ui/SubmitButton"


const initialForm = {
  username: '',
  password: '',
  repeatPassword: '',
  role: '',
  email: '',
}

export default function SignUpForm ({active}){

const [form, setForm] = useState(initialForm)
const [confirm, setConfirm] = useState(false)
const [error, setError] = useState('')

const handleChange = (field) => (e) =>
  setForm((prev) => ({
    ...prev,
    [field]: e.target.value,
  }))

 const samePassword = form.password === form.repeatPassword

  async function handleAction(formData) {
     try {
      setError('')
      if (!samePassword) throw new Error('Password does not match')
      if (form.role === '-- select --' || form.role === '') throw new Error('Select role')

     if (process.env.NEXT_PUBLIC_DEMO_MODE === "true") { setConfirm((c)=>!c)
     setTimeout(() => {
     setConfirm(false)
      setForm(initialForm);
  }, 4000); 
  return}

      await createUser(formData)
      setConfirm((c)=>!c)
     setTimeout(() => {
     setConfirm(false)
      setForm(initialForm);
  }, 4000)
    } catch (err) {
      setError(err.message)
    }
  }
if (!active) return
   return ( <form action={handleAction}>
         
      {confirm ? <div className="flex flex-col justify-center items-center">
        <div className="text-orange-600/80 uppercase font-bold text-sm tracking-widest">{form.username}</div> as  <div className="text-orange-600/80 uppercase font-bold text-sm tracking-widest" >{form.role}</div> with E-mail:
        <div className="text-orange-600/80 uppercase font-bold text-sm tracking-widest">{form.email}</div> 
       
        successfully created.</div> :  <div className="flex flex-col gap-6 px-5">  <label htmlFor="role" className="flex flex-row border-b justify-left gap-9 items-center"> Role:
             <select id='role' required className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full" name='role' value={form.role} onChange={handleChange('role')} >
              <option>-- select --</option>
            <option value='parent'>Parent</option>
            <option value='caregiver'>Caregiver</option>
           </select></label>

           <label htmlFor="name" className="flex flex-row gap-6 border-b justify-left items-center"> Name: <input autoComplete="off"
            id='name' required className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full" value={form.username} onChange={handleChange('username')} name="name"/> </label>

            <label htmlFor="email" className="flex flex-row gap-6 border-b  justify-left items-center"> E-Mail: <input autoComplete="off"
            id='email' required className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full" value={form.email} onChange={handleChange('email')} name="email"/> </label>

             <label htmlFor="password" className="flex flex-row border-b  justify-left gap-7 items-center" > Password: <input autoComplete="off"
            id='password' required className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full"  type='password' value={form.password} onChange={handleChange('password')} name="password"/> </label>

             <label htmlFor="rPassword" className="flex flex-row border-b  justify-left gap-7 items-center" > Repeat Password: <input autoComplete="off"
            id='rPassword' required className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full" type='password' value={form.repeatPassword} onChange={handleChange('repeatPassword')}/> </label>
             {error && <p className='text-red-600/80 uppercase font-bold text-sm text-center'>{error}</p>} 
             <div className="w-full text-center">
            <SubmitButton  padding='py-0'>Add User</SubmitButton></div>
            </div>}
          </form>
          )
}