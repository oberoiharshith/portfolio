const experiences = [
  {
    role: "Research Assistant - Data Science",
    company: "Rutgers University",
    period: "Jan 2025 – May 2025",
    logo: "🎓",
    bullets: [
      "Improved transplant risk stratification by 15% (Cox regression).",
      "Flagged high-risk cohorts with Bayesian inference.",
      "Mentored 50+ students; boosted project outcomes by 18%."
    ]
  },
  {
    role: "Data Scientist",
    company: "J.P. Morgan Chase (via Cogent Infotech)",
    period: "Jan 2024 – May 2024",
    logo: "📊",
    bullets: [
      "Cut reporting turnaround by 40% (500K+ records/mo) with ETL pipelines + KPI dashboards.",
      "Improved credit risk prioritization by 15% (logistic regression + gradient boosting).",
      "Reduced dashboard refresh failures by 35% with anomaly detection automation."
    
    ]
    
  },
  {
    role: "Senior Analyst – Data Science & Analytics",
    company: "Mercedes-Benz Research & Development (via Capgemini)",
    period: "Jul 2022 – Jul 2023",
    logo: "🚗",
    bullets: [
      "Saved ~$80K by cutting QA time by 60%",
      "Sustained 99.7% uptime on 10M+ telemetry events/day (PySpark–Airflow pipelines).",
      "Forecasted EV battery State of Health (adj. R² ~0.88)."

    ]
  },
  {
    role: "Analyst – Data Analytics & Automation",
    company: "Mercedes-Benz Research & Development (via Capgemini)",
    period: "Mar 2021 – Jun 2022",
    logo: "⚡",
    bullets: [
      "Cut workflow steps 76% (25 → 6), saving ~$15K with Python–Flask GUI tool.",
      "Surfaced insights from 50K+ customer reviews with NLP.",
      "Shaped roadmap priorities via Power BI adoption dashboards."
]
  },
  {
    role: "Data Science Intern",
    company: "Itronix Solutions",
    period: "Jan 2020 – Jul 2020",
    logo: "💡",
    bullets: [
      "Built ECG stress-detection models (82% F1).",
      "Delivered COVID-19 forecasts at 87% accuracy."
]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
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
                        <span className="text-rutgers-red font-bold mr-2 flex-shrink-0">–</span>
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
