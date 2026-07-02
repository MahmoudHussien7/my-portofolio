import SEO from "@/Components/SEO";
import ProjectsGrid from "@/Components/ProjectsGrid";
import { PAGE_SEO } from "@/lib/seo";
import { getProjectsPageSchema } from "@/lib/project-seo";

const ProjectsPage = () => {
  return (
    <>
      <SEO seo={PAGE_SEO.projects} schema={getProjectsPageSchema()} />
      <ProjectsGrid />
    </>
  );
};

export default ProjectsPage;
