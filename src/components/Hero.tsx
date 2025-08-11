
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, Youtube } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.open('mailto:oberoiharshith@gmail.com', '_blank');
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900">
          Harshith Oberoi
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
          Turning Data into Decisions—Fast.
        </h2>
        
        <h3 className="text-xl md:text-2xl text-gray-600 mb-8 font-inter">
          Machine Learning • Data Science • Business Impact
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a 
            href="/portfolio/assets/Harshith_Oberoi_Resume.pdf" 
            download
            className="bg-rutgers-red hover:bg-rutgers-red-dark text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center font-semibold"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
          
          <a 
            href="#contact" 
            className="rounded-xl bg-[#cc0033] px-6 py-3 font-semibold text-white hover:opacity-90 transition-all duration-300 hover:scale-105 inline-flex items-center"
            onClick={scrollToContact}
          >
            <Mail className="mr-2 h-5 w-5" />
            Let's Talk
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="https://github.com/oberoiharshith" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 bg-white/50 hover:bg-white/80 text-gray-700 hover:text-gray-900 transition-all duration-200 text-sm font-medium"
            title="View GitHub Profile"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/harshith-oberoi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 hover:border-blue-300 bg-blue-50/50 hover:bg-blue-50/80 text-blue-700 hover:text-blue-800 transition-all duration-200 text-sm font-medium"
            title="Connect on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a 
            href="https://www.youtube.com/playlist?list=PLjZSJ3VhEZRJxMoHkcSCcescvi3uxhVce" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 hover:border-red-300 bg-red-50/50 hover:bg-red-50/80 text-red-700 hover:text-red-800 transition-all duration-200 text-sm font-medium"
            title="Watch on YouTube"
          >
            <Youtube className="h-4 w-4" />
            <span className="hidden sm:inline">YouTube</span>
          </a>
        </div>

        <div className="animate-bounce">
          <a 
            href="#about" 
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
