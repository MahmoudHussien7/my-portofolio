"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { CalendarDays, MapPin, Building2, Briefcase } from "lucide-react";
import { SectionHeader } from "@/Components/ui/section-header";
import { FadeIn } from "@/Components/ui/motion";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Front-End Developer",
    company: "Gi Properties",
    location: "Dubai, UAE",
    period: "Oct 2025 - Present",
    type: "Full-time",
    achievements: [
      "Led the front-end migration from a legacy EJS-based architecture to a modern Next.js + TypeScript stack, improving Core Web Vitals (LCP/FID) by 40%.",
      "Optimized the legacy EJS setup with structured package management and Webpack bundling, reducing asset size and improving load performance.",
      "Implemented caching strategies using Service Workers, decreasing repeat load times and improving overall user experience.",
      "Collaborated with the backend team to refine API contracts, reduce redundant client-server requests, and enhance SEO performance.",
      "Designed a scalable front-end architecture leveraging SSR and SSG in Next.js to improve indexing, performance, and user engagement.",
      "Built a custom internal CMS dashboard enabling SEO and content teams to manage dynamic assets independently.",
      "Established performance monitoring workflows using Lighthouse audits and real user metrics.",
      "Applied technical SEO strategies including semantic HTML restructuring and structured data (schema markup).",
    ],
  },
  {
    title: "Front-End Developer",
    company: "DiDi Global",
    location: "Beijing, China",
    period: "May 2025 - Sep 2025",
    type: "Full-time",
    achievements: [
      "Developed responsive user interfaces using Next.js and TypeScript, ensuring seamless experiences across devices for global mobility requirements.",
      "Integrated localization modules using React Intl and i18next, delivering multi-language support for 13 countries.",
      "Assessed TailwindCSS V4 integration within the application codebase, applying fixes to align with updated framework conventions.",
      "Configured and managed website tracking with Google Tag Manager (GTM), enhancing analytics integrations.",
    ],
  },
  {
    title: "Web Developer",
    company: "OVZA LTD",
    location: "Remote, UK",
    period: "Sep 2024 - Feb 2025",
    type: "Contract",
    achievements: [
      "Developed and maintained responsive, high-performance websites using HTML, CSS, JavaScript, and modern frameworks.",
      "Optimized website performance through code refinement, image optimization, and best practices implementation.",
      "Integrated APIs and third-party services to enhance website functionality and user engagement.",
      "Implemented SEO best practices in website architecture and markup.",
      "Achieved a 30% reduction in error rates over 6 months through thorough code reviews and testing.",
    ],
  },
];

export function Experience() {
  return (
    <section className="section-container">
      <SectionHeader
        label="Career"
        title="Professional Experience"
        description="My journey in web development — building modern applications and delivering exceptional user experiences."
      />

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block bg-gradient-to-b from-primary via-accent to-secondary opacity-40" />

        <div className="space-y-10">
          {experienceData.map((job, index) => (
            <FadeIn key={job.company} delay={index * 0.1} direction="up">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-6 w-4 h-4 rounded-full hidden md:block bg-gradient-to-r from-primary to-secondary border-4 border-surface shadow-glow"
                />

                <Card className="md:ml-16 border border-border bg-surface hover:border-primary/40 hover:shadow-card transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <CardTitle className="text-2xl font-bold text-foreground">
                            {job.title}
                          </CardTitle>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-secondary" />
                          <p className="text-xl font-semibold text-foreground/90">
                            {job.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                          {job.type}
                        </Badge>
                        <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-accent" />
                            <span className="font-medium">{job.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span className="font-medium">{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 bg-gradient-to-r from-primary to-secondary" />
                          <p className="text-muted leading-relaxed">{achievement}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
