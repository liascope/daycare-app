'use client'
import SignUpForm from './SignUpForm'
import DeleteUser from './DeleteUser'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function UserManagement({ allChildren }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState({ register: true, delete: false })

  return (
    <div className="relative w-full md:w-[50%] lg:w-[35%] font-bold text-sm text-center z-20">
      <h1
        onClick={() => setOpen((o) => !o)}
        className={`cursor-pointer text-lg md:text-xl transition-all duration-300 hover:via-teal-400 py-4
          backdrop-blur-2xl border flex flex-row items-center justify-center border-stone-200 shadow-sm rounded-2xl px-5 ${open ? 'uppercase tracking-wide' : 'normal-case tracking-normal'}`}
      >
        <span className="text-center w-full">User Management</span>{' '}
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}></ChevronDown>
        {/* <span className="w-fit">{open ? '⮝' : '⮟'}</span> */}
      </h1>
      {open && (
        <div className="absolute backdrop-blur-3xl mt-2 md:mt-3 rounded-2xl border border-stone-200 shadow-sm flex flex-col w-full gap-5 p-5 pb-10  border-b-2">
          <div className="text-shadow-2xs py-3 z-20 flex flex-row items-center justify-evenly  cursor-pointer">
            <h2
              className={`${active.register ? 'overline text-teal-700/80' : 'text-yellow-600/80 hover:text-teal-800 '}`}
              onClick={() => setActive({ register: true, delete: false })}
            >
              Register new user
            </h2>{' '}
            <h2
              className={`${active.delete ? 'overline text-teal-700/80' : 'text-yellow-600/80 hover:text-teal-800'}`}
              onClick={() => setActive({ register: false, delete: true })}
            >
              {' '}
              Delete User{' '}
            </h2>
          </div>
          <SignUpForm active={active.register} />
          <DeleteUser active={active.delete} allChildren={allChildren} />
        </div>
      )}
    </div>
  )
}
