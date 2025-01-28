// src/components/Testimonials.tsx
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <section className="px-8 md:px-16 py-28 max-w-[1440px] mx-auto text-center">
      {/* Company Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/webflow-logo.png" // Replace with actual logo
          alt="Webflow"
          width={120}
          height={40}
        />
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-2xl font-semibold text-gray-900 leading-relaxed max-w-3xl mx-auto">
        "Mahmoud's attention to detail and creativity transformed our project
        beyond expectations. His ability to meet tight deadlines while
        maintaining quality is truly commendable."
      </blockquote>

      {/* Profile Image & Name */}
      <div className="mt-8 flex flex-col items-center">
        <Image
          src="/testimonial-user.png" // Replace with actual profile image
          alt="Sarah Johnson"
          width={80}
          height={80}
          className="rounded-full"
        />
        <h4 className="mt-4 text-lg font-medium text-gray-800">
          Sarah Johnson
        </h4>
        <p className="text-gray-600">Project Manager, TechCorp</p>
      </div>
    </section>
  );
};

export default Testimonials;
