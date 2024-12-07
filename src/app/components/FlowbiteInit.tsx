"use client"

import { useEffect } from "react"

export function FlowbiteInit() {
  useEffect(() => {
    import("flowbite").then(({ initFlowbite }) => initFlowbite())
  }, [])

  return null
}
