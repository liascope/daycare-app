export const dynamic = 'force-dynamic'
export default function Footer() {
  return (
    <footer className="font-sans text-shadow-none py-1 lg:py-9 w-full flex flex-row items-center justify-center z-2 text-stone-600/40 text-xs md:text-sm">
      {' '}
      daycare-app | © {new Date().getFullYear()} Liascope{' '}
    </footer>
  )
}
