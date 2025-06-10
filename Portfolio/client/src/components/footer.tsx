import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">John Anderson</h3>
            <p className="text-slate-400">Full Stack Developer</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 John Anderson. All rights reserved. Built with React & Express.js.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
