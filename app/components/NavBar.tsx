"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
  let path = decodeURI(usePathname()).split("/")[1]
  console.log(path)
  const theme = path === "" || path === "about" ? "light" : "dark"
  console.log(theme)
  return (
    <nav
      className={`flex justify-between md:px-[52px] lg:px-[84px] px-9 pt-16 pb-9 tracking-[-8%] ${
        theme === "dark" ? "text-neutral-50 bg-neutral-950" : ""
      }`}
    >
      <div>{"<3"}</div>
      <div className="grid gap-13">
        <ul>
          <Link href={"/"}>/works</Link>
        </ul>
        <ul>
          <Link href={"/about"}>//about</Link>
        </ul>
      </div>
    </nav>
  )
}
