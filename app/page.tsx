import projectsData from "@/projectsData"
import Link from "next/link"

export default function Home() {
  return (
    <div className="">
      {/* {" heyyy"} */}
      <main className="px-8">
        {projectsData.map(p => {
          return (
            <div key={p.id}>
              <Link href={p.name}>{p.name}</Link>
              {/* <Image alt="" src={p.preview} height={200} width={200} /> */}
              {/* <p className="indent-6">{p.descrpition}</p> */}
            </div>
          )
        })}
      </main>
    </div>
  )
}
