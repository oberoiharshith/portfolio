
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-gray-900 mb-8">
            Let's Build Something Amazing
          </h2>
          
          <div id="contact" className="text-center space-y-6 mb-16">
            <a 
              href="mailto:oberoiharshith@gmail.com"
              className="inline-block rounded-xl bg-[#cc0033] px-6 py-3 font-semibold text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Email Me
            </a>

            <div className="mt-4 flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/harshith-oberoi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-rutgers-red transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/oberoiharshith" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-rutgers-red transition-colors duration-200 flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a 
                href="https://www.youtube.com/playlist?list=PLjZSJ3VhEZRJxMoHkcSCcescvi3uxhVce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-rutgers-red transition-colors duration-200 flex items-center gap-2"
              >
                <Youtube className="h-5 w-5" />
                YouTube
              </a>
            </div>
          </div>
          
          <footer className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Harshith Oberoi. Built with React, Tailwind CSS, and lots of ☕
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
