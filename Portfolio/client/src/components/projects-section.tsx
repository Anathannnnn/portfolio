import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "laravel", label: "Laravel" },
    { id: "react", label: "React" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const getProjectIcon = (category: string) => {
    switch (category) {
      case "laravel":
        return "🛍️";
      case "react":
        return "📋";
      case "fullstack":
        return "🏠";
      default:
        return "💻";
    }
  };

  const getCategoryColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Laravel": "bg-red-100 text-red-600",
      "Vue.js": "bg-green-100 text-green-600",
      "React": "bg-blue-100 text-blue-600",
      "MySQL": "bg-blue-100 text-blue-600",
      "PostgreSQL": "bg-green-100 text-green-600",
      "Firebase": "bg-yellow-100 text-yellow-600",
      "Redux": "bg-purple-100 text-purple-600",
      "Chart.js": "bg-green-100 text-green-600",
      "API Integration": "bg-purple-100 text-purple-600",
      "Maps API": "bg-green-100 text-green-600",
      "D3.js": "bg-yellow-100 text-yellow-600",
      "Node.js": "bg-purple-100 text-purple-600",
      "Blade": "bg-orange-100 text-orange-600",
    };
    return colors[tech] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications built with modern technologies.
          </p>
        </div>
        
        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-blue-500 text-white"
                  : "bg-white text-slate-600 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-video bg-slate-200"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 bg-slate-200 rounded mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
                    <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-4xl">{getProjectIcon(project.category)}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className={`px-3 py-1 text-xs rounded-full ${getCategoryColor(tech)}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.demoUrl || "#"} 
                      className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl || "#"} 
                      className="text-slate-500 hover:text-slate-700 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
