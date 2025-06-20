
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-gray-900 mb-8">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            Open to remote opportunities worldwide • Ready to make an impact
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-rutgers-red hover:bg-rutgers-red-dark text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'mailto:harshith.oberoi@example.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-rutgers-red text-rutgers-red hover:bg-rutgers-red hover:text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://linkedin.com/in/harshithoberoii', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-rutgers-red text-rutgers-red hover:bg-rutgers-red hover:text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/oberoiharshith', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
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
