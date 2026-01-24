"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
  let path = decodeURI(usePathname()).split("/")[1]
  const theme = path === "" || path === "about" ? "light" : "dark"
  return (
    <nav
      className={`flex justify-between md:px-[52px] lg:px-[84px] px-9 pt-16 pb-9 tracking-[-0.08em] ${
        theme === "dark" ? "text-neutral-50 bg-neutral-950" : ""
      } `}
    >
      <Link aria-label="home" href={"/"}>
        {"<3"}
      </Link>
      <ul className="grid gap-13">
        <li>
          <Link aria-label="works" href={"/#projects"}>
            /works
          </Link>
        </li>
        <li>
          <Link aria-label="about" prefetch={true} href={"/about"}>
            //about
          </Link>
        </li>
      </ul>
    </nav>
  )
}
