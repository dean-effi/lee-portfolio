"use client"

import { ProjectType } from "@/projectsData"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProjectPreview({
  project,
}: {
  project: ProjectType
}) {
  const [isHovered, setIsHovered] = useState({
    state: false,
    position: 0,
  })

  return (
    <div
      key={project.name}
      className="grid gap-2 md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_250px] xl:ml-21 relative"
    >
      <Link className=" " href={project.name}>
        <p
          className="leading-2 xl:w-max pointer-events-none xl:pointer-events-auto"
          onMouseMove={e => {
            setIsHovered({ state: true, position: e.clientX })
          }}
          onMouseLeave={() => {
            setIsHovered({ state: false, position: 0 })
          }}
        >
          <span className="text-xl md:text-[26px] xl:text-[32px]">
            {project.name}
          </span>
          <span className="ml-1 xl:text-2xl  text-sm md:text-base italic">
            {project.type.map(t => `(${t})`)}
          </span>
        </p>
      </Link>
      <Image
        priority
        style={{
          left: isHovered.state ? isHovered.position - 100 : 0,
        }}
        alt=""
        src={project.preview}
        height={200}
        width={200}
        className={`lg:w-full pointer-events-none  ${
          isHovered.state
            ? `xl:absolute xl:w-[300px]  z-30`
            : "xl:hidden "
        }`}
      />
    </div>
  )
}
