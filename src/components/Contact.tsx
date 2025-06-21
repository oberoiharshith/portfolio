
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
          
          <div id="contact" className="space-y-8 mb-16">
            {/* Quick Email Option */}
            <div className="text-center space-y-4">
              <button 
                onClick={handleEmailClick}
                className="inline-block rounded-xl bg-[#cc0033] px-6 py-3 font-semibold text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Email Me Directly
              </button>
              <p className="text-gray-600 text-sm">Or use the form below</p>
            </div>

            {/* Contact Form */}
            <form 
              action="https://formsubmit.co/oberoiharshith@gmail.com" 
              method="POST" 
              className="max-w-md mx-auto space-y-4"
            >
              {/* FormSubmit Configuration */}
              <input type="text" name="_honey" style={{display: 'none'}} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Inquiry 📬" />
              
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

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-6">
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
