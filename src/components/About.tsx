
const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a Rutgers-trained data scientist who <strong>cut Mercedes-Benz test-validation time by 60%</strong> and keeps <strong>10M telemetry rows flowing daily</strong> at 99.7% SLA. In three years of ML & analytics I've shipped chatbots, trading models, and real-time dashboards that turn raw data into dollars saved.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                A resilient, loud thinker, I ask the tough questions early so projects don't derail late. If your team needs someone fluent in both Python <em>and</em> business impact, let's talk.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-6">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-rutgers-red font-bold mr-2">•</span>
                  <span className="text-gray-700">3 yrs ML / analytics across 3 continents</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-rutgers-red font-bold mr-2">•</span>
                  <span className="text-gray-700">Toolbox: Python · SQL · PySpark · TensorFlow · AWS / Azure / GCP</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-rutgers-red font-bold mr-2">•</span>
                  <span className="text-gray-700">Edge: Turns data noise into money-saving decisions</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-rutgers-red font-bold mr-2">•</span>
                  <span className="text-gray-700">Open to on-site or remote roles — visa-authorized & relocation-friendly</span>
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
