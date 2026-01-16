export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Motorcycle Rental API",
    description:
      "Backend API built with .NET following Clean Architecture principles, focusing on separation of concerns and testability.",
    stack: [".NET", "Entity Framework", "PostgreSQL", "Docker", "NUnit"],
    link: "https://github.com/lucasolvv/rental-system",
  },
];
