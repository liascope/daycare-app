'use client'
import { MessageSquareText } from 'lucide-react'
import { useState } from 'react'

export default function ReportSection({ title, color, children, issue = false }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`overflow-hidden rounded-3xl border-l-8 shadow-lg transition-all duration-300 [text-shadow:3px_3px_4px_rgba(255,255,255,0.8)] ${color}`}
    >
      <h1
        onClick={() => setOpen((open) => !open)}
        className="flex items-center justify-between cursor-pointer px-6 py-5 text-lg md:text-2xl font-extrabold text-stone-700 backdrop-blur-xl shadow-2xl rounded-2xl "
      >
        <div className="flex flex-row w-full items-center gap-7">
          {' '}
          <span
            className={`transition-all duration-200 ${open ? 'translate-x-14 md:translate-x-40 lg:translate-x-96 tracking-wide uppercase' : 'tracking-normal normal-case translate-x-2 md:translate-x-5'}`}
          >
            {title}
          </span>{' '}
          {issue && !open && <MessageSquareText className="w-5 h-5 text-orange-700/60" />}
        </div>

        <span className="text-xl transition-transform duration-300">{open ? '⮝' : '⮟'}</span>
      </h1>

      <div className={`grid transition-all duration-500  ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="flex flex-col gap-20 p-6 md:p-10 text-center text-lg font-bold tracking-widest text-stone-600">{children}</div>
        </div>
      </div>
    </div>
  )
}
