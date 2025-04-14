import Image from "next/image";
import { useState, useEffect } from "react";

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
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        setSpeed(50); // Faster delete speed
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % strings.length); // Move to the next string
        setSpeed(150); // Reset speed
      }
    };

    const typingInterval = setInterval(handleTyping, speed);
    return () => clearInterval(typingInterval);
  }, [text, isDeleting, speed, strings, index]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 max-w-[1440px] mx-auto">
      {/* Left Side: Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to The Portfolio of{" "}
          <span className="text-blue-600 dark:text-blue-600">{text}</span>
          <span className="blinking-cursor">|</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I build amazing web experiences using modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href="projects"
            className="px-6 py-3 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition"
          >
            View Projects
          </a>
          <a
            href="contact"
            className="px-6 py-3 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-lg text-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition flex items-center gap-2"
          >
            Contact <span className="text-xl">→</span>
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <Image
          src="/My-Hero.png" // Replace with actual image
          alt="Hero Image"
          width={500}
          height={500}
          className="animate-spin-roll "
        />
      </div>
    </section>
  );
};

export default Hero;
