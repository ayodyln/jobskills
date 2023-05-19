export interface CTESkill {
  id: string
  strand: string
  standards: Standard[]
  performance_skills: string[]
}

interface Standard {
  standard: string
  data: string[]
}

export const cteLibrary: CTESkill[] = [
  {
    id: "1",
    strand:
      "Digital Citizenship: Students will understand the basic principles of copyright, AUP, and ethical behavior.",
    standards: [
      {
        standard: "Demonstrate knowledge of standard copyright rules.",
        data: [
          'Understand copyright for original creations.',
          'Understand the creative commons license.',
          'Understand when to obtain permission for non-original work.'
        ]
      },
      {
        standard: 'Identify the use and purpose of acceptable use policy (AUP).',
        data: [
          'Understand the AUP for your school.'
        ]
      },
      {
        standard: 'Understand ethical behavior as it relates to an AUP, Intellectual Property, Netiquette, Respecting Privacy, Anti- Spamming Laws, etc.',
        data: []
      }
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
    strand:
      "Site Planning: Students will plan, design, implement, and maintain website(s). ",
    standards: [
      "Analyze Project requirements.",
      "Users are the focus of all design.",
      "Code and design a minimum three-page website. (This is integrated into every Strand.)",
    ],
    performance_skills: [
      "Build a mock-up, sketch, or wireframe of a website",
      "Check for cross browser compatibility, readability, and accessibility",
    ],
  },
  {
    id: "5",
    strand:
      "The student will create and prepare images to integrate with website designs, using image editing software.",
    standards: [
      "Open, edit, and save an image for effective use on your website.",
      "Incorporate a logo and header into webpage.",
      "Incorporate images into a website.",
    ],
    performance_skills: [
      "Add an enhanced image to your website.",
      "Optimize an image for quick loading on a website.",
    ],
  },
  {
    id: "6",
    strand: 'Exploration & Preparation for Careers in Web Development: Students will explore careers in web development and prepare a portfolio of projects created.',
    standards: [
      'Explore IT web development careers.'
  }
]
