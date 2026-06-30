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
      {
        src: "/images/projects/allcontrol/allcontrol2.png",
        alt: "AllControl Analytics",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/allcontrol/allcontrol3.png",
        alt: "AllControl Management",
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
    images: [
      {
        src: "/images/projects/taxapp/taxapp.png",
        alt: "TaxApp Dashboard",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/taxapp/taxapp2.png",
        alt: "TaxApp Data Processing",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/taxapp/taxapp3.png",
        alt: "TaxApp Reports",
        width: 16,
        height: 9,
      },
    ],
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
    images: [
      {
        src: "/images/projects/miabehub/miabehub.png",
        alt: "MiabeHub Dashboard",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/miabehub/miabehub2.png",
        alt: "MiabeHub Analytics",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/miabehub/miabehub3.png",
        alt: "MiabeHub Content",
        width: 16,
        height: 9,
      },
    ],
    metrics: [
      { label: "User engagement", value: "+40%" },
    ],
    featured: true,
  },
  {
    slug: "akonta",
    title: "AKONTA",
    tagline: "All-in-one business management solution for SMEs",
    category: "Business application",
    problem:
      "Entrepreneurs waste enormous time with manual calculations, tax errors (VAT, BIC), poorly organized documents, approximate stock tracking, and unprofessional invoicing. This limits productivity, creates confusion, and prevents good decision-making.",
    solution:
      "All-in-one platform that automates the entire management process: automatic tax calculation (VAT, BIC), instant invoice and proforma generation, stock management (in/out, available levels, units), complete customer database, product and service management with purchase and sale prices, instant WhatsApp invoice sending upon sale validation, and a comprehensive statistics module that transforms sales data into clear charts.",
    impact:
      "100% automation of tax calculations, elimination of manual errors, professional instant invoicing, and complete business visibility through real-time statistics and charts.",
    tech: ["Laravel", "MySQL", "PHP"],
    images: [
      {
        src: "/images/projects/akonta/akonta.png",
        alt: "AKONTA Dashboard",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/akonta/akonta2.png",
        alt: "AKONTA Invoicing",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/akonta/akonta3.png",
        alt: "AKONTA Stock Management",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/akonta/akonta4.png",
        alt: "AKONTA Statistics",
        width: 16,
        height: 9,
      },
    ],
    metrics: [
      { label: "Tax calculation automation", value: "100%" },
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
      {
        src: "/images/projects/lamaindedieu/2.png",
        alt: "SCOOPS Products",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/lamaindedieu/3.png",
        alt: "SCOOPS Dashboard",
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
        alt: "ANDRE GROUP Home",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/andregroup/2.png",
        alt: "ANDRE GROUP Services",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/andregroup/3.png",
        alt: "ANDRE GROUP Contact",
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
    images: [
      {
        src: "/images/projects/skm/skm.png",
        alt: "SKM Dashboard",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/skm/skm2.png",
        alt: "SKM Stock Management",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/skm/skm3.png",
        alt: "SKM Analytics",
        width: 16,
        height: 9,
      },
    ],
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
    images: [
      {
        src: "/images/projects/denonce/denonce.png",
        alt: "Dénoncé Home",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/denonce/denonce2.png",
        alt: "Dénoncé Reporting",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/denonce/denonce3.png",
        alt: "Dénoncé Dashboard",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/denonce/denonce4.png",
        alt: "Dénoncé Admin",
        width: 16,
        height: 9,
      },
    ],
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
    images: [
      {
        src: "/images/projects/think/think.png",
        alt: "Think App",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/think/think2.png",
        alt: "Think Notes",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/think/think3.png",
        alt: "Think Organization",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/think/think4.png",
        alt: "Think Ideas",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/think/think5.png",
        alt: "Think Workspace",
        width: 16,
        height: 9,
      },
      {
        src: "/images/projects/think/think6.png",
        alt: "Think Settings",
        width: 16,
        height: 9,
      },
    ],
  },
];