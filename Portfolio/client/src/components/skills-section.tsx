import { useQuery } from "@tanstack/react-query";
import { Server, Palette, Database, Bolt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Skill } from "@shared/schema";

export default function SkillsSection() {
  const { data: skills = [], isLoading } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
  });

  const skillCategories = [
    {
      id: "backend",
      name: "Backend",
      icon: Server,
      bgColor: "bg-red-100",
      iconColor: "text-red-500",
      barColor: "bg-red-500",
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: Palette,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      barColor: "bg-blue-500",
    },
    {
      id: "database",
      name: "Database",
      icon: Database,
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      barColor: "bg-green-500",
    },
    {
      id: "tools",
      name: "Bolt & DevOps",
      icon: Bolt,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
      barColor: "bg-purple-500",
    },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  if (isLoading) {
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-slate-200 rounded-xl mx-auto mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded mb-6 mx-auto w-20"></div>
                  <div className="space-y-4">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="space-y-2">
                        <div className="flex justify-between">
                          <div className="h-3 bg-slate-200 rounded w-16"></div>
                          <div className="h-3 bg-slate-200 rounded w-8"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const categorySkills = getSkillsByCategory(category.id);
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.id} 
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                  </div>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.id} className="skill-item">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                          <span className="text-sm text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className={`${category.barColor} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
