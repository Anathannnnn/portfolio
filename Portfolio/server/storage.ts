import { users, projects, skills, contactMessages, type User, type InsertUser, type Project, type InsertProject, type Skill, type InsertSkill, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private skills: Map<number, Skill>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentProjectId: number;
  private currentSkillId: number;
  private currentMessageId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.skills = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.currentSkillId = 1;
    this.currentMessageId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed projects
    const sampleProjects: InsertProject[] = [
      {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with Laravel and Vue.js, featuring payment integration, inventory management, and admin dashboard.",
        category: "laravel",
        technologies: ["Laravel", "Vue.js", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
        imageUrl: "/api/placeholder/600/400",
        featured: true,
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        category: "react",
        technologies: ["React", "Redux", "Firebase"],
        demoUrl: "#",
        githubUrl: "#",
        imageUrl: "/api/placeholder/600/400",
        featured: true,
      },
      {
        title: "Content Management System",
        description: "A powerful CMS built with Laravel, featuring role-based permissions, content scheduling, and SEO optimization tools.",
        category: "laravel",
        technologies: ["Laravel", "Blade", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#",
        imageUrl: "/api/placeholder/600/400",
        featured: true,
      },
      {
        title: "Weather Dashboard",
        description: "A responsive weather dashboard with location-based forecasts, interactive charts, and severe weather alerts.",
        category: "react",
        technologies: ["React", "Chart.js", "API Integration"],
        demoUrl: "#",
        githubUrl: "#",
        imageUrl: "/api/placeholder/600/400",
        featured: false,
      },
      {
        title: "Real Estate Platform",
        description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent management.",
        category: "fullstack",
        technologies: ["Laravel", "React", "Maps API"],
        demoUrl: "#",
        githubUrl: "#",
        imageUrl: "/api/placeholder/600/400",
        featured: true,
      },
      {
        title: "Analytics Dashboard",
        description: "A social media analytics dashboard with real-time data visualization, performance metrics, and automated reporting features.",
        category: "fullstack",
        technologies: ["React", "D3.js", "Node.js"],
        demoUrl: "#",
        githubUrl: "#",
        imageUrl: "/api/placeholder/600/400",
        featured: false,
      },
    ];

    sampleProjects.forEach(project => {
      this.createProject(project);
    });

    // Seed skills
    const sampleSkills: InsertSkill[] = [
      { name: "Laravel", category: "backend", level: 95 },
      { name: "PHP", category: "backend", level: 90 },
      { name: "Node.js", category: "backend", level: 80 },
      { name: "React", category: "frontend", level: 85 },
      { name: "Vue.js", category: "frontend", level: 80 },
      { name: "TypeScript", category: "frontend", level: 75 },
      { name: "MySQL", category: "database", level: 90 },
      { name: "PostgreSQL", category: "database", level: 80 },
      { name: "MongoDB", category: "database", level: 70 },
      { name: "Docker", category: "tools", level: 85 },
      { name: "Git", category: "tools", level: 95 },
      { name: "AWS", category: "tools", level: 75 },
    ];

    sampleSkills.forEach(skill => {
      this.createSkill(skill);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const id = this.currentSkillId++;
    const skill: Skill = { ...insertSkill, id };
    this.skills.set(id, skill);
    return skill;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
