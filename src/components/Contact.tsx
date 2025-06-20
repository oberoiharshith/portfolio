
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
          
          <form 
            id="contact" 
            action="https://formsubmit.co/oberoiharshith@gmail.com" 
            method="POST" 
            className="max-w-md mx-auto space-y-4 mb-16"
          >
            {/* Honeypot to stop spam bots */}
            <input type="text" name="_honey" style={{display:'none'}} />
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Custom email subject */}
            <input type="hidden" name="_subject" value="New Portfolio Inquiry 📬" />

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="name">Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-rutgers-red focus:border-transparent outline-none transition-all" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-rutgers-red focus:border-transparent outline-none transition-all" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-rutgers-red focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full rounded-xl bg-[#cc0033] p-3 font-semibold text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-rutgers-red hover:bg-rutgers-red-dark text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'mailto:oberoiharshith@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-rutgers-red text-rutgers-red hover:bg-rutgers-red hover:text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/harshith-oberoi/', '_blank', 'noopener,noreferrer')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-rutgers-red text-rutgers-red hover:bg-rutgers-red hover:text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/oberoiharshith', '_blank', 'noopener,noreferrer')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-rutgers-red text-rutgers-red hover:bg-rutgers-red hover:text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.youtube.com/playlist?list=PLjZSJ3VhEZRJxMoHkcSCcescvi3uxhVce', '_blank', 'noopener,noreferrer')}
            >
              <Youtube className="mr-2 h-5 w-5" />
              YouTube
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
