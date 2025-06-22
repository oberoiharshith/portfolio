import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Lang2Query",
    description: "Fine-tunes Mistral-7B with LoRA, RAG, and FAISS to convert plain-language questions into executable SQL.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    tech: ["Python", "LoRA", "FAISS", "Mistral-7B", "Docker"],
    links: {
      code: "https://github.com/oberoiharshith/Lang2Query"
    }
  },
  {
    title: "SignalSense",
    description: "ML trading framework that compares time-series models, applies rolling risk controls, and validates strategies via back- & forward-testing.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
    tech: ["Python", "XGBoost", "MLflow", "Vertex AI", "Pandas"],
    links: {
      code: "https://github.com/oberoiharshith/SignalSense"
    }
  },
  {
    title: "OptiGrade",
    description: "End-to-end student-performance pipeline with ensemble regressors, hyper-tuning, and CI/CD deployment to AWS Beanstalk.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&h=300&fit=crop",
    tech: ["Python", "CatBoost", "XGBoost", "AWS Beanstalk", "CodePipeline"],
    links: {
      code: "https://github.com/oberoiharshith/OptiGrade"
    }
  },
  {
    title: "TweetPrime",
    description: "Ingests tweets, stores them in MySQL + MongoDB + Neo4j, then serves low-latency insights through a FastAPI layer for BI dashboards.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    tech: ["Python", "FastAPI", "MySQL", "MongoDB", "Neo4j"],
    links: {
      code: "https://github.com/oberoiharshith/TweetPrime"
    }
  },
  {
    title: "SocioCrime",
    description: "Survey-data study uncovering socioeconomic drivers behind crime-reporting, using interpretable regression and ML models.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop",
    tech: ["Python", "R", "Pandas", "Statsmodels", "scikit-learn"],
    links: {
      code: "https://github.com/oberoiharshith/Socioeconomic-Dynamics-of-Crime-Reporting-"
    }
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
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
