import { projects } from "@/src/data/projects";
import { ProjectCard } from "@/src/app/components/ProjectCard";

export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>

      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
