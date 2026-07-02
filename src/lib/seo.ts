export const SITE_NAME = "Mahmoud Hussein";
export const SITE_TITLE = "Mahmoud Hussein | Front-End Developer Portfolio";
export const SITE_DESCRIPTION =
  "Mahmoud Hussein is a Front-End Developer specializing in React, Next.js, and TypeScript. Fast, SEO-friendly web apps.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mahmoudhussein-sigma.vercel.app";
export const SITE_LOCALE = "en_US";
export const AUTHOR = {
  name: "Mahmoud Hussein Abdulhaliem",
  email: "mahmoudhu37@gmail.com",
  jobTitle: "Front-End Developer",
  linkedIn: "https://www.linkedin.com/in/mahmoud-hussien-7a5088349/",
  github: "https://github.com/MahmoudHussien7",
};

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}

export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: "Mahmoud Hussein | Front-End Developer — React & Next.js Expert",
    description:
      "Hire Mahmoud Hussein — Front-End Developer all Over The World. React, Next.js, TypeScript, GA4, GTM, SEO, and scalable web architecture for global brands.",
    path: "/",
    keywords: [
      "Mahmoud Hussein",
      "Front-End Developer",
      "React Developer",
      "Next.js Developer",
      "Dubai Web Developer",
      "TypeScript",
      "Portfolio",
    ],
    ogImage: "/mahmoud1.png",
  },
  about: {
    title: "About Mahmoud Hussein | Front-End Developer Skills & Experience",
    description:
      "About Mahmoud Hussein — Front-End Developer skilled in React, Next.js, Tailwind, SEO, Google Search Console, GA4, and analytics-driven delivery.",
    path: "/about",
    keywords: [
      "About Mahmoud Hussein",
      "Front-End Developer Experience",
      "React Specialist",
      "Web Developer Dubai",
    ],
    ogImage: "/mahmoud1.png",
  },
  projects: {
    title: "Projects by Mahmoud Hussein | React, Next.js & Web Portfolio",
    description:
      "Explore projects by Mahmoud Hussein: Gi Properties, agency sites, e-commerce demos, and headless CMS apps built with React, Next.js, and TypeScript.",
    path: "/projects",
    keywords: [
      "Mahmoud Hussein Projects",
      "React Portfolio",
      "Next.js Projects",
      "Gi Properties",
      "Web Development Portfolio",
    ],
    ogImage: "/gi-properties.png",
  },
  contact: {
    title: "Contact Mahmoud Hussein | Hire a Front-End Developer",
    description:
      "Contact Mahmoud Hussein for React and Next.js development, SEO, GA4 setup, GTM integration, and scalable front-end architecture for your project.",
    path: "/contact",
    keywords: [
      "Contact Mahmoud Hussein",
      "Hire Front-End Developer",
      "React Freelancer",
      "Web Developer Contact",
    ],
    ogImage: "/mahmoud1.png",
  },
};

export function absoluteUrl(path: string) {
  const base = SITE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    url: SITE_URL,
    email: AUTHOR.email,
    jobTitle: AUTHOR.jobTitle,
    image: absoluteUrl("/mahmoud1.png"),
    sameAs: [AUTHOR.linkedIn, AUTHOR.github],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Front-End Development",
      "SEO",
      "Google Analytics",
      "Google Tag Manager",
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
    },
    inLanguage: "en",
  };
}

export function buildWebPageSchema(seo: PageSEO) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: absoluteUrl(seo.path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "en",
  };
}

export function buildCreativeWorkSchema(project: {
  title: string;
  description: string;
  details: string;
  image: string;
  Live_demo: string;
  id: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    abstract: project.details,
    image: absoluteUrl(project.image),
    url:
      project.Live_demo !== "none"
        ? project.Live_demo
        : absoluteUrl(`/projects/${project.id}`),
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: SITE_URL,
    },
    creator: {
      "@type": "Person",
      name: AUTHOR.name,
    },
    inLanguage: "en",
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/projects", changefreq: "weekly", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
];
