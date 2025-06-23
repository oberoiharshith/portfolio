
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
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur z-50">
        <nav className="max-w-full mx-auto flex justify-end space-x-4 py-3 px-6 text-sm font-medium">
          <a href="#home" className="text-gray-600 hover:text-[#cc0033]">Home</a>
          <a href="#about" className="text-gray-600 hover:text-[#cc0033]">About me</a>
          <a href="#skills" className="text-gray-600 hover:text-[#cc0033]">Skills</a>
          <a href="#experience" className="text-gray-600 hover:text-[#cc0033]">Experience</a>
          <a href="#projects" className="text-gray-600 hover:text-[#cc0033]">Projects</a>
          <a href="#education" className="text-gray-600 hover:text-[#cc0033]">Education</a>
          <a href="#certifications" className="text-gray-600 hover:text-[#cc0033]">Certifications</a>
          <a href="#contact" className="text-gray-600 hover:text-[#cc0033]">Contact</a>
        </nav>
      </header>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Education />
      <Certifications />
      <Teaching />
      <Testimonials />
      <ValueBring />
      <Contact />
    </div>
  );
};

export default Index;
