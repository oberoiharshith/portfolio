
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Education
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-2">
                  Rutgers University
                </h3>
                <p className="text-gray-600 mb-2">New Brunswick, NJ</p>
                <p className="text-lg text-gray-700 mb-1">
                  M.S. Data Science (Statistics)
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-rutgers-red font-semibold">GPA: 3.85 / 4.0</span>
                  <span className="text-gray-600">May 2025</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-2">
                  Manipal University Jaipur
                </h3>
                <p className="text-gray-600 mb-2">Jaipur, India</p>
                <p className="text-lg text-gray-700 mb-1">
                  B.Tech. Information Technology
                </p>
                <div className="flex justify-end">
                  <span className="text-gray-600">Jun 2020</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a Rutgers-trained data scientist who <strong>cut Mercedes-Benz test-validation time by 60%</strong> and keeps <strong>10M telemetry rows flowing daily</strong> at 99.7% SLA. In three years of ML & analytics I've shipped chatbots, trading models, and real-time dashboards that turn raw data into dollars saved.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                A resilient, loud thinker, I ask the tough questions early so projects don't derail late. If your team needs someone fluent in both Python <em>and</em> business impact, let's talk.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="text-lg font-epilogue font-bold text-gray-900 mb-4">Quick Facts</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-rutgers-red font-bold mr-2">•</span>
                    <span className="text-gray-700 text-sm">3 yrs ML / analytics across 3 continents</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-rutgers-red font-bold mr-2">•</span>
                    <span className="text-gray-700 text-sm">Toolbox: Python · SQL · PySpark · TensorFlow · AWS / Azure / GCP</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-rutgers-red font-bold mr-2">•</span>
                    <span className="text-gray-700 text-sm">Edge: Turns data noise into money-saving decisions</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-rutgers-red font-bold mr-2">•</span>
                    <span className="text-gray-700 text-sm">Open to on-site or remote roles — visa-authorized & relocation-friendly</span>
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
