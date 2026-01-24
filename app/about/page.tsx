import Image from "next/image"
import AboutFooter from "../components/AboutFooter"

export default function about() {
  return (
    <div className=" leading-tight tracking-[-0.08em] h-[calc(100vh-230px)] grid">
      <main className="px-9 md:px-13 xl:pt-14 ">
        <h1 className="sr-only">About Lee Mor Yosef</h1>
        <div className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-9 ">
          <p className="indent-[42px] lg:indent-[72px]">
            I'm Lee, a 21-year-old Visual Communication student in my
            4th year at Bezalel Academy of Arts and Design.
          </p>
          <p className="indent-[42px] lg:indent-[72px]">
            I approach design as an exploratory process that examines
            the relationships between form, language and meaning.
          </p>
          <p className="indent-[42px] lg:indent-[72px]">
            My work ranges from print to digital and focuses on
            creating a cohesive visual identity and engaging in
            graphic and typographic design, UI/UX design, and
            illustration.
          </p>
        </div>
        <Image
          alt="lee's portrait"
          width={420}
          height={400}
          src="/lee.webp"
          priority
        />
      </main>
      <AboutFooter />
    </div>
  )
}
