import { Playpen_Sans } from 'next/font/google'
import './globals.css'
import Header from './_ui/Header'
import ScrollHeader from './_ui/ScrollHeader'
import Footer from './_ui/Footer'

const playpen = Playpen_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: { template: '%s | Daycare App', default: 'Liascope Daycare', description: 'Daily child reports.' },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}
export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playpen.className} min-h-screen bg-gradient-to-br from-stone-100 via-white to-teal-50 text-stone-700 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <ScrollHeader header={<Header />}>
            <main className="flex-1">{children}</main>
          </ScrollHeader>

          <Footer />
        </div>
      </body>
    </html>
  )
}
