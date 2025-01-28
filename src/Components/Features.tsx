// src/components/Features.tsx
import { Code, Brush, Smartphone, Rocket } from "lucide-react"; // Import icons

const features = [
  {
    icon: <Code size={40} className="text-blue-600" />,
    title: "Web Development",
    description:
      "Building responsive and modern web applications using the latest technologies.",
  },
  {
    icon: <Brush size={40} className="text-blue-600" />,
    title: "UI/UX Design",
    description:
      "Crafting user-friendly and visually appealing interfaces for better experiences.",
  },
  {
    icon: <Smartphone size={40} className="text-blue-600" />,
    title: "Mobile Friendly",
    description:
      "Ensuring seamless performance across all devices and screen sizes.",
  },
  {
    icon: <Rocket size={40} className="text-blue-600" />,
    title: "Performance Optimization",
    description:
      "Improving website speed and performance for a smooth user experience.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="  flex flex-col items-center px-8 md:px-16 py-28 max-w-[1440px] mx-auto">
      {/* Section Title */}
      <div className="text-center w-{568px}">
        <h6 className="">My Expertise</h6>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          Transforming Ideas into Digital Experiences.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Here are some of the areas I specialize in.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
