"use client"

import logout from "../mutations/logout"
import { useRouter } from "next/navigation"
import { useMutation } from "@blitzjs/rpc"

export function LogoutButton() {
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)
  return (
    <button
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
      role="menuitem"
      onClick={async () => {
        await logoutMutation()
        router.refresh()
      }}
    >
      Sign out
    </button>
  )
}
