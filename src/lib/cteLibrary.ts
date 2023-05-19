export interface CTESkill {
  id: string
  strand: string
  standards: string[]
  performance_skills: string[]
}

export const cteLibrary: CTESkill[] = [
  {
    id: "1",
    strand:
      "Digital Citizenship: Students will understand the basic principles of copyright, AUP, and ethical behavior.",
    standards: [
      "Demonstrate knowledge of standard copyright rules.",
      "Identify the use and purpose of acceptable use policy (AUP).",
      "Understand ethical behavior as it relates to an AUP, Intellectual Property, Netiquette, Respecting Privacy, Anti- Spamming Laws, etc.",
    ],
    performance_skills: [
      "Understand copyright as it applies to you.",
      "Understand a basic AUP agreement.",
    ],
  },
  {
    id: "2",
    strand:
      "Fundamentals of HTML5: Students will create a multi-page website using good coding practice (Such as those found in W3Schools.)",
    standards: [
      "Demonstrate knowledge required to develop an HTML document.",
      "Explain appropriate file structure and naming conventions.",
      "Use the DOCTYPE Declaration.",
      "Code a website with appropriate HTML structure and according to W3C standards that can be validated.",
      "Demonstrate the use of input elements and attributes.",
    ],
    performance_skills: [
      "HTML5 semantic tags (header, footer, section, article, nav, aside)",
      "Meta tags",
      "Use special characters",
      "Hyperlink(s) and Email link(s)",
      "Table(s) with tabular data (not used for layout)",
      "Image link",
      "Lists",
      "Form elements",
    ],
  },
  {
    id: "3",
    strand:
      "Cascading Style Sheets (CSS): Students will format websites using CSS.",
    standards: [
      "Apply CSS to your website.",
      "Apply essential syntax & CSS box model.",
      "Students will format websites using CSS",
      "Format page layout using CSS.",
    ],
    performance_skills: [
      "Background image(s) or Background color",
      "Import graphics (jpeg/gif/png/svg)",
      "Font changes (color, size, style)",
      "Original CSS3 animation (optional)",
    ],
  },
  {
    id: "4",
    strand: "Site Planning: Students will plan, design, implement, and maintain website(s). ",
    standards: [
      ''
    ],
    performance_skills: [],
  },
]
