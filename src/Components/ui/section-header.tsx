"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  variant?: "default" | "light";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  variant = "default",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isLight = variant === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("max-w-3xl mb-16", alignClass)}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-sm font-semibold uppercase tracking-widest mb-3",
            isLight ? "text-secondary" : "text-secondary"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-5xl font-bold leading-tight",
          isLight ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "w-20 h-1 rounded-full mt-4 mb-4",
          align === "center" ? "mx-auto" : "",
          "bg-gradient-to-r from-primary via-accent to-secondary"
        )}
      />
      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            isLight ? "text-white/75" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
