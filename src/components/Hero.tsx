
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, Youtube } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-epilogue font-bold text-gray-900 mb-6">
          Turning Data into{' '}
          <span className="text-rutgers-red">Decisions</span>—Fast.
        </h1>
        
        <h3 className="text-xl md:text-2xl text-gray-600 mb-8 font-inter">
          Machine Learning • Data Science • Business Impact
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-rutgers-red hover:bg-rutgers-red-dark text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.open('/assets/Harshith_Oberoi_Resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Résumé
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-rutgers-red text-rutgers-red hover:bg-rutgers-red hover:text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            <Mail className="mr-2 h-5 w-5" />
            Let's Talk
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/oberoiharshith" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-rutgers-red transition-colors duration-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/harshith-oberoi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-rutgers-red transition-colors duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://www.youtube.com/playlist?list=PLjZSJ3VhEZRJxMoHkcSCcescvi3uxhVce" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-rutgers-red transition-colors duration-200"
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
