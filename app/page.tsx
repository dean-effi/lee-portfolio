import projectsData from "@/projectsData"
import Link from "next/link"
import downRight from "@/app/assets/down-right.svg"
import Image from "next/image"
export default function Home() {
  const age =
    new Date(
      Date.now() - new Date(2004, 8, 11).getTime()
    ).getFullYear() - 1970
  return (
    <div className="">
      {/* {" heyyy"} */}
      <main className="px-8">
        <header className="h-[calc(100vh-200px)] grid items-end">
          <h1 className="ml-9 sm:mx-13 md:text-[84px] mb-4 text-[69px] leading-[0.84] indent-[42px] md:indent-[72px] 2xl:text-[160px] tracking-[-9%] md:w-[text-100px] lg:text-[132px] 3xl:text-[192px] font-normal">
            Lee <span className="italic">{age}</span>, a visual
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
          className="bg-neutral-950 text-neutral-50"
        >
          {projectsData.map(p => {
            return (
              <div key={p.name}>
                <Link href={p.name}>{p.name}</Link>
                {/* <Image alt="" src={p.preview} height={200} width={200} /> */}
                {/* <p className="indent-6">{p.descrpition}</p> */}
              </div>
            )
          })}
        </section>
      </main>
    </div>
  )
}
