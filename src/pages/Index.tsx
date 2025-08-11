
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import ValueBring from '../components/ValueBring';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Teaching from '../components/Teaching';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Education from '../components/Education';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-sm font-medium mx-auto">
            <a href="#home" className="text-gray-600 hover:text-[#cc0033] transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-[#cc0033] transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-[#cc0033] transition-colors">Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-[#cc0033] transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-[#cc0033] transition-colors">Projects</a>
            <a href="#education" className="text-gray-600 hover:text-[#cc0033] transition-colors">Education</a>
            <a href="#certifications" className="text-gray-600 hover:text-[#cc0033] transition-colors">Certifications</a>
            <a href="#contact" className="text-gray-600 hover:text-[#cc0033] transition-colors">Contact</a>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-lg font-semibold text-gray-800">Harshith Oberoi</span>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#cc0033] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#education', label: 'Education' },
                { href: '#certifications', label: 'Certifications' },
                { href: '#contact', label: 'Contact' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="block text-gray-600 hover:text-[#cc0033] transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
      <Hero />
      <About />
      <Testimonials />
      <ValueBring />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Education />
      <Certifications />
      <Teaching />
      <Contact />
    </div>
  );
};

export default Index;
