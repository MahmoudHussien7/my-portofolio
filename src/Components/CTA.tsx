// src/components/CTA.tsx

const CTA: React.FC = () => {
  return (
    <section className="px-8 md:px-16 py-28 max-w-[1440px] mx-auto text-center bg-gray-900 text-white rounded-lg">
      {/* CTA Heading */}
      <h2 className="text-4xl md:text-5xl font-bold">
        Ready to Elevate Your Project?
      </h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
        Let’s build something amazing together. Get in touch today and let’s
        discuss your project!
      </p>

      {/* CTA Button */}
      <div className="mt-6">
        <a
          href="#contact"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-500 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTA;
