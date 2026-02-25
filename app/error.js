"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center shadow-sm shadow-orange-600/60 flex-col gap-6 mt-7 bg-orange-200/20 p-4 rounded">
      <h1 className="text-xl font-extrabold tracking-widest text-stone-700/80">Something went wrong!</h1>
      <p className="text-lg font-extrabold tracking-widest text-red-800/60 underline">{error.message}</p>

      <button
        className="inline-block bg-accent-500 rounded-xl font-extrabold text-green-600/50 border-2 border-green-600/50 px-6 py-3 text-lg hover:bg-green-600/20 duration-300 transition-colors cursor-pointer hover:border-green-600 hover:text-green-600"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
