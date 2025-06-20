
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-epilogue font-bold text-gray-900 mb-6">
          Turning Data into{' '}
          <span className="text-rutgers-red">Decisions</span>—Fast.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-inter">
          Machine Learning • Data Engineering • Business Impact
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-rutgers-red hover:bg-rutgers-red-dark text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume (PDF)
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-rutgers-red text-rutgers-red hover:bg-rutgers-red hover:text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = 'mailto:harshith.oberoi@example.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
