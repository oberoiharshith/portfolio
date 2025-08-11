
import { useEffect } from 'react';
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
        <nav className="max-w-6xl mx-auto flex justify-center items-center py-4 px-4">
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#home" className="text-gray-600 hover:text-[#cc0033] transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-[#cc0033] transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-[#cc0033] transition-colors">Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-[#cc0033] transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-[#cc0033] transition-colors">Projects</a>
            <a href="#education" className="text-gray-600 hover:text-[#cc0033] transition-colors">Education</a>
            <a href="#certifications" className="text-gray-600 hover:text-[#cc0033] transition-colors">Certifications</a>
            <a href="#contact" className="text-gray-600 hover:text-[#cc0033] transition-colors">Contact</a>
          </div>
          
          <div className="md:hidden flex space-x-4 text-xs font-medium overflow-x-auto">
            <a href="#home" className="text-gray-600 hover:text-[#cc0033] whitespace-nowrap">Home</a>
            <a href="#about" className="text-gray-600 hover:text-[#cc0033] whitespace-nowrap">About</a>
            <a href="#skills" className="text-gray-600 hover:text-[#cc0033] whitespace-nowrap">Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-[#cc0033] whitespace-nowrap">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-[#cc0033] whitespace-nowrap">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-[#cc0033] whitespace-nowrap">Contact</a>
          </div>
        </nav>
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
