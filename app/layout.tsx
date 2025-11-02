import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "./components/NavBar"
const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Lee's portfolio",
  description: "its her portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className}  antialiased bg-neutral-50 text-neutral-950 font-light `}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
