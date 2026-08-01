'use client'
import { deleteUser } from '../_services/actions'
import { useState } from 'react'

import SubmitButton from '../_ui/SubmitButton'
export default function DeleteUser({ active, allChildren }) {
  const [confirm, setConfirm] = useState('')
  const [child, setChild] = useState({ id: '', name: '' })
  const [deletedChild, setDeletedChild] = useState(false)

  async function handleDelete() {
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      setDeletedChild(true)
      setConfirm(`Child ${child.name} successfully deleted`)
      setTimeout(() => {
        setConfirm('')
        setDeletedChild(false)
        setChild({ id: '', name: '' })
      }, 3500)
      return
    }
    try {
      await deleteUser(child.id)
      setDeletedChild(true)
      setConfirm(`Child ${child.name} successfully deleted`)
      setTimeout(() => {
        setConfirm('')
        setDeletedChild(false)
        setChild({ id: '', name: '' })
      }, 3500)
    } catch (err) {
      alert(err)
    }
  }
  if (!active) return

  return (
    <form action={handleDelete}>
      {confirm ? (
        <div className="flex flex-col items-center justify-center">
          <h2 className="py-3 text-lg">{confirm}</h2>
          {!deletedChild && (
            <div className="flex flex-row gap-5">
              <button
                type="button"
                onClick={() => setConfirm('')}
                className="w-full rounded-xl px-5 py-3 font-extrabold  text-white shadow-sm transition-all  duration-200 bg-teal-600 hover:bg-teal-700 hover:shadow-md  active:scale-95"
              >
                {' '}
                No{' '}
              </button>
              <SubmitButton deleteBtn={true}>Yes</SubmitButton>
            </div>
          )}
        </div>
      ) : (
        <ul className="flex flex-col gap-2 transition-all duration-100 px-10 min-h-72">
          {allChildren?.map((child) => {
            return (
              <li
                className="odd:bg-orange-200/70 even:bg-orange-100/80 px-5 rounded-xl hover:bg-orange-200 flex flex-row items-center justify-between tracking-widest font-extrabold py-1"
                key={child.id}
              >
                {child.name}
                <span
                  className="text-red-500/80 flex items-center justify-center w-7 h-7 hover:scale-95 rounded-full cursor-pointer m-1"
                  onClick={() => {
                    setConfirm(`Delete ${child.name}?`)
                    setChild({ id: child.id, name: child.name })
                  }}
                >
                  ❌
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </form>
  )
}
