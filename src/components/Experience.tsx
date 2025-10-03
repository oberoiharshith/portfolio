
const experiences = [
  {
  role: "Data Scientist",
  company: "J.P. Morgan Chase (Contract)",
  period: "Jan 2024 – Present",
  logo: "📊",
  bullets: [
    "Cut reporting turnaround 40% (500K+ records/mo) with Python/SQL + Power BI.",
    "Improved credit risk scoring 15% via logistic regression + gradient boosting.",
    "Reduced dashboard failures 35% with automated anomaly detection scripts.",
    "Optimized SQL queries & indexing, cutting runtimes 25% for faster analysis.",
    "Built self-service Power BI dashboards, reducing ad-hoc requests by 30%."
  ]
},
  {
    role: "Data Scientist",
    company: "Mercedes-Benz Research & Development (via Capgemini)",
    period: "Jul 2022 – Jul 2023",
    logo: "🚗",
    bullets: [
      "Saved ~$80K yearly by cutting QA time 60% with ML prioritizer.",
      "Sustained 99.7% uptime on 10M+ events/day (PySpark + Airflow pipelines).",
      "Forecasted EV battery health (adj. R² 0.88, RMSE ±5%)."
    ]
  },
  {
    role: "Data Analyst",
    company: "Mercedes-Benz Research & Development (via Capgemini)",
    period: "Mar 2021 – Jun 2022",
    logo: "⚡",
    bullets: [
      "Reduced workflow steps 76% (25→6), saving ~$15K annually with Python–Flask tool.",
      "Analyzed 50K+ reviews (NLP) to improve CX KPIs across 5 vehicle lines.",
      "Created Power BI dashboards tracking adoption, guiding roadmap priorities."
    ]
  },
  {
    role: "Data Science Intern",
    company: "Itronix Solutions",
    period: "Jan 2020 – Jul 2020",
    logo: "💡",
    bullets: [
      "Built ECG stress-detection models achieving 82% F1 score.",
      "Delivered COVID-19 forecasts with 87% accuracy using SVM and regression."
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
