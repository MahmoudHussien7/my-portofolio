"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/Components/ui/section-header";
import { FadeIn } from "@/Components/ui/motion";

interface StepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, index }) => {
  return (
    <FadeIn delay={index * 0.15} direction="up">
      <motion.div
        whileHover={{ y: -4 }}
        className="flex flex-col h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/25 transition-colors"
      >
        <span className="text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary leading-none mb-4 opacity-80">
          {number}
        </span>
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-white/75 leading-relaxed">{description}</p>
      </motion.div>
    </FadeIn>
  );
};

const ThreeStepsSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Design",
      description:
        "Starting with consultation, wireframes, and high-fidelity mockups to visualize the product before a single line of code is written.",
    },
    {
      number: "02",
      title: "Development",
      description:
        "Turning designs into functional, responsive applications with clean architecture, reusable components, and modern frameworks like React and Next.js.",
    },
    {
      number: "03",
      title: "Deployment",
      description:
        "Thorough testing, performance audits, and seamless launches — followed by monitoring and maintenance to keep everything running smoothly.",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#0f766e]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          label="My Process"
          title="Three Steps to Success"
          description="A proven workflow from concept to launch — design, build, and ship with confidence."
          align="left"
          variant="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step key={step.number} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepsSection;
