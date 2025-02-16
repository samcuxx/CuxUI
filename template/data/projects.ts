import { Project } from "@/data/projects";

export const projects: Project[] = [
  {
    id: "1",
    title: "Modern E-commerce Platform",
    description:
      "A full-stack e-commerce application with Next.js, TypeScript, and Stripe integration.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "TypeScript", "Stripe", "TailwindCSS"],
    link: "https://ecommerce-demo.com",
    github: "https://github.com/username/ecommerce",
    featured: true,
  },
  {
    id: "2",
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media management.",
    image: "/projects/dashboard.png",
    tags: ["React", "Firebase", "ChartJS", "Material-UI"],
    link: "https://dashboard-demo.com",
    github: "https://github.com/username/dashboard",
    featured: true,
  },
  {
    id: "3",
    title: "Travel Companion App",
    description:
      "Mobile app for travelers with offline maps and recommendations.",
    image: "/projects/travel.png",
    tags: ["React Native", "Maps", "MongoDB", "Node.js"],
    link: "https://travel-app.com",
    github: "https://github.com/username/travel-app",
    featured: false,
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Modern portfolio website with dark mode and animations.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://portfolio.com",
    github: "https://github.com/username/portfolio",
    featured: false,
  },
  {
    id: "5",
    title: "Task Management UI",
    description: "Beautiful and intuitive task management interface design.",
    image: "/projects/task-ui.png",
    tags: ["Figma", "UI Design", "Prototyping"],
    link: "https://figma.com/file/...",
    github: "https://github.com/username/task-ui",
    featured: false,
  },
];
