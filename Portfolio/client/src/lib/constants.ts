export const PORTFOLIO_DATA = {
  name: "John Anderson",
  title: "Full Stack Developer",
  description: "Full Stack Developer specializing in Laravel, React, and modern web technologies. I build scalable applications that solve real-world problems.",
  contact: {
    email: "john.anderson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  },
  stats: {
    projects: "50+",
    clients: "25+",
  },
  social: {
    github: "#",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
};

export const CATEGORIES = {
  BACKEND: "backend",
  FRONTEND: "frontend",
  DATABASE: "database",
  TOOLS: "tools",
} as const;

export const PROJECT_CATEGORIES = {
  ALL: "all",
  LARAVEL: "laravel",
  REACT: "react",
  FULLSTACK: "fullstack",
} as const;
