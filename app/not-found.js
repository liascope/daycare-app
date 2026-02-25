'use client'

import { useRouter } from "next/navigation";
export default function NotFound() {
    const router = useRouter()
  return (
    <main className="flex justify-center items-center shadow-sm shadow-orange-600/60 flex-col gap-6 mt-7 bg-orange-200/20 p-4 rounded text-center space-y-6  text-lg font-extrabold tracking-widest text-red-800/60">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
        <button
        onClick={() => router.back()}
       className="inline-block bg-accent-500 rounded-xl font-extrabold text-green-600/50 border-2 border-green-600/50 px-6 py-3 text-lg hover:bg-green-600/20 duration-300 transition-colors cursor-pointer hover:border-green-600 hover:text-green-600"
      >
        Go back home
      </button>
    </main>
  );
}

