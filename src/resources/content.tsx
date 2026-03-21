// biome-ignore assist/source/organizeImports: <explanation>
import type {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Audrey",
  lastName: "Senou",
  name: "Audrey Senou",
  role: "Web & Mobile Development | Data Science & Analytics | Digital Solutions Architect",
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
  title: `${person.name} - Data-Driven Developer & Data Scientist | Freelance Portfolio`,
  description: `Portfolio of Audrey Senou, a freelance full-stack developer and data scientist specialized in building intelligent applications that transform data into strategic decision tools.`,
  headline: <>Je transforme les données en outils stratégiques</>,
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
      Développeur & Data Analyst, je crée des solutions digitales capables d’analyser, prédire et optimiser.
      J&apos;allie développement logiciel, analyse statistique et automatisation pour générer de la valeur.
    </>
  ),
};



const about: About = {
  path: "/about",
  label: "About",
  title: `About Audrey Senou – Data-Driven Developer & Data Scientist`,
  description: `Découvrez le profil d’Audrey Senou : expert en développement web (Next.js), science des données (Python/ML) et automatisation intelligente. Basé en Afrique, orienté solutions business.`,
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
        Développeur web et mobile orienté solutions, avec une spécialisation en Data Science et analyse de données, 
        je conçois des applications intelligentes capables d’exploiter les données pour générer de la valeur. 
        J’allie développement logiciel, analyse statistique et automatisation pour créer des solutions performantes, 
        utiles et orientées décision.
      </>
    ),
  },




  work: {
    display: true, // set to false to hide this section
    title: "Expériences & Solutions",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2025 - Présent",
        role: "Data-Driven Developer & Project Manager",
        achievements: [
          "Intelligence d'Affaires : Développement d'AllControl, un système de gestion de stocks avec analyse prédictive des besoins.",
          "Automatisation Fiscale : Application de gestion des contribuables avec traitement automatisé et analyse de données, réduisant le travail manuel de 50%.",
          "Analyse de Contenu : Conception de MiabeHub, plateforme avec analyse d'engagement utilisateur et optimisation de ligne éditoriale.",
          "Aide à la Décision : Mise en œuvre de dashboards intelligents pour optimiser les processus métiers de clients variés.",
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
          "Agricultural Intelligence : Plateforme e-commerce avec analyse de catalogue et suivi des ventes pour optimiser les stocks.",
          "Management Digital : Solution de gestion pour piscicultures avec tracking de croissance et prévisions de production.",
        ],
        images: [],
      },
    ],
  },



  studies: {
    display: true, // set to false to hide this section
    title: "Formation",
    institutions: [
      {
        name: "ESGIS, Togo",
        description: "Informatique de Gestion avec focus sur le développement logiciel et la gestion de base de données.",
      },
      {
        name: "Certifications Online",
        description: "Data Science (Python), Machine Learning, DevOps et Management de Projets Digitaux.",
      },
    ],
  },


  technical: {
  display: true, // set to false to hide this section
  title: "Compétences Techniques",
  skills: [
    {
      title: "💻 Développement Logiciel",
      description: "Conception d'applications robustes et scalables avec les frameworks les plus performants du marché.",
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
          src: "/images/projects/skm/skm.png",
          alt: "Web development project",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "📊 Data & Analyse",
      description: "Transformation de données brutes en informations exploitables via l'analyse statistique et le Machine Learning.",
      tags: [
        { name: "Python (Pandas, NumPy)", icon: "python" },
        { name: "Machine Learning", icon: "tensorflow" },
        { name: "Statistiques (Chi2, Cramer V)", icon: "python" },
        { name: "Nettoyage de Données", icon: "python" },
        { name: "Visualisation", icon: "python" },
      ],
      images: [
        {
          src: "/images/projects/think/think.png",
          alt: "UI/UX project",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "⚙️ Automatisation & Systèmes",
      description: "Optimisation de processus via des bots intelligents et des systèmes orientés décision stratégique.",
      tags: [
        { name: "Bots de Génération", icon: "automation" },
        { name: "Automation (CI/CD)", icon: "ci" },
        { name: "Docker", icon: "docker" },
        { name: "Systèmes de Décision", icon: "automation" },
      ],
      images: [],
    },
  ],
  },

  beyond: {
    display: true,
    title: "Au-delà du Code",
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
  title: `Data Tech & Strategy Blog – ${person.name}`,
  description: `Découvrez les articles d’Audrey Senou sur le développement, la Data Science, l’automatisation et la gestion stratégique de projets digitaux.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Portfolio Projets – ${person.name} | Data-Driven Solutions`,
  description: `Explorez les réalisations d’Audrey Senou : applications web intelligentes, analyses de données avancées et systèmes automatisés à haute valeur ajoutée.`,
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

export { person, social, newsletter, mailchimp, home, about, blog, work, gallery };
