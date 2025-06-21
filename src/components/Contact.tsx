
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const form = document.getElementById('contact') as HTMLFormElement;
    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      const formData = new FormData(form);
      
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData
        });
        
        if (response.status === 200) {
          form.classList.add('hidden');
          const thankYou = document.getElementById('thank-you');
          if (thankYou) {
            thankYou.classList.remove('hidden');
          }
          form.reset();
        } else {
          alert('Please try again later.');
        }
      } catch (error) {
        alert('Please try again later.');
      }
    };

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-gray-900 mb-8">
            Let's Build Something Amazing
          </h2>
          
          <div className="text-center mb-6 space-x-4">
            <a href="mailto:oberoiharshith@gmail.com" className="underline text-gray-700 hover:text-rutgers-red">
              oberoiharshith@gmail.com
            </a>
            <span className="text-gray-500">|</span>
            <a 
              href="https://www.linkedin.com/in/harshith-oberoi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline text-gray-700 hover:text-rutgers-red"
            >
              LinkedIn
            </a>
          </div>

          <form 
            id="contact" 
            action="https://getform.io/f/amdmrggb" 
            method="POST" 
            className="max-w-md mx-auto space-y-4 mb-8"
          >
            <input type="text" name="_gotcha" style={{display: 'none'}} />
            
            <input 
              type="text" 
              name="name" 
              placeholder="Your name" 
              required 
              className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-500 focus:border-rutgers-red focus:outline-none"
            />
            
            <input 
              type="email" 
              name="email" 
              placeholder="your@email.com" 
              required 
              className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-500 focus:border-rutgers-red focus:outline-none"
            />
            
            <textarea 
              name="message" 
              placeholder="How can I help you?" 
              rows={4} 
              required 
              className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-500 focus:border-rutgers-red focus:outline-none resize-none"
            />
            
            <button 
              type="submit" 
              className="w-full rounded-xl bg-[#cc0033] py-3 font-semibold text-white hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          <div id="thank-you" className="hidden mt-6 text-center text-green-600 font-medium">
            Thank you — I'll reply soon!
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
