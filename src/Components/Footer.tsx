"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/Components/ui/motion";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://aura-opal.vercel.app/",
    label: "Blog",
    external: true,
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/mahmoud-hussien-7a5088349/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/MahmoudHussien7",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://x.com/Mahmouudhussien",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/mahmouudhussien1/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/mahmoud.hessen11/",
    icon: Facebook,
    label: "Facebook",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="section-container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FadeIn direction="up">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-mono gradient-text">
                Mahmoud Hussein
              </h2>
              <p className="text-muted leading-relaxed max-w-xs">
                Front-End Developer crafting responsive, performant web
                experiences with React, Next.js, and TypeScript.
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:mahmoudhu37@gmail.com"
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  mahmoudhu37@gmail.com
                </a>
                <a
                  href="tel:+201026376434"
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  +20 102 637 6434
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="up">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl border border-border bg-surface-elevated text-muted hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-border text-sm text-muted">
          <p>© {new Date().getFullYear()} Mahmoud Hussein. All rights reserved.</p>
          <p className="text-xs">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
