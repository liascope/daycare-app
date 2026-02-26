
import { getUser, getReport } from "@/app/_services/actions"
import { notFound } from "next/navigation"


import Dashboard from "@/app/_ui/Dashboard"
import Reports from "@/app/_features/Reports"
import Spinner from "@/app/_ui/Spinner"


export default async function Page () {

const user = await getUser()
    if (!user || user?.role !== 'parent') {
    notFound();}

  const reports = await getReport() 
  if (!reports) {return (<div className="text-center py-10"><Spinner/>No report yet. <Spinner/>New report will be shown soon.<Spinner/></div>)}

  return (
    <>
     <Dashboard data={reports}  />
     <Reports data={reports}/>    
    </>
  )
}
