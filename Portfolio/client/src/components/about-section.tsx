import { Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and thoughtful design.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">My Journey</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                With over 5 years of experience in full-stack development, I've had the privilege of working with 
                startups and established companies to bring their digital visions to life. My expertise spans from 
                backend architecture to frontend user experiences.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm particularly passionate about Laravel's elegant syntax and React's component-based architecture, 
                which allows me to build maintainable and scalable applications efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">25+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Professional workspace image placeholder */}
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <Code className="w-24 h-24 text-slate-400" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-2xl flex items-center justify-center text-white">
              <Code className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
