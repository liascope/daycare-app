import DaycareAdmin from "@/app/_features/DaycareAdmin";
import { getAllUser, getReportToday } from "@/app/_services/actions";
import { getUser } from "@/app/_services/actions";
import { DaycareFormProvider } from "@/app/_services/DaycareFormContext";
import { notFound } from "next/navigation";


export default async function Admin () {
    const user = await getUser()
    if (!user || user?.role !== 'caregiver') {
     notFound()}

    const today = await getReportToday()
    const allChildren = await getAllUser()
    //  console.log(today)

    return (<DaycareFormProvider><DaycareAdmin reportedToday={today} allChildren={allChildren}/></DaycareFormProvider>)
}