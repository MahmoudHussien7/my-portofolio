"use client";
import Image from "next/image";
import { FaReact } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section className="flex flex-col px-8 md:px-16 py-28 max-w-[1440px] mx-auto bg-transparent">
      {/* Grid Layout */}
      <div className="flex flex-col md:flex-row gap-16 items-center w-full">
        {/* Left Side - Heading & Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <span className="text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
            Innovative
          </span>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mt-4 leading-tight">
            Expert Front-End Development Skills at Your Service
          </h2>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Mahmoud Hussein specializes in crafting seamless user experiences
            through his expertise in HTML, CSS, JavaScript, and React.js. His
            passion for front-end development drives him to create visually
            appealing and highly functional websites. With a keen eye for
            detail, Mahmoud ensures that every project meets the highest
            standards of quality.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex space-x-6 justify-center md:justify-start">
            <a
              href="#learn-more"
              className="px-6 py-3 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition"
            >
              Learn More
            </a>
            <a
              href="contact"
              className="px-6 py-3 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-lg text-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition flex items-center gap-2"
            >
              Contact <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        {/* Right Side - Image with React Logo Overlay */}
        <div className="relative md:w-1/2 flex justify-center">
          {/* React Icon Overlay */}
          <FaReact
            className="text-blue-500 dark:text-blue-400 opacity-80 animate-spin-slow"
            style={{
              width: "220px",
              height: "220px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
