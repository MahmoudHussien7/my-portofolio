"use client";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { FadeIn } from "@/Components/ui/motion";
import { ArrowRight } from "lucide-react";

const techStack = [
  { icon: FaReact, label: "React", color: "text-primary" },
  { icon: SiNextdotjs, label: "Next.js", color: "text-foreground" },
  { icon: SiTypescript, label: "TypeScript", color: "text-secondary" },
];

const About: React.FC = () => {
  return (
    <section className="section-container">
      <div className="flex flex-col md:flex-row gap-16 items-center w-full">
        <FadeIn direction="right" className="md:w-1/2 text-center md:text-left">
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Expert Front-End Development at Your Service
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            Mahmoud Hussein specializes in crafting seamless user experiences
            through modern web technologies —{" "}
            <strong className="text-primary">React.js</strong>,{" "}
            <strong className="text-foreground">Next.js</strong>, and{" "}
            <strong className="text-accent">TypeScript</strong>. With experience
            at Gi Properties, DiDi Global, and OVZA LTD, he delivers performant,
            scalable front-end solutions with a keen eye for detail.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Button href="/about" variant="primary">
              Learn More
            </Button>
            <Button href="/contact" variant="outline">
              Contact <ArrowRight size={18} />
            </Button>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.15}
          direction="left"
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-primary/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-dashed border-secondary/30"
            />

            <FaReact
              className="text-primary opacity-90 animate-spin"
              style={{ width: 180, height: 180, animationDuration: "8s" }}
            />

            {techStack.map((tech, i) => {
              const angle = (i * 120 * Math.PI) / 180;
              const radius = 140;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className="absolute flex flex-col items-center gap-1 p-3 rounded-xl bg-surface border border-border shadow-card"
                >
                  <tech.icon size={28} className={tech.color} />
                  <span className="text-xs font-medium text-muted">
                    {tech.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
