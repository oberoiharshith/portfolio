
import { Button } from '@/components/ui/button';
import { ExternalLink, Youtube, BookOpen } from 'lucide-react';

const teachingItems = [
  {
    title: "Rutgers Lecturer",
    description: "Teaching graduate-level Data Science courses to 50+ students with focus on practical ML applications.",
    icon: "🎓",
    type: "Teaching"
  },
  {
    title: "YouTube Tutorials",
    description: "Bite-sized machine learning tutorials with data science project walkthroughs and coding best practices.",
    icon: "📺",
    type: "Content",
    link: "https://www.youtube.com/playlist?list=PLjZSJ3VhEZRJxMoHkcSCcescvi3uxhVce"
  },
  {
    title: "Tech Blog",
    description: "Deep-dive articles on MLOps, data engineering, and AI implementation best practices.",
    icon: "📝",
    type: "Writing",
    link: "https://medium.com/@harshith_oberoi"
  }
];

const Teaching = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Teaching & Community
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teachingItems.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">
                  {item.icon}
                </div>
                
                <div className="mb-2">
                  <span className="text-xs font-semibold text-rutgers-red uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {item.link && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-rutgers-red border-rutgers-red hover:bg-rutgers-red hover:text-white"
                    onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                  >
                    {item.type === 'Content' ? (
                      <Youtube className="w-4 h-4 mr-1" />
                    ) : (
                      <BookOpen className="w-4 h-4 mr-1" />
                    )}
                    View {item.type}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
