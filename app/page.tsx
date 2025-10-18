import projectsData from "@/projectsData"
import Image from "next/image"

export default function Home() {
  return (
    <div className="">
      {" "}
      {projectsData.map(p => (
        <div key={p.id}>
          {p.name}{" "}
          <Image alt="" src={p.preview} height={200} width={200} />
          {/* <p className="indent-6">{p.descrpition}</p> */}
        </div>
      ))}
    </div>
  )
}
