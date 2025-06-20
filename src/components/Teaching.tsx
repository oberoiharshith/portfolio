
import { Badge } from '@/components/ui/badge';
import { Users, Youtube } from 'lucide-react';

const Teaching = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Teaching & Community
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-rutgers-red mr-3" />
                <div>
                  <h3 className="text-xl font-epilogue font-bold text-gray-900">
                    Rutgers University
                  </h3>
                  <p className="text-gray-600">Lecturer & TA – Intro to Data Science</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Mentored 50+ students with 40+ Python mini-projects; course scores rose markedly
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Jan 2025 – May 2025</Badge>
                <Badge variant="outline" className="text-xs">Python</Badge>
                <Badge variant="outline" className="text-xs">Data Science</Badge>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll">
              <div className="flex items-center mb-4">
                <Youtube className="h-8 w-8 text-rutgers-red mr-3" />
                <div>
                  <h3 className="text-xl font-epilogue font-bold text-gray-900">
                    YouTube Channel
                  </h3>
                  <p className="text-gray-600">Data Science Tutorials</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Educational content covering machine learning concepts, Python tutorials, and data science best practices
              </p>
              <a 
                href="https://www.youtube.com/playlist?list=PLjZSJ3VhEZRJxMoHkcSCcescvi3uxhVce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-rutgers-red hover:text-rutgers-red-dark transition-colors"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Watch Playlist ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
