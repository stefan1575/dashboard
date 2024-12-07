import { useAuthenticatedBlitzContext } from "../blitz-server"

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  await useAuthenticatedBlitzContext({
    redirectAuthenticatedTo: "/dashboard",
  })
  return <>{children}</>
}
