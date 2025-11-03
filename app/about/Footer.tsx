import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <footer className="self-end">
      <ul className="flex  justify-center gap-[66px] lg:pt-20 md:justify-end md:pr-10 pt-10 pb-5 ">
        <li>
          <Link
            href={"https://www.instagram.com/leeeeee.indd/"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            /instagram
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            href={
              "https://www.linkedin.com/in/lee-mor-yosef-8254aa395/"
            }
          >
            //linkedin
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email me"
            href={
              "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=lilymy28@gmail.com"
            }
          >
            ///email
          </Link>
        </li>
      </ul>
    </footer>
  )
}
