import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function HeroSection() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Professional headshot placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-600">JA</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Hi, I'm <span className="text-blue-500">John Anderson</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Full Stack Developer specializing in Laravel, React, and modern web technologies. 
            I build scalable applications that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollTo("projects")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-500 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a 
              href="#" 
              className="text-slate-400 hover:text-blue-500 transition-colors duration-200 hover:transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-blue-500 transition-colors duration-200 hover:transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-blue-500 transition-colors duration-200 hover:transform hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-blue-500 transition-colors duration-200 hover:transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
