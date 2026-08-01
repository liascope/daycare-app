'use client'
import { useState } from 'react'
import { createUser } from '../_services/actions'
import SubmitButton from '../_ui/SubmitButton'
import { Eye, EyeOff } from 'lucide-react'
const initialForm = {
  username: '',
  password: '',
  repeatPassword: '',
  role: '',
  email: '',
}

export default function SignUpForm({ active }) {
  const [form, setForm] = useState(initialForm)
  const [confirm, setConfirm] = useState(false)
  const [error, setError] = useState('')
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

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

      if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
        setConfirm((c) => !c)
        setTimeout(() => {
          setConfirm(false)
          setForm(initialForm)
        }, 4000)
        return
      }

      await createUser(formData)
      setConfirm((c) => !c)
      setTimeout(() => {
        setConfirm(false)
        setForm(initialForm)
      }, 4000)
    } catch (err) {
      setError(err.message)
    }
  }
  if (!active) return
  return (
    <form action={handleAction}>
      {confirm ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-xl text-white">✓</div>

          <h3 className="text-lg font-bold text-stone-800">User created successfully</h3>

          <div className="space-y-1 text-sm text-stone-600">
            <p>
              <span className="font-semibold">Name:</span> <span className="font-bold text-teal-700">{form.username}</span>
            </p>

            <p>
              <span className="font-semibold">Role:</span> <span className="font-bold text-teal-700">{form.role}</span>
            </p>

            <p>
              <span className="font-semibold">Email:</span> <span className="font-bold text-teal-700">{form.email}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 px-10 min-h-72">
          {' '}
          <label htmlFor="role" className="flex flex-row border-b justify-left gap-9 items-center">
            {' '}
            Role:
            <select
              id="role"
              required
              className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full"
              name="role"
              value={form.role}
              onChange={handleChange('role')}
            >
              <option>-- select --</option>
              <option value="parent">Parent</option>
              <option value="caregiver">Caregiver</option>
            </select>
          </label>
          <label htmlFor="name" className="flex flex-row gap-6 border-b justify-left items-center">
            {' '}
            Name:{' '}
            <input
              autoComplete="off"
              id="name"
              required
              className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full"
              value={form.username}
              onChange={handleChange('username')}
              name="name"
            />{' '}
          </label>
          <label htmlFor="email" className="flex flex-row gap-6 border-b  justify-left items-center">
            {' '}
            E-Mail:{' '}
            <input
              autoComplete="off"
              id="email"
              required
              className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full"
              value={form.email}
              onChange={handleChange('email')}
              name="email"
            />{' '}
          </label>
          <label htmlFor="password" className="flex flex-row border-b  justify-left gap-7 items-center">
            {' '}
            Password:{' '}
            <input
              autoComplete="off"
              id="password"
              required
              className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full"
              type="password"
              value={form.password}
              onChange={handleChange('password')}
              name="password"
            />{' '}
          </label>
          {/* <label htmlFor="rPassword" className="flex flex-row border-b  justify-left gap-7 items-center">
            {' '}
            Repeat Password:{' '}
            <input
              autoComplete="off"
              id="rPassword"
              required
              className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full"
              type="password"
              value={form.repeatPassword}
              onChange={handleChange('repeatPassword')}
            />{' '}
          </label> */}
          <label htmlFor="rPassword" className="relative flex flex-row border-b justify-left gap-7 items-center">
            Repeat Password:
            <input
              autoComplete="off"
              id="rPassword"
              required
              className="focus:outline-none focus:ring-0 focus:border-t-transparent flex-1 w-full h-full pr-10"
              type={showRepeatPassword ? 'text' : 'password'}
              value={form.repeatPassword}
              onChange={handleChange('repeatPassword')}
            />
            <button
              type="button"
              onClick={() => setShowRepeatPassword((prev) => !prev)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-500 hover:text-teal-600 transition-colors"
              aria-label={showRepeatPassword ? 'Hide password' : 'Show password'}
            >
              {showRepeatPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </label>
          {error && <p className="text-red-600/80 uppercase font-bold text-sm text-center">{error}</p>}
          <div className="w-full text-center">
            <SubmitButton padding="py-0">Add User</SubmitButton>
          </div>
        </div>
      )}
    </form>
  )
}
