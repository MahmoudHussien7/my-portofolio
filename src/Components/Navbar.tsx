"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const CV_PATH = "/Mahmoud-Hussein-CV.pdf";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);
  const [logoExpanded, setLogoExpanded] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme as "light" | "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="px-6 md:px-16 py-4 max-w-[1440px] mx-auto flex items-center justify-between">
        <Link
          href="/"
          onMouseEnter={() => setLogoExpanded(true)}
          onMouseLeave={() => setLogoExpanded(false)}
          onFocus={() => setLogoExpanded(true)}
          onBlur={() => setLogoExpanded(false)}
          className="relative flex items-center overflow-hidden"
          aria-label={logoExpanded ? "Mahmoud Hussein" : "Mahmoud Hussein — home"}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex items-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {logoExpanded ? (
                <motion.span
                  key="full"
                  initial={{ opacity: 0, x: -12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg font-bold font-mono gradient-text tracking-tight whitespace-nowrap"
                >
                  Mahmoud Hussein
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-secondary"
                  >
                    .
                  </motion.span>
                </motion.span>
              ) : (
                <motion.span
                  key="short"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25 }}
                  className="text-lg font-bold font-mono gradient-text tracking-tight"
                >
                  MH
                  <span className="text-secondary">.</span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted hover:bg-surface-elevated"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-primary/10 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.a
            href={CV_PATH}
            download="Mahmoud-Hussein-CV.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary-hover transition-colors shadow-sm"
          >
            <Download size={16} />
            Download CV
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-border bg-surface-elevated text-foreground hover:border-primary/50 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl border border-border bg-surface-elevated"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-b border-border bg-surface/95 backdrop-blur-lg"
          >
            <ul className="flex flex-col items-center gap-1 py-4 px-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted hover:text-foreground hover:bg-surface-elevated"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="w-full pt-2"
              >
                <a
                  href={CV_PATH}
                  download="Mahmoud-Hussein-CV.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary-hover transition-colors"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
