"use client"

import projectsData from "@/projectsData"
import { usePathname } from "next/navigation"

export default function Home() {
  let path = decodeURI(usePathname()).split("/")[1]

  // const project = projectsData.find()
  return <div className="bg-neutral-950 text-neutral-50"> {path}</div>
}
