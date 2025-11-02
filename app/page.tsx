import projectsData from "@/projectsData"
import downRight from "@/app/assets/down-right.svg"
import Image from "next/image"
import ProjectPreview from "./components/ProjectPreview"
export default function Home() {
  const age =
    new Date(
      Date.now() - new Date(2004, 8, 11).getTime()
    ).getFullYear() - 1970
  return (
    <main className=" tracking-[-9%] ">
      <header className="h-[calc(100vh-200px)] grid items-end px-8 ">
        <h1 className="ml-9 sm:mx-13 md:text-[84px] mb-4 text-[69px] leading-[0.84] indent-[42px] md:indent-[72px] 2xl:text-[160px] md:w-[text-100px] lg:text-[132px] 3xl:text-[192px] font-normal">
          Lee <span className="italic">({age})</span>, a visual
          designer and these are my works{" "}
          <div className="inline -ml-4">
            <Image
              alt=""
              width={36}
              height={36}
              src={downRight}
              className="aspect-square  inline w-20  lg:w-30 xl:w-40 "
            />
            <Image
              alt=""
              width={36}
              height={36}
              src={downRight}
              className="aspect-square  inline w-20 lg:w-30 xl:w-40  "
            />
          </div>
        </h1>
      </header>
      <section
        aria-label="projects"
        id="projects"
        className="bg-neutral-950 text-neutral-50 px-8 md:px-15 space-y-6 xl:space-y-[75px] md:space-y-8 pt-11  xl:pt-[130px] min-h-screen xl:pr-0"
      >
        {projectsData.map(p => {
          return <ProjectPreview key={p.name} project={p} />
        })}
      </section>
    </main>
  )
}
