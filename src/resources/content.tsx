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
  role: "Web & Mobile Development | Digital Project Management | Virtual Assistance",
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
      Join my weekly newsletter where I share strategies on web development, design, project
      management, and AI—practical insights to help you build smarter digital solutions and stay
      ahead in the tech world.
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
  title: `${person.name} - Full-Stack Developer & Project Manager | Freelance Portfolio`,
  description: `Portfolio of Audrey Senou, a freelance full-stack developer and project manager specializing in modern web applications, mobile apps, and AI solutions. Based in Africa.`,
  headline: <>Designing and building impactful digital solutions</>,
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
      I&apos;m Audrey Senou, a web developer and project manager creating sleek,
      functional apps that blend technology and design.
    </>
  ),
};



const about: About = {
  path: "/about",
  label: "About",
  title: `About Audrey Senou – Full-Stack Developer & Project Manager`,
  description: `Learn about Audrey Senou's expertise in web development, mobile apps, AI integration, and digital project management. Freelance full-stack developer based in Africa specializing in Next.js, React, Node.js, and modern DevOps.`,
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
    description:
      "I'm a passionate full-stack developer and project manager specializing in modern web technologies like Next.js, React, Node.js, and AI integration. I've built numerous production applications including e-commerce platforms, stock management systems, and AI-powered solutions. As a freelance developer in Africa, I focus on delivering scalable, high-performance applications that drive business growth and user satisfaction.",
  },




  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2025 - Present",
        role: "Web & Mobile Developer / Project Manager",
        achievements: [
          "Developed AllControl, a stock management system with predictive requisition features for businesses.",
          "Built a taxpayer management application with automated data processing, reducing manual work by 50%.",
          "Created a system for anonymous reporting, allowing secure public consultation without registration.",
          "Designed and deployed MiabeHub, a content platform with unique editorial style and high user engagement.",
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
        role: "Web Developer & Designer",
        achievements: [
          "Developed an e-commerce platform for a local agricultural business, integrating product catalog and online sales.",
          "Implemented a digital solution for managing pisciculture operations, streamlining workflow and tracking stock.",
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2023 - 2024",
        role: "Frontend Developer & UI/UX Designer",
        achievements: [
          "Created multiple client websites and applications, combining modern UI/UX and responsive design.",
          "Integrated automation tools and dashboards to help clients manage operations efficiently.",
        ],
        images: [],
      },
    ],
  },



  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "ESGIS, Togo",
        description: "Studied Computer Science with a focus on software development and database management.",
      },
      {
        name: "Online Courses & Certifications",
        description: "Completed courses in web development, AI, DevOps, and digital project management.",
      },
    ],
  },


  technical: {
  display: true, // set to false to hide this section
  title: "Technical Skills",
  skills: [
    {
      title: "Figma & UI/UX Design",
      description: "Expert in prototyping and designing intuitive interfaces with Figma, Tailwind, and custom design systems.",
      tags: [
        { name: "Figma", icon: "figma" },
        { name: "UI/UX", icon: "figma" },
        { name: "Design Systems", icon: "figma" },
      ],
      images: [
        {
          src: "/images/projects/think/think.png",
          alt: "UI/UX project",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/miabehub/miabehub.png",
          alt: "UI/UX project",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Next.js & Web Development",
      description: "Building modern web applications with Next.js, TypeScript, Tailwind CSS, Elysia.js, and Prisma.",
      tags: [
        { name: "JavaScript", icon: "javascript" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Prisma", icon: "prisma" },
        { name: "Elysia.js", icon: "javascript" },
        { name: "Wordpress", icon: "wordpress" },
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
      title: "DevOps & Automation",
      description: "Experience with Docker, CI/CD pipelines, and workflow automation to optimize project delivery and deployment.",
      tags: [
        { name: "Docker", icon: "docker" },
        { name: "CI/CD", icon: "ci" },
        { name: "Automation", icon: "automation" },
      ],
      images: [],
    },
    {
      title: "AI & Machine Learning",
      description: "Familiar with Python, TensorFlow, and PyTorch for integrating AI solutions into projects and automating tasks.",
      tags: [
        { name: "Python", icon: "python" },
        { name: "TensorFlow", icon: "tensorflow" },
        { name: "PyTorch", icon: "pytorch" },
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
  title: `Design & Tech Blog – ${person.name} | Web Development Insights`,
  description: `Read Audrey Senou's articles on full-stack development, UI/UX design, AI integration, project management tips, and modern web technologies. Practical insights for developers and digital professionals.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Portfolio Projects – ${person.name} | Full-Stack Development & Design`,
  description: `Explore Audrey Senou's portfolio of full-stack web applications, mobile apps, AI projects, and digital management solutions. From e-commerce platforms to stock management systems.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
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
