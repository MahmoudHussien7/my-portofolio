"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/Components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/Components/ui/motion";

const ProjectsGrid = () => {
  return (
    <main className="section-container">
      <SectionHeader
        label="Work"
        title="Projects"
        description="Explore featured projects showcasing modern front-end development, performance optimization, and thoughtful UX."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <Link href={`/projects/${project.id}`} className="block group">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-card h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{project.description}</p>
                </div>
              </motion.article>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </main>
  );
};

export default ProjectsGrid;
