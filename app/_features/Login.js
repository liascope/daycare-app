'use client'

import { useState } from 'react'
import { login } from '../_services/actions'
import SubmitButton from '../_ui/SubmitButton'
import { useSearchParams, usePathname } from 'next/navigation'

export default function Login() {
    const pathname = usePathname();

  const isDaycare = pathname.includes("daycare");
 const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const [role, setRole] = useState('') 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
   if (isDaycare) return;

  return (
    <div className="font-sans flex justify-center pt-30 ">
      <form action={login} className="flex flex-col md:gap-0 gap-5">
          <h1 className='font-extrabold 
      tracking-tighter text-4xl my-3'>Log in</h1>
          <label className='font-extrabold mb-5' htmlFor='login'>as:<select className=' text-stone-600/50 text-sm appearance-none border-gray-700/80
                 border-b-2 md:w-fit w-full
                 px-4 py-2 md:ml-3
                 focus:outline-none 
                 focus:ring-0 
                 ' id='login' name='role' value={role} onChange={(e) => setRole(e.target.value)}>
            <option>--select role--</option>
            <option value="parent">Parent</option>
            <option value="caregiver">Admin/Caregiver</option>
          </select>
          </label>
          <div className='flex flex-col md:flex-row md:gap-5 gap-10'>
        <input 
          className="border-b-2 text-center focus:outline-none focus:ring-0 focus:border-t-transparent" 
          name='email'
          placeholder="e-mail" 
          value={email} 
          autoComplete="off"

          onChange={(e) => setEmail(e.target.value)} 
        />

        <input 
          className="border-b-2 text-center focus:outline-none focus:ring-0 focus:border-t-transparent" 
          name='password' 
          placeholder="password" 
          autoComplete="off"

          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
     {error && <p className='text-red-600/80 uppercase font-bold text-sm'>invalid login data</p>} 

        <SubmitButton>{role === 'parent' ? 'Show Report' : 'Login' }</SubmitButton></div>
      </form>
    </div>
  )
}
