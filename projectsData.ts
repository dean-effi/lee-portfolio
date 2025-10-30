export type ProjectType = {
  name: string
  preview: string
  images: string[]
  type: string[]
  descrpition: string
  created: string
}

const projectsData: ProjectType[] = [
  {
    name: "Alef Bet: Archive of Hebrew Manuscripts",
    preview: "/temp.png",
    images: ["/alefbet/01.webp"],
    type: ["branding", "graphic design"],
    descrpition:
      "A visual archive of Hebrew manuscripts, showcasing ancient writings from diverse Jewish regions and communities around the world. The project explores the Hebrew script, scriptural traditions, and textual memory, offering a rich foundation for visual interpretation. It brings together manuscripts from diverse geographic regions and cultural backgrounds, reflecting the wide dispersion of Jewish life. The design creates a connection between the ancient and the contemporary: the manuscripts are presented in their original historical appearance, with the Hebrew letter as a central focus. Contemporary design elements—modern typography, bold color palettes, and free compositions—introduce a fresh interpretation of the archival material and open a rich visual space between past and present.",
    created:
      "Created during a third-year Advanced Graphic Design course, instructed by Renana Irshai.",
  },
  {
    name: "The Communist Manifesto",
    preview: "/temp.png",
    images: [""],
    type: ["typography", "broadsheet design", "editorial design"],
    descrpition:
      "I created a complex, large-format broadsheet centered on selected excerpts from The Communist Manifesto by Karl Marx and Friedrich Engels. Each section highlights a key statement from the text, framed as a bold visual proclamation. To deepen the conceptual layers, I incorporated imagery drawn from George Orwell’s Animal Farm- a satirical narrative that critiques the very ideals the manifesto promotes. The interplay between revolutionary vision and dystopian reality invites reflection on the gap between theory and practice.",
    created:
      "Created during a third-year Advanced Typography course, instructed by Dan Ozeri.",
  },
  {
    name: "Gag Eden",
    preview: "/temp.png",
    images: [""],
    type: ["branding", "graphic design"],
    descrpition:
      "Gag Eden is an annual urban culture festival held on rooftops across Jerusalem. It features cultural events, performances, and original content that highlight the city's creative scene. The festival brings together young people from different backgrounds in a casual, inclusive setting. The visual design combines elements of historical Jerusalem with modern graphic language. The concept bridges past and present, blending the citys ancient character with a contemporary, urban feel.",
    created:
      "Co-designed with Adi Pfeuffer, Created during a third-year Graphic Language Design course, instructed by Rotem Biksenspaner.",
  },

  {
    name: "Zeit",
    preview: "/temp.png",
    images: [""],
    type: ["ux/ui design"],
    descrpition:
      "Zeit is a digital platform dedicated to vintage fashion, designed as a space for discovery, documentation, and exchange. It allows users to explore clothes and designers, trace cultural influences, and contribute knowledge, transforming fashion history into a collaborative archive. Combining research, design, and community, the project balances editorial clarity with intuitive interaction, integrating research, design, and community to reframe vintage couture for a contemporary audience.",
    created:
      "Created during a third-year UX/UI course, instructed by Neomi Gelbach.",
  },
  {
    name: "Hassidut Chabad",
    preview: "/temp.png",
    images: [""],
    type: ["typography", "booklet design", "editorial design"],
    descrpition:
      "I designed a booklet based on a printed Wikipedia entry, focusing on Hassidut Chabad. This topic was chosen for its personal significance, providing an opportunity to explore and present Chabad from an insider perspective. The project draws on archival materials, including rare manuscripts and photographs of Chabad rebbes, highlighting both historical and spiritual dimensions. The booklet integrates typographic hierarchy, layout experimentation, and visual storytelling to create an engaging narrative that balances factual information with a sensitive representation of the community’s traditions and values.",
    created:
      "Created during a second-year Joint (graphic-typographic design) course, instructed by Edna Librati.",
  },
]

export default projectsData
