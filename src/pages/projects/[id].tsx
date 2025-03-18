import { useRouter } from "next/router";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find((proj) => proj.id === id);

  if (!project) return <p className="text-center text-xl">Project Not Found</p>;

  return (
    <main className="px-8 md:px-16 py-28 max-w-[1440px] mx-auto">
      <h1 className="text-5xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{project.description}</p>

      {/* Project Image */}
      <div className="mt-8">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2  text-gray-700">{project.details}</p>
        <button
          onClick={() => window.open(project.Live_demo, "_blank")}
          className="px-6 py-3 mt-10 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition"
        >
          Live demo
        </button>
        <button
          onClick={() => window.open(project.source_code, "_blank")}
          className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-500 transition"
        >
          Source Code
        </button>
      </div>

      {/* Back to Projects Button */}
      <div className="mt-10">
        <a href="/projects">
          <a className="px-6 py-3 bg-gray-900 text-white rounded-lg text-lg font-medium hover:bg-gray-700 transition">
            Back to Projects
          </a>
        </a>
      </div>
    </main>
  );
};

export default ProjectPage;
