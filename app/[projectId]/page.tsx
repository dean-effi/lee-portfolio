"use client"

import projectsData from "@/projectsData"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Home() {
  let path = decodeURI(usePathname()).split("/")[1]

  const project = projectsData.find(p => p.name === path)
  console.log(project)
  return (
    <div className="bg-neutral-950 text-neutral-50">
      {" "}
      {path}
      <Image
        alt={project?.name!}
        src={project?.images[0]!}
        width={1000}
        height={1000}
      />
    </div>
  )
}
