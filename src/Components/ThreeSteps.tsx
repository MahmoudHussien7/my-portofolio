// components/ThreeStepsSection.tsx
import React from "react";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="text-blue-700 font-bold text-9xl mb-2 leading-none">
        {number}
      </div>
      <h3 className="text-white text-3xl font-medium mb-4">{title}</h3>
      <p className="text-white/90 text-lg leading-relaxed">{description}</p>
    </div>
  );
};

const ThreeStepsSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Design",
      description:
        "The process begins with Sketch & Design, starting with an initial consultation to discuss goals and preferences, followed by creating wireframes and design mockups to visualize the site.",
    },
    {
      number: "02",
      title: "Development",
      description:
        "In the Development phase, designs are turned into a functional website while setting up the server and database, ensuring responsiveness and mobile-friendliness.",
    },
    {
      number: "03",
      title: "Deployment",
      description:
        "Finally, during Deployment, thorough testing is conducted for functionality and compatibility, the site is launched, and ongoing support and maintenance are provided to keep it updated.",
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-gradient-to-r from-slate-800 from-40% to-purple-500 to-40%






"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-white">
          Only Three
          <span className="font-bold text-blue-700"> D's</span> To Succes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepsSection;
