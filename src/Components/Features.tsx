"use client";

import {
  Code,
  Brush,
  BarChart3,
  Search,
  Layers,
  Target,
} from "lucide-react";
import { SectionHeader } from "@/Components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/Components/ui/motion";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, modern web applications with React, Next.js, and TypeScript.",
    color: "from-primary to-accent",
  },
  {
    icon: Brush,
    title: "UI/UX Design",
    description:
      "Crafting intuitive interfaces with design systems, accessibility, and visual polish.",
    color: "from-accent to-secondary",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description:
      "GA4, Google Analytics, and Google Tag Manager — setting up events, conversions, and data-driven insights.",
    color: "from-secondary to-primary",
  },
  {
    icon: Search,
    title: "SEO & Search Tools",
    description:
      "Technical SEO, structured data, Google Search Console, and performance tuning for search visibility.",
    color: "from-primary to-secondary",
  },
  {
    icon: Layers,
    title: "Architecture Solutions",
    description:
      "Evaluating and designing scalable front-end architectures — SSR, SSG, caching, and maintainable codebases.",
    color: "from-accent to-primary",
  },
  {
    icon: Target,
    title: "Business Alignment",
    description:
      "Translating business needs and requirements into practical, high-impact technical solutions that deliver results.",
    color: "from-secondary to-accent",
  },
];

const Features: React.FC = () => {
  return (
    <section className="section-container">
      <SectionHeader
        label="My Expertise"
        title="Transforming Ideas into Digital Experiences"
        description="Specialized skills I bring to every project — from analytics and SEO to architecture and business-driven delivery."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group h-full p-6 rounded-2xl bg-surface border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}
              >
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default Features;
