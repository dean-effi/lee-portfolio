import Image from "next/image"
import Footer from "./Footer"

export default function about() {
  return (
    <div className=" leading-tight tracking-[-8%]">
      <main className="px-9 md:px-13 xl:pt-14 ">
        <div className="text-[24px] md:text-[28px] mb-9 ">
          <p className="indent-[42px] lg:indent-[72px]">
            I'm Lee, a 21-year-old Visual Communication student in my
            4th year at Bezalel Academy of Arts and Design in
            Jerusalem.
          </p>
          <p className="indent-[42px] lg:indent-[72px]">
            I approach design as an inquisitive process that examines
            the relationship between form, language, and meaning. My
            work spans print and digital, often navigating between
            past and present, creating visual connections across time.
          </p>
          <p className="indent-[42px] lg:indent-[72px]">
            I work across graphic and typographic design, UI/UX
            interfaces, and illustration.
          </p>
        </div>
        <Image
          alt="lee's portrait"
          width={420}
          height={400}
          src="/archive/06.webp"
        />
      </main>
      <Footer />
    </div>
  )
}
