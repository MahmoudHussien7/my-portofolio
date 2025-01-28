import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <main className="px-8 md:px-16 py-28 max-w-[1440px] mx-auto">
      <h1 className="text-5xl font-bold text-center">Projects</h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Explore some of my featured projects.
      </p>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="block group"
          >
            <div className="relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
