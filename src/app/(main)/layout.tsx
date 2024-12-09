import { Sidebar } from "./components/Sidebar"
import { Navbar } from "./components/Navbar"
import { FlowbiteInit } from "./components/FlowbiteInit"
import { useAuthenticatedBlitzContext } from "../blitz-server"

type MainLayoutProps = {
  children: React.ReactNode
}

export default async function MainLayout({ children }: MainLayoutProps) {
  await useAuthenticatedBlitzContext({
    redirectTo: "/login",
  })

  return (
    <>
      <FlowbiteInit />
      <Navbar />
      <Sidebar />
      {children}
    </>
  )
}
