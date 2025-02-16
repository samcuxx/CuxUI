export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "SamComponents",
    description:
      "A modern React component library built with Next.js and TailwindCSS.",
    image: "/projects/samcomponents.png",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    link: "https://samcomponents.vercel.app",
    github: "https://github.com/samcuxx/samcomponents",
    featured: true,
  },
  {
    id: "2",
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    image: "/projects/portfolio.png",
    tags: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://samcux.dev",
    github: "https://github.com/samcuxx/portfolio",
    featured: true,
  },
  {
    id: "3",
    title: "Blog Platform",
    description:
      "A full-stack blog platform with user authentication and markdown support.",
    image: "/projects/blog.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://blog.samcux.dev",
    github: "https://github.com/samcuxx/blog",
    featured: false,
  },
];
