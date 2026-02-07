import projectsData from "@/projectsData"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projectsData.map(project => ({
    projectId: project.name,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>
}) {
  const path = decodeURIComponent((await params).projectId)
  const project = projectsData.find(p => p.name === path)
  if (!project) return notFound()
  return (
    <main className="bg-neutral-950 text-neutral-50 px-9 md:px-13 pt-6 xl:gap-18  md:pt-10 xl:grid xl:grid-cols-2 relative">
      <div className=" leading-[0.9] tracking-[-0.08em]  indent-[42px] md:indent-18 xl:h-max xl:sticky xl:top-10 less-space ">
        <div className="mb-12">
          <h1 className="text-2xl md:text-[28px] ">{project.name}</h1>
          <h2 className="italic indent-0">
            {project.type.map(t => `(${t})`)}
          </h2>
        </div>
        <p className=" md:text-xl ">{project.descrpition}</p>
        <p className="italic  md:text-xl">{project.created}</p>
      </div>

      <div className="space-y-6 md:space-y-8 mt-7 md:mt-8 grid justify-center xl:mt-0 pb-10">
        {project.images.map((img, i) => {
          if (img.split(".")[1] === "mp4") {
            return (
              <video
                className="w-full"
                src={img}
                key={img}
                loop
                muted
                autoPlay
                aria-label={
                  project.name + " overview - " + Number(1 + i)
                }
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            )
          }
          return (
            <Image
              key={img}
              alt={project.name + " overview - " + Number(1 + i)}
              src={img}
              width={900}
              height={700}
              className="w-[900px] h-auto"
              priority
            />
          )
        })}
      </div>
    </main>
  )
}
