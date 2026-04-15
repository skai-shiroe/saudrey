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
  role: "Architecte Solutions Digitales | Data Scientist & Expert Automatisation Intelligent",
  avatar: "/images/skai.jpg",
  email: "senou.audrey.dev@gmail.com",
  location: "Africa/Lome",
  languages: ["French", "English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      Join my weekly newsletter where I share strategies on data science, high-performance web development, 
      and AI automation—practical insights to transform data into strategic tools.
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
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
  title: `${person.name} | Expert Solutions Data-Driven & Architecte SaaS Next.js`,
  description: `Optimisez votre business avec Audrey Senou : Expert en Pipelines de Données, modèles de Machine Learning et développement SaaS Next.js haute performance.`,
  headline: <>I transform data into strategic tools</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">A. Senou</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/allcontrol",
  },
  subline: (
    <>
      As a Developer & Data Analyst, I build digital solutions capable of analyzing, predicting, and optimizing.
      I combine software development, statistical analysis, and automation to generate value.
    </>
  ),
};



const about: About = {
  path: "/about",
  label: "About",
  title: `À propos d'Audrey Senou – Expert Data Science & Développement SaaS`,
  description: `Découvrez le profil d'Audrey Senou : expert en développement Next.js, Data Science (Python/ML) et automatisation intelligente. Maîtrisez vos données.`,
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
        Solution-oriented web and mobile developer, with a specialization in Data Science and data analysis, 
        I design intelligent applications capable of leveraging data to generate value. 
        I combine software development, statistical analysis, and automation to create high-performance, 
        useful, and decision-driven solutions.
      </>
    ),
  },




  work: {
    display: true, // set to false to hide this section
    title: "Expériences en Ingénierie",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2025 - Present",
        role: "Data-Driven Developer & Project Manager",
        achievements: [
          "Industrial Services: Professional showcase site for STE GOD IS GOOD - ANDRE GROUP, specializing in Import-Export and industrial services.",
          "Sustainable Agriculture: Digital platform for SCOOPS LA MAIN DE DIEU, promoting sustainable agriculture and equitable trade in Togo.",
          "Business Intelligence: Development of AllControl, a stock management system with predictive requisition features.",
          "Tax Automation: Taxpayer management application with automated data processing and analysis, reducing manual work by 50%.",
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
          "Agricultural Intelligence: E-commerce platform with catalog analysis and sales tracking to optimize stocks.",
          "Digital Management: Management solution for fish farming with growth tracking and production forecasts.",
        ],
        images: [],
      },
    ],
  },



  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "ESGIS, Togo",
        description: "Computer Science with a focus on software development and database management.",
      },
      {
        name: "Online Certifications",
        description: "Data Science (Python), Machine Learning, DevOps, and Digital Project Management.",
      },
    ],
  },


  technical: {
  display: true, // set to false to hide this section
  title: "Expertise Technique & Pôles de Solutions",
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
          alt: "Projet SCOOPS LA MAIN DE DIEU",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Data & Analysis",
      description: "Transforming raw data into actionable insights via statistical analysis and Machine Learning.",
      tags: [
        { name: "Python (Pandas, NumPy)", icon: "python" },
        { name: "Machine Learning", icon: "tensorflow" },
        { name: "Statistics (Chi2, Cramer V)", icon: "python" },
        { name: "Data Cleaning", icon: "python" },
        { name: "Visualization", icon: "python" },
      ],
      images: [
        {
          src: "/images/projects/allcontrol/allcontrol.png",
          alt: "Système AllControl",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Automation & Systems",
      description: "Process optimization via intelligent bots and strategic decision-oriented systems.",
      tags: [
        { name: "Generation Bots", icon: "automation" },
        { name: "Automation (CI/CD)", icon: "ci" },
        { name: "Docker", icon: "docker" },
        { name: "Decision Systems", icon: "automation" },
      ],
      images: [
        {
          src: "/images/projects/andregroup/1.png",
          alt: "Projet ANDRE GROUP",
          width: 16,
          height: 9,
        },
      ],
    },
    {
  title: "Soft Skills & Leadership",
  description:
    "Ability to communicate complex ideas clearly while maintaining consistent operational excellence and strong team coordination.",
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
    title: "Beyond Code",
    books: [
      { title: "48 Lois du pouvoir" },
      { title: "Plus malin que le diable" },
      { title: "Réfléchissez et devenez riche" },
      { title: "L'obstacle est le chemin" },
      { title: "Ego is the Enemy" },
      { title: "Comment convaincre en moins de 2 minutes" },
      { title: "L'art de la guerre" },
      { title: "The Code Book" },
    ],
    games: ["Échecs", "Dame", "Uno", "Moulin", "Go", "Undercover"],
  },
};


const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog Data Tech & Stratégie Digitale – ${person.name}`,
  description: `Conseils et stratégies sur le développement SaaS, la Data Science, l'automatisation et la gestion de projets digitaux par Audrey Senou.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Portfolio Projets – ${person.name} | Solutions Data-Driven & SaaS`,
  description: `Explorez les réalisations d'Audrey Senou : applications web intelligentes, analyses de données avancées et systèmes automatisés à haute valeur ajoutée.`,
};

const truths: Truths = {
  path: "/truths",
  label: "Truths",
  title: `Vérités Tech & Évangile Dev – ${person.name}`,
  description: `Découvrez la série "En vérité en vérité..." : une collection d'insights techniques, d'humour dev et de sagesse en ingénierie logicielle par ${person.name}.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
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
