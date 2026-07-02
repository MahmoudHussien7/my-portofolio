"use client";

import { useRouter } from "next/router";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { FadeIn } from "@/Components/ui/motion";
import SEO from "@/Components/SEO";
import { getProjectSEO, getProjectSchema } from "@/lib/project-seo";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const projectId = typeof id === "string" ? id : "";
  const project = projects.find((proj) => proj.id === projectId);
  const seo = getProjectSEO(projectId);
  const schema = getProjectSchema(projectId);

  if (!project || !seo || !schema) {
    return (
      <main className="section-container text-center">
        <p className="text-xl text-muted">Project not found.</p>
        <div className="mt-6">
          <Button href="/projects" variant="outline">
            <ArrowLeft size={18} /> Back to Projects
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO seo={seo} schema={schema} />
      <main className="section-container">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted max-w-3xl">{project.description}</p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 rounded-2xl overflow-hidden border border-border shadow-card"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </motion.div>

          <div className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-semibold text-foreground">Details</h2>
            <p className="mt-4 text-muted leading-relaxed">{project.details}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.Live_demo !== "none" && (
                <Button onClick={() => window.open(project.Live_demo, "_blank")}>
                  Live Demo <ExternalLink size={18} />
                </Button>
              )}
              {project.source_code !== "none" && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.source_code, "_blank")}
                >
                  Source Code <Github size={18} />
                </Button>
              )}
            </div>
          </div>
        </FadeIn>
      </main>
    </>
  );
};

export default ProjectPage;
