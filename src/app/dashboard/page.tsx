// import Dashboard from '@/components/Dashboard'
// import { db } from '@/db'
// import { getUserSubscriptionPlan } from '@/lib/stripe'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const { getUserOrganizations } = getKindeServerSession()
  const user = getUserOrganizations();
  // console.log(user)
  // if(!user || !user.id) redirect('/auth-callback?origin=dashboard')
  
  return(<div>hello {user}</div>)
}

export default Page