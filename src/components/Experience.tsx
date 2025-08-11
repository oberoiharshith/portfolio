const experiences = [
  {
    role: "Lecturer & TA – Intro to Data Science",
    company: "Rutgers University",
    period: "Jan 2025 – May 2025",
    logo: "🎓",
    bullets: [
      "Raised assignment scores by 18% for 50+ students through 40+ hands-on Python projects"
    ]
  },
  {
    role: "Data Science Intern",
    company: "Cogent Infotech",
    period: "Jan 2024 – May 2024",
    logo: "📊",
    bullets: [
      "Boosted chatbot precision to 88% and cut latency 10% on 35K support tickets using LangChain + FAISS"
    ]
  },
  {
    role: "Senior Analyst – Data Science & Engineering",
    company: "Capgemini / Mercedes-Benz",
    period: "Jul 2022 – Jul 2023",
    logo: "🚗",
    bullets: [
      "Saved ~$20K per release by cutting validation time 60% while sustaining 99.7% SLA on 10M+ daily events"
    ]
  },
  {
    role: "Analyst – Systems Eng & Automation",
    company: "Capgemini",
    period: "Mar 2021 – Jun 2022",
    logo: "⚡",
    bullets: [
      "Improved CX KPIs for 5 vehicle lines and cut diagramming effort 85% (~2 FTEs) via SysML automation"
    ]
  },
  {
    role: "Data Science Intern",
    company: "Itronix Solutions",
    period: "Jan 2020 – Jul 2020",
    logo: "💡",
    bullets: [
      "Delivered 87% accurate COVID-19 forecasts adopted by local authorities for planning"
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
