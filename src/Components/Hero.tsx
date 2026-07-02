"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { FadeIn } from "@/Components/ui/motion";

const Hero: React.FC = () => {
  const strings = [
    "Mahmoud Hussien",
    "a Front-End Developer",
    "a React Specialist",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentString.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentString) {
        setTimeout(() => setIsDeleting(true), 1200);
        setSpeed(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % strings.length);
        setSpeed(150);
      }
    };

    const typingInterval = setInterval(handleTyping, speed);
    return () => clearInterval(typingInterval);
  }, [text, isDeleting, speed, strings, index]);

  return (
    <section className="section-container relative overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        <FadeIn direction="right" className="text-center md:text-left md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Available for new opportunities
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
            Crafting digital experiences with{" "}
            <span className="gradient-text block mt-2">
              {text}
              <span className="blinking-cursor">|</span>
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            I build responsive, performant web applications using React,
            Next.js, and modern front-end tooling — turning ideas into polished
            products.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Button href="/projects" size="lg">
              View Projects
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch <ArrowRight size={18} />
            </Button>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.2}
          direction="left"
          className="md:w-1/2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary opacity-30 blur-2xl scale-110" />
            <Image
              src="/mahmoud1.png"
              alt="Mahmoud Hussien"
              width={480}
              height={480}
              priority
              className="relative rounded-3xl shadow-2xl ring-1 ring-border"
            />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
