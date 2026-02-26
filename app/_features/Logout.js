import { logout, getUser } from "../_services/actions"
import Account from "../_icons/Account";
import Mail from "../_icons/Mail";
export const revalidate = 0
export default async function Logout (){

    const data = await getUser();
   if (!data) return;
   
  return ( <div className="flex flex-row justify-between items-center gap-5 w-1/3 sm:w-1/2">
                 <div className="lg:w-20 w-16 md:w-18 h-fit">
                <Mail/>
                </div>
    
           <form className="lg:w-20 w-16 md:w-18 h-fit flex flex-col " action={logout}>
            
             <button type="submit" className="cursor-pointer hover:scale-101"> <Account/>
              </button>
            </form>
            
        </div>)
}