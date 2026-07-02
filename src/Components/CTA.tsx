"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Components/ui/button";

const CTA: React.FC = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl px-8 py-16 md:py-20 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#4338ca] to-[#0f766e]" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready to Elevate Your Project?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white/80">
            Let&apos;s build something amazing together. Get in touch and
            let&apos;s discuss your next project.
          </p>
          <div className="mt-8">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-[#1e1b4b] hover:bg-white/90"
            >
              Get Started <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
