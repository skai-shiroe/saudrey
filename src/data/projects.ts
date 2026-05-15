export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  images: { src: string; alt: string; width: number; height: number }[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "allcontrol",
    title: "AllControl",
    tagline: "Intelligent operational management system",
    category: "Business application",
    problem:
      "Manual management of inventory, orders, and supplies leading to frequent stockouts, costly overstocking, and loss of real-time visibility into operations.",
    solution:
      "Comprehensive management platform integrating a real-time dashboard, predictive alerts on stock levels, and an automatic replenishment system based on historical trend analysis.",
    impact:
      "50% reduction in manual tracking work, elimination of critical stockouts, and real-time visibility across all operations.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Python", "Prisma", "Docker"],
    images: [
      {
        src: "/images/projects/allcontrol/allcontrol.png",
        alt: "AllControl Dashboard",
        width: 16,
        height: 9,
      },
    ],
    metrics: [
      { label: "Manual workload reduction", value: "50%" },
      { label: "Active users", value: "150+" },
      { label: "Uptime", value: "99.9%" },
    ],
    featured: true,
  },
  {
    slug: "taxapp",
    title: "TaxApp",
    tagline: "Tax processing automation",
    category: "Business application",
    problem:
      "Manual and tedious management of taxpayer data, with high error risks and excessive processing time.",
    solution:
      "Taxpayer management application with automated data processing, statistical analysis, and report generation, significantly reducing manual interventions.",
    impact:
      "50% reduction in manual processing work, increased tax data reliability, and significant improvement in processing times.",
    tech: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Machine Learning"],
    images: [],
    metrics: [
      { label: "Manual work reduction", value: "50%" },
      { label: "Data reliability", value: "98%" },
    ],
    featured: true,
  },
  {
    slug: "miabehub",
    title: "MiabeHub",
    tagline: "Collaborative content analysis platform",
    category: "Digital platform",
    problem:
      "Difficulty analyzing user engagement and optimizing editorial strategy on a collaborative content platform.",
    solution:
      "Digital platform with integrated analytics, user behavior analysis, and editorial recommendations based on engagement data.",
    impact:
      "Content strategy optimization, increased user engagement, and editorial decisions based on concrete data.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Python", "Analytics"],
    images: [],
    metrics: [
      { label: "User engagement", value: "+40%" },
    ],
    featured: true,
  },
  {
    slug: "lamaindedieu",
    title: "SCOOPS La Main de Dieu",
    tagline: "E-commerce platform for sustainable agriculture",
    category: "Web application",
    problem:
      "An agricultural cooperative needed a digital storefront to promote sustainable agriculture and fair trade in Togo, without a suitable solution for their sector.",
    solution:
      "Custom e-commerce platform with product catalog, sales tracking, and analytics to optimize inventory and sales campaigns.",
    impact:
      "National visibility for local producers, increased sales, and improved supply chain traceability.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    images: [
      {
        src: "/images/projects/lamaindedieu/1.png",
        alt: "SCOOPS La Main de Dieu",
        width: 16,
        height: 9,
      },
    ],
  },
  {
    slug: "andregroup",
    title: "ANDRE GROUP",
    tagline: "Professional website for industrial services",
    category: "Web application",
    problem:
      "An industrial services and import-export company needed a professional online presence to develop its B2B clientele.",
    solution:
      "Modern professional website with service presentation, product catalog, and integrated contact form, optimized for B2B conversion.",
    impact:
      "Professional online presence, new B2B client acquisition channel, and strengthened brand image.",
    tech: ["Next.js", "TypeScript", "WordPress"],
    images: [
      {
        src: "/images/projects/andregroup/1.png",
        alt: "ANDRE GROUP",
        width: 16,
        height: 9,
      },
    ],
  },
  {
    slug: "lapepiniereskm",
    title: "La Pépinière SKM",
    tagline: "Management solution for plant nursery",
    category: "Business application",
    problem:
      "Complex management of plant stock, sales tracking, and orders for a rapidly growing nursery.",
    solution:
      "Management application tailored to the specific needs of a nursery, with stock tracking, order management, and analytics.",
    impact:
      "Better inventory visibility, reduced losses, and optimized replenishment.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    images: [],
  },
  {
    slug: "denonce",
    title: "Dénoncé",
    tagline: "Citizen reporting platform",
    category: "Digital platform",
    problem:
      "Need for a secure and anonymous channel allowing citizens to report incidents while ensuring data confidentiality.",
    solution:
      "Reporting platform with secure authentication system, report tracking, and moderated administration interface.",
    impact:
      "Facilitated citizen reporting, structured incident processing, and improved responsiveness.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Auth"],
    images: [],
  },
  {
    slug: "think",
    title: "Think",
    tagline: "Reflection and ideation application",
    category: "Web application",
    problem:
      "Lack of simple and elegant tools to capture, organize, and develop ideas in a structured way.",
    solution:
      "Minimalist note-taking and ideation application with a clean interface and smooth user experience.",
    impact:
      "Productive tool for capturing and organizing ideas, adopted by a growing community of users.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    images: [],
  },
];