import Image from "next/image"
import Logout from "../_features/Logout"

export default async function Header (){
  
    return (<header className="px-4 lg:px-10 bg-linear-to-b from-teal-700 to-gray-300 rounded-b-lg shadow-xl flex justify-between items-center h-22 lg:h-30">
      <div className="w-45 md:w-70 h-full relative p-1">
  <Image
    src="/daycare.png"
    alt="logo"
    className="absolute object-contain"
    fill
    sizes={250}
    priority
  /></div>
  <Logout/>
</header>)
}