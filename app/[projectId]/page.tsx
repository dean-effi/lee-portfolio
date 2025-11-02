"use client"

import projectsData from "@/projectsData"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Home() {
  let path = decodeURI(usePathname()).split("/")[1]

  const project = projectsData.find(p => p.name === path)
  if (!project) return <div>no project found</div>
  return (
    <div className="bg-neutral-950 text-neutral-50 px-9 md:px-13 pt-6 xl:gap-18  md:pt-10 xl:grid xl:grid-cols-2 relative">
      <div className=" indent-[42px] md:indent-18 xl:h-max xl:sticky xl:top-10 ">
        <div className="mb-12">
          <h1 className="text-2xl md:text-[28px] ">{project.name}</h1>
          <p className="italic indent-0">
            {project.type.map(t => `(${t})`)}
          </p>
        </div>
        <p className=" md:text-xl">{project.descrpition}</p>
        <p className="italic  md:text-xl">{project.created}</p>
      </div>

      <div className="space-y-6 md:space-y-8 mt-7 md:mt-8 grid justify-center xl:mt-0">
        {project.images.map((img, i) => {
          return (
            <Image
              key={img}
              alt={project?.name!}
              src={img}
              width={900}
              height={700}
              priority
            />
          )
        })}
      </div>
    </div>
  )
}
