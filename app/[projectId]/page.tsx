"use client"

import projectsData from "@/projectsData"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Home() {
  let path = decodeURI(usePathname()).split("/")[1]

  const project = projectsData.find(p => p.name === path)
  console.log(project)
  if (!project) return <div>no project found</div>
  return (
    <div className="bg-neutral-950 text-neutral-50">
      {" "}
      {path}
      {project.images.map((img, i) => {
        console.log(i)
        return (
          <Image
            key={img}
            alt={project?.name!}
            src={img}
            width={1000}
            height={1000}
          />
        )
      })}
    </div>
  )
}
