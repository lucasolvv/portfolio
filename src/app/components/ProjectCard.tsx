import { Project } from "@/src/data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="border border-neutral-800 rounded-md p-4 space-y-2">
      <h2 className="text-lg font-medium">{project.title}</h2>

      <p className="text-neutral-400 text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs text-neutral-300">
        {project.stack.map((tech) => (
          <span key={tech} className="border border-neutral-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
