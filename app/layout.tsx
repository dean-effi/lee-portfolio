import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "./components/NavBar"
import BackToTop from "./components/BackToTop"
const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Lee's portfolio",
  description:
    "I'm Lee Effi, a 21-year-old Visual Communication student in my 4th year at Bezalel Academy of Arts and Design in Jerusalem. I approach design as an inquisitive process that examines the relationship between form, language, and meaning. My work spans print and digital, often navigating between past and present, creating visual connections across time. I work across graphic and typographic design, UI/UX interfaces, and illustration.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${inter.className}  antialiased bg-neutral-50 text-neutral-950 font-light `}
      >
        <NavBar />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
