
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
  {
    title: "Lang2Query",
    description: "Natural-language → SQL generator Fine-tuned Mistral-7B with LoRA & FAISS; +35% ROUGE-1 vs baseline.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    tech: ["Python", "RAG", "Docker", "Mistral-7B"],
    metric: "+35% ROUGE-1",
    links: {
      code: "https://github.com/oberoiharshith/Lang2Query",
      blog: "#",
      demo: "#"
    }
  },
  {
    title: "SignalSense",
    description: "Real-time anomaly detection system processing 10M+ telemetry events daily with 99.7% SLA.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    tech: ["PySpark", "Kafka", "Azure", "XGBoost"],
    metric: "99.7% SLA",
    links: {
      code: "https://github.com/oberoiharshith/SignalSense",
      blog: "#"
    }
  },
  {
    title: "TweetPrime",
    description: "Sentiment analysis engine with transformer models achieving 92% accuracy on financial tweets.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    tech: ["BERT", "PyTorch", "FastAPI", "Redis"],
    metric: "92% accuracy",
    links: {
      code: "https://github.com/oberoiharshith/TweetPrime",
      blog: "#",
      demo: "#"
    }
  },
  {
    title: "OptiGrade",
    description: "Automated essay scoring system using NLP techniques, deployed for 500+ students.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&h=300&fit=crop",
    tech: ["spaCy", "NLTK", "Flask", "PostgreSQL"],
    metric: "500+ students",
    links: {
      code: "https://github.com/oberoiharshith/OptiGrade",
      demo: "#"
    }
  },
  {
    title: "Socioeconomic Dynamics of Crime",
    description: "Multi-cloud data pipeline orchestrating ETL workflows across AWS, Azure, and GCP.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop",
    tech: ["Apache Airflow", "Docker", "Terraform", "Python"],
    metric: "60% faster processing",
    links: {
      code: "https://github.com/oberoiharshith/Socioeconomic-Dynamics-of-Crime-Reporting-",
      demo: "#"
    }
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-epilogue font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="bg-rutgers-red/10 text-rutgers-red">
                      {project.metric}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.links.code && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-xs"
                        onClick={() => window.open(project.links.code, '_blank')}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    )}
                    {project.links.blog && (
                      <Button size="sm" variant="outline" className="text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Blog
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button size="sm" variant="outline" className="text-xs">
                        <Play className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
