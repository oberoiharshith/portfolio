
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Youtube } from 'lucide-react';

const Contact = () => {
  const handleEmailClick = () => {
    window.open('mailto:oberoiharshith@gmail.com', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-gray-900 mb-8">
            Let's Build Something Amazing
          </h2>
          
          <form 
            id="contact" 
            action="https://getform.io/f/REPLACE_WITH_YOUR_ENDPOINT" 
            method="POST" 
            className="max-w-md mx-auto space-y-4 mb-8"
          >
            {/* Honeypot */}
            <input type="text" name="l_name" style={{display: 'none'}} />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                Name
              </label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required
                className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-500 focus:border-rutgers-red focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required
                className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-500 focus:border-rutgers-red focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required
                className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-500 focus:border-rutgers-red focus:outline-none resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <button 
              type="submit" 
              className="w-full rounded-xl bg-[#cc0033] p-3 font-semibold text-white hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-4 flex justify-center gap-4 text-gray-600">
            <a 
              href="mailto:oberoiharshith@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-rutgers-red transition-colors"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/harshith-oberoi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-rutgers-red transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/oberoiharshith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-rutgers-red transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.youtube.com/playlist?list=PLjZSJ3VhEZRJxMoHkcSCcescvi3uxhVce" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-rutgers-red transition-colors"
            >
              YouTube
            </a>
          </div>
          
          <footer className="border-t border-gray-200 pt-8 mt-8">
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
