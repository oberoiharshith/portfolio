
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a Rutgers trained data scientist with 3 years of experience in predictive modeling, analytics, and large scale data workflows. I improved credit risk lift by <strong>15 percent</strong> at J. P. Morgan, cut Mercedes Benz QA validation time by <strong>60 percent</strong>, and kept a <strong>10M row per day</strong> telemetry pipeline running at <strong>99.7 percent uptime</strong>. I’ve built ETL pipelines, ML models, and Power BI systems that speed up decisions, reduce manual effort, and deliver measurable savings across finance and engineering.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a clear, proactive communicator who asks the tough questions early so projects don't derail late. If your team needs someone fluent in Python and business impact, let's talk.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h4 className="text-lg font-epilogue font-bold text-gray-900 mb-4">Quick Facts</h4>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-rutgers-red font-bold mr-2">•</span>
                      <span className="text-gray-700 text-sm">3 yrs ML / analytics across 3 continents</span>
                    </div>

                    <div className="flex items-start">
                      <span className="text-rutgers-red font-bold mr-2">•</span>
                      <span className="text-gray-700 text-sm">Toolbox: Python · SQL · PySpark · Product Sense · AWS / Azure / GCP</span>
                    </div>

                    <div className="flex items-start">
                      <span className="text-rutgers-red font-bold mr-2">•</span>
                      <span className="text-gray-700 text-sm">Edge: Turns data noise into actions that move metrics</span>
                    </div>

                    <div className="flex items-start">
                      <span className="text-rutgers-red font-bold mr-2">•</span>
                      <span className="text-gray-700 text-sm">Open to on-site or remote roles, visa-authorized and relocation friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


//I'm a Rutgers-trained data scientist who <strong>cut Mercedes-Benz test validation time by 60%</strong> and ran a <strong>10M-row/day telemetry pipeline</strong> at 99.7% uptime. Over 3 years in ML and analytics, I've shipped chatbots, trading models, and real-time dashboards that turn raw data into decisions and dollars saved.
