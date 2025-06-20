
const experiences = [
  {
    role: "Lecturer, Data Science",
    company: "Rutgers University",
    period: "2023 - Present",
    logo: "🎓",
    bullets: [
      "Teaching 200+ graduate students machine learning fundamentals and advanced analytics",
      "Developed curriculum integrating Python, R, and cloud platforms with 95% student satisfaction"
    ]
  },
  {
    role: "Senior Data Scientist",
    company: "Cogent Infotech",
    period: "2022 - 2023",
    logo: "📊",
    bullets: [
      "Built end-to-end ML pipeline processing 50M+ financial records with 99.2% accuracy",
      "Led cross-functional team of 6 engineers delivering $2M cost savings through automation"
    ]
  },
  {
    role: "Data Scientist",
    company: "Mercedes-Benz (Capgemini)",
    period: "2020 - 2022",
    logo: "🚗",
    bullets: [
      "Reduced vehicle test validation time by 60% using ensemble ML models on telemetry data",
      "Deployed real-time monitoring system handling 10M events/day with 99.7% SLA"
    ]
  },
  {
    role: "Analytics Engineer",
    company: "Itronix Solutions",
    period: "2019 - 2020",
    logo: "⚡",
    bullets: [
      "Designed ETL pipelines processing 5TB+ daily data with 40% performance improvement",
      "Created interactive dashboards used by C-suite for strategic decision making"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Experience Timeline
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="flex items-start gap-6 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl flex-shrink-0">
                  {exp.logo}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-epilogue font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <span className="text-rutgers-red font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-gray-700 mb-4">
                    {exp.company}
                  </h4>
                  
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="text-rutgers-red font-bold mr-2 flex-shrink-0">•</span>
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
