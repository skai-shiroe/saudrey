// biome-ignore assist/source/organizeImports: <explanation>
import type {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Truths,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Audrey",
  lastName: "Senou",
  name: "Audrey Senou",
  role: "Digital Solutions Engineer | Product Builder & System Architect",
  avatar: "/images/skai.jpg",
  email: "senou.audrey.dev@gmail.com",
  location: "Africa/Lome",
  languages: ["French", "English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s newsletter</>,
  description: (
    <>
      Join my weekly newsletter where I share strategies in data science, high-performance web development,
      and AI automation — practical insights to transform data into strategic tools.
    </>
  ),
};

const mailchimp = {
  action: "https://skai-shiroe.us21.list-manage.com/subscribe/post?u=c1a5a210340eb6c7bff33b2ba&id=0462d244aa",
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 100
    },
    gradient: {
      display: true,
      x: 50,
      y: -25,
      width: 100,
      height: 100,
      tilt: 0,
      colorStart: 'accent-background-strong',
      colorEnd: 'static-transparent',
      opacity: 50
    },
    dots: {
      display: true,
      size: 2,
      color: 'brand-on-background-weak',
      opacity: 20
    },
    lines: {
      display: false,
      color: 'neutral-alpha-weak',
      opacity: 100
    },
    grid: {
      display: false,
      color: 'neutral-alpha-weak',
      opacity: 100,
      width: 'var(--static-space-32)',
      height: 'var(--static-space-32)'
    }
  }
};


const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/skai-shiroe",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/senou-k-audrey/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@skai_shiroe",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name} | Digital Solutions Engineer & Product Builder`,
  description: `Digital systems architect, Product Builder, and data expert. I build SaaS solutions, business applications, and automation systems that transform businesses.`,
  headline: <>I build digital systems that simplify and automate businesses.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">A. Senou</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/allcontrol",
  },
  subline: (
    <>
      Developer & Data Analyst, I build digital solutions capable of analyzing, predicting, and optimizing.
      I combine software development, statistical analysis, and automation to generate value.
    </>
  ),
};



const about: About = {
  path: "/about",
  label: "About",
  title: `About Audrey Senou – Data Science & SaaS Development Expert`,
  description: `Discover the profile of Audrey Senou: expert in Next.js development, Data Science (Python/ML) and intelligent automation. Master your data.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Solution-oriented web and mobile developer, specialized in Data Science and data analysis,
        I design intelligent applications capable of leveraging data to generate value.
        I combine software development, statistical analysis, and automation to create
        high-performance, useful solutions oriented toward decision-making.
      </>
    ),
  },




  work: {
    display: true,
    title: "Engineering Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2025 - Present",
        role: "Data-Driven Developer & Project Lead",
        achievements: [
          "Industrial Services: Professional website for STE GOD IS GOOD - ANDRE GROUP, specialized in Import-Export and industrial services.",
          "Sustainable Agriculture: Digital platform for SCOOPS LA MAIN DE DIEU, promoting sustainable agriculture and fair trade in Togo.",
          "Business Intelligence: Development of AllControl, an inventory management system with predictive replenishment features.",
          "Tax Automation: Taxpayer management application with automated data processing, reducing manual work by 50%.",
          "Content Analysis: Design of MiabeHub, a platform with user engagement analysis and editorial strategy optimization.",
          "Decision Support: Implementation of intelligent dashboards to optimize business processes for various clients.",
        ],
        images: [
          {
            src: "/images/projects/allcontrol/allcontrol.png",
            alt: "AllControl Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance",
        timeframe: "2024 - 2025",
        role: "Web Developer & Data Analyst",
        achievements: [
          "Agricultural Intelligence: E-commerce platform with catalog analysis and sales tracking to optimize inventory.",
          "Digital Management: Management solution for fish farming with growth tracking and production forecasts.",
        ],
        images: [],
      },
    ],
  },



  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "ESGIS, Togo",
        description: "Computer Science with specialization in software development and database management.",
      },
      {
        name: "Online Certifications",
        description: "Data Science (Python), Machine Learning, DevOps and Digital Project Management.",
      },
    ],
  },


  technical: {
  display: true,
  title: "Technical Expertise & Solution Areas",
  skills: [
    {
      title: "Software Development",
      description: "Building robust and scalable applications with the most performant frameworks on the market.",
      tags: [
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "figma" },
        { name: "Elysia.js (Bun)", icon: "javascript" },
        { name: "Prisma & PostgreSQL", icon: "prisma" },
        { name: "WordPress (Blocksy)", icon: "wordpress" },
      ],
      images: [
        {
          src: "/images/projects/lamaindedieu/1.png",
          alt: "SCOOPS LA MAIN DE DIEU Project",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Data & Analytics",
      description: "Transforming raw data into actionable insights through statistical analysis and Machine Learning.",
      tags: [
        { name: "Python (Pandas, NumPy)", icon: "python" },
        { name: "Machine Learning", icon: "tensorflow" },
        { name: "Statistics (Chi2, Cramer's V)", icon: "python" },
        { name: "Data Cleaning", icon: "python" },
        { name: "Visualization", icon: "python" },
      ],
      images: [
        {
          src: "/images/projects/allcontrol/allcontrol.png",
          alt: "AllControl System",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Automation & Systems",
      description: "Process optimization through intelligent bots and strategic decision-oriented systems.",
      tags: [
        { name: "Generation Bots", icon: "automation" },
        { name: "Automation (CI/CD)", icon: "ci" },
        { name: "Docker", icon: "docker" },
        { name: "Decision Systems", icon: "automation" },
      ],
      images: [
        {
          src: "/images/projects/andregroup/1.png",
          alt: "ANDRE GROUP Project",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "IT Project Management",
      description:
        "End-to-end IT project management: scoping, planning, team coordination, risk management, and on-time delivery.",
      tags: [
        { name: "Agile (Scrum/Kanban)", icon: "people" },
        { name: "Team Coordination", icon: "people-circle" },
        { name: "Risk Management", icon: "shield-checkmark" },
        { name: "Budget & Planning", icon: "construct" },
        { name: "Jira / Notion", icon: "check" },
      ],
      images: [],
    },
    {
  title: "Soft Skills & Leadership",
  description:
    "Ability to communicate complex ideas clearly while maintaining constant operational excellence and strong team coordination.",
  tags: [
    { name: "Public Speaking", icon: "person" },
    { name: "Discipline", icon: "check" },
    { name: "Critical Thinking", icon: "lightbulb" },
    { name: "Leadership", icon: "people" },
    { name: "Problem Solving", icon: "construct" },
    { name: "Team Management", icon: "people-circle" },
    { name: "Decision Making", icon: "git-branch" },
    { name: "Adaptability", icon: "refresh" },
    { name: "Time Management", icon: "time" },
    { name: "Conflict Resolution", icon: "shield-checkmark" },
  ],
  images: [],
},
  ],
  },

  beyond: {
    display: true,
    title: "Beyond the Code",
    books: [
      { title: "48 Laws of Power" },
      { title: "The Wisdom of the Devil" },
      { title: "Think and Grow Rich" },
      { title: "The Obstacle Is the Way" },
      { title: "Ego Is the Enemy" },
      { title: "How to Convince in Under 2 Minutes" },
      { title: "The Art of War" },
      { title: "The Code Book" },
    ],
    games: ["Chess", "Checkers", "Uno", "Nine Men's Morris", "Go", "Undercover"],
  },
};


const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Data Tech & Digital Strategy Blog – ${person.name}`,
  description: `Tips and strategies on SaaS development, Data Science, automation, and digital project management by Audrey Senou.`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Portfolio Projects – ${person.name} | Data-Driven & SaaS Solutions`,
  description: `Explore Audrey Senou's achievements: intelligent web applications, advanced data analytics, and high-value automated systems.`,
};

const truths: Truths = {
  path: "/truths",
  label: "Truths",
  title: `Tech Truths & Dev Gospel – ${person.name}`,
  description: `Discover the "In truth, in truth..." series: a collection of technical insights, dev humor, and software engineering wisdom by ${person.name}.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A collection of photos by ${person.name}`,
  images: [
    {
      src: "/images/hobbies/books/48lois.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/hobbies/books/plusmalin.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/hobbies/books/reflechissez.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/hobbies/books/obstacle.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/hobbies/books/ego.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/hobbies/books/convaincre.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/hobbies/books/artdeguerre.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/hobbies/books/code.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, mailchimp, home, about, blog, work, gallery, truths };