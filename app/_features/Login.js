'use client'

import { useState } from 'react'
import { login } from '../_services/actions'
import SubmitButton from '../_ui/SubmitButton'
import { useSearchParams, usePathname } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

const demoAccounts = {
  lisa: {
    role: 'parent',
    email: 'lisa@daycare.com',
    password: 'lisa-0987',
  },
  leo: {
    role: 'parent',
    email: 'leo@daycare.com',
    password: 'leo-0987',
  },
  noah: {
    role: 'parent',
    email: 'noah@daycare.com',
    password: 'noah-0987',
  },
  admin: {
    role: 'caregiver',
    email: 'admin@daycare.com',
    password: 'admin-0987',
  },
}

export default function Login() {
  const pathname = usePathname()

  const isDaycare = pathname.includes('daycare')
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  if (isDaycare) return

  const handleDemoAccount = (account) => {
    if (!account) return

    const selectedAccount = demoAccounts[account]

    setRole(selectedAccount.role)
    setEmail(selectedAccount.email)
    setPassword(selectedAccount.password)
  }

  return (
    <div className="flex min-h-[75vh] items-center justify-center px-4 py-8 md:min-h-[80vh] md:px-6">
      <form
        action={login}
        className="w-full max-w-md rounded-2xl md:rounded-3xl md:border shadow-md border-stone-200 backdrop-blur-xl p-8 md:shadow-xl"
      >
        <h1 className="text-2xl md:text-3xl font-extrabold text-stone-800">Sign In</h1>

        <p className="mt-2 mb-6 md:mb-8 text-sm text-stone-500">Access your daycare portal.</p>

        <div className="space-y-5 md:space-y-6">
          {/* Role */}
          <div>
            <label htmlFor="login" className="mb-2 block text-sm font-semibold text-stone-700">
              Role
            </label>

            <select
              id="login"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm md:text-base outline-none transition focus:border-teal-500"
            >
              <option value="">-- Select role --</option>
              <option value="parent">Parent</option>
              <option value="caregiver">Admin / Caregiver</option>
            </select>
          </div>
          {/* Demo Account */}
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-4">
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="demo-account" className="text-sm font-semibold text-stone-700">
                Try a demo account
              </label>

              <span className="rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-700">Demo</span>
            </div>

            <select
              id="demo-account"
              defaultValue=""
              onChange={(e) => handleDemoAccount(e.target.value)}
              className="w-full rounded-xl border border-teal-200 bg-white px-4 py-3 text-sm md:text-base outline-none transition focus:border-teal-500"
            >
              <option value="">-- Select demo account --</option>
              <option value="lisa">Lisa – Parent</option>
              <option value="leo">Leo – Parent</option>
              <option value="noah">Noah – Parent</option>
              <option value="admin">Admin / Caregiver</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-stone-700">
              Email
            </label>

            <input
              id="email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm md:text-base outline-none transition focus:border-teal-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-stone-700">
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-stone-300 px-4 py-3 pr-12 text-sm md:text-base outline-none transition focus:border-teal-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-stone-500 transition-colors hover:text-teal-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">Invalid email or password.</div>}

          <SubmitButton>{role === 'parent' ? 'Show Report' : 'Login'}</SubmitButton>
        </div>
      </form>
    </div>
  )
}
