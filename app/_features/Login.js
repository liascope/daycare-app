'use client'

import { useState } from 'react'
import { login } from '../_services/actions'
import SubmitButton from '../_ui/SubmitButton'
import { useSearchParams, usePathname } from 'next/navigation'

export default function Login() {
  const pathname = usePathname()

  const isDaycare = pathname.includes('daycare')
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (isDaycare) return

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">
      <form action={login} className="w-full max-w-md rounded-3xl backdrop-blur-xl p-8 shadow-xl border border-stone-200">
        <h1 className="text-4xl font-extrabold text-stone-800">Welcome Back</h1>

        <p className="mt-2 mb-8 text-sm text-stone-500">Sign in to your daycare portal.</p>

        <div className="space-y-6">
          <div>
            <label htmlFor="login" className="mb-2 block text-sm font-semibold text-stone-700">
              Role
            </label>

            <select
              id="login"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-teal-500"
            >
              <option>-- Select role --</option>
              <option value="parent">Parent</option>
              <option value="caregiver">Admin / Caregiver</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-700">Email</label>

            <input
              name="email"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-700">Password</label>

            <input
              name="password"
              type="password"
              value={password}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-teal-500"
            />
          </div>

          {error && <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">Invalid email or password.</div>}

          <SubmitButton>{role === 'parent' ? 'Show Report' : 'Login'}</SubmitButton>
        </div>
      </form>
    </div>
  )
}
