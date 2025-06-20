
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "R", "JavaScript", "Scala", "Java"]
  },
  {
    category: "ML/AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LangChain", "Hugging Face", "BERT", "GPT"]
  },
  {
    category: "Data Engineering",
    skills: ["Apache Spark", "Kafka", "Airflow", "dbt", "Pandas", "NumPy", "Docker", "Kubernetes"]
  },
  {
    category: "Cloud & BI",
    skills: ["AWS", "Azure", "GCP", "Snowflake", "Databricks", "Tableau", "Power BI", "Looker"]
  },
  {
    category: "Methods",
    skills: ["Deep Learning", "NLP", "Computer Vision", "Time Series", "A/B Testing", "MLOps", "Statistics"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Skills Matrix
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="bg-white p-6 rounded-2xl shadow-lg animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-4">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-rutgers-red/10 text-rutgers-red hover:bg-rutgers-red hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
