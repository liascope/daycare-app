 import { Playpen_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_ui/Header";
import ScrollHeader from "./_ui/ScrollHeader";
import Footer from "./_ui/Footer";

const playpen = Playpen_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: { template:"%s | Daycare App",
    default: 'Liascope Daycare',
  description: "Daily child reports.", },
  icons: {
      icon: "/favicon.png",    
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
};
export default async function RootLayout({ children }) {
 
  return (
    <html lang="en">
 <body className={`${playpen.className} text-gray-700/80 font-semibold bg-linear-to-b from-stone-200 via-stone-50 to-stone-50 tracking-wide border-y-8 border-x-2  border-teal-700 [text-shadow:2px_2px_10px_rgba(0,0,0,0.5)]`}>
  <div className="flex flex-col min-h-screen pb-20">
   <ScrollHeader header={<Header/>}>
            {children}
          </ScrollHeader>
  </div>
  <Footer/>
</body>
    </html>
  );
}
