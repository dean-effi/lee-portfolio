import projectsData from "@/projectsData"

export default function Home() {
  return <div className=""> {projectsData.map(p => p.name)}</div>
}
