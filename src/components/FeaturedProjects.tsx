
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Lang2Query",
    description: "Fine-tunes Mistral-7B with LoRA, RAG, and FAISS to convert natural-language questions into executable SQL for analytics teams.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    tech: ["Python", "RAG", "Docker", "Mistral-7B"],
    links: {
      code: "https://github.com/oberoiharshith/Lang2Query"
    }
  },
  {
    title: "SignalSense",
    description: "Machine-learning trading framework that evaluates time-series models, applies rolling risk controls, and rigorously validates strategies through back- and forward-testing.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
    tech: ["PySpark", "Kafka", "Azure", "XGBoost"],
    links: {
      code: "https://github.com/oberoiharshith/SignalSense"
    }
  },
  {
    title: "OptiGrade",
    description: "End-to-end pipeline for predicting student performance. Combines ensemble regressors, hyper-parameter tuning, and automated CI/CD to an AWS Beanstalk endpoint.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&h=300&fit=crop",
    tech: ["spaCy", "NLTK", "Flask", "PostgreSQL"],
    links: {
      code: "https://github.com/oberoiharshith/OptiGrade"
    }
  },
  {
    title: "TweetPrime",
    description: "Lightweight analytics stack that ingests tweets, stores them across relational, document, and graph databases, then serves low-latency insights through a FastAPI layer.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    tech: ["BERT", "PyTorch", "FastAPI", "Redis"],
    links: {
      code: "https://github.com/oberoiharshith/TweetPrime"
    }
  },
  {
    title: "SocioCrime",
    description: "Research project using national survey data to uncover how socioeconomic factors influence crime-reporting behavior with interpretable regression and ML models.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop",
    tech: ["Apache Airflow", "Docker", "Terraform", "Python"],
    links: {
      code: "https://github.com/oberoiharshith/Socioeconomic-Dynamics-of-Crime-Reporting-"
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
                  <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
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
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs"
                      onClick={() => window.open(project.links.code, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code ↗
                    </Button>
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
