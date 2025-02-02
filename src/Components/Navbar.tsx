"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
interface NavbarProps {
  toggleDarkMode: () => void;

  darkMode: boolean;
}
const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme as "light" | "dark");

    // Apply theme to <html> tag
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="px-8 md:px-16 py-6 max-w-[1440px] mx-auto flex items-center justify-between border-b border-gray-300 dark:border-gray-700">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold text-gray-800 dark:text-gray-200 italic font-mono"
      >
        MyPortfolio
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
        <li>
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500 transition-all">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-500 transition-all">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500 transition-all">
            Contact
          </Link>
        </li>
      </ul>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
        aria-label="Toggle Dark Mode"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ml-4">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
