import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react"; // Add Sun and Moon icons for theme toggle

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Set theme based on localStorage or default to "light"
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme as "light" | "dark");
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="px-8 md:px-16 py-6 max-w-[1440px] mx-auto flex items-center justify-between border-b border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-gray-200"
        >
          MyPortfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="about" className="hover:text-blue-500 transition-all">
              About
            </a>
          </li>
          <li>
            <a href="projects" className="hover:text-blue-500 transition-all">
              Projects
            </a>
          </li>
          <li>
            <a href="contact" className="hover:text-blue-500 transition-all">
              Contact
            </a>
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#home"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
