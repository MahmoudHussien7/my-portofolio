import {
  PAGE_SEO,
  buildBreadcrumbSchema,
  buildCreativeWorkSchema,
  buildWebPageSchema,
} from "@/lib/seo";
import { projects } from "@/data/projects";

export function getProjectSEO(projectId: string) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  return {
    title: `${project.title} | Mahmoud Hussein Front-End Portfolio Project`,
    description: project.description,
    path: `/projects/${project.id}`,
    keywords: [
      project.title,
      "Mahmoud Hussein Project",
      "Front-End Development",
      "React Portfolio",
    ],
    ogImage: project.image,
  };
}

export function getProjectSchema(projectId: string) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  return [
    buildWebPageSchema(getProjectSEO(projectId)!),
    buildCreativeWorkSchema(project),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: project.title, path: `/projects/${project.id}` },
    ]),
  ];
}

export function getProjectsPageSchema() {
  return [
    buildWebPageSchema(PAGE_SEO.projects),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
  ];
}
