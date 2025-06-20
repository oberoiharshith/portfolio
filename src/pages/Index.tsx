
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
      <Hero />
      <About />
      <FeaturedProjects />
      <Experience />
      <ValueBring />
      <Skills />
      <Certifications />
      <Teaching />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
