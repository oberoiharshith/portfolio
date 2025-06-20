
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
                I'm a Rutgers-trained data scientist who shaved 60% off Mercedes-Benz test validations and streams 10M telemetry rows a day without breaking a sweat. I build end-to-end ML products—chatbots, time-series engines, real-time dashboards—and teach the next generation to do the same.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                If your team needs someone who speaks both Python and business, let's talk.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-6">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-rutgers-red font-bold mr-2">•</span>
                  <span className="text-gray-700">5 yrs analytics & ML experience | 3 continents of stakeholders served</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-rutgers-red font-bold mr-2">•</span>
                  <span className="text-gray-700">Toolbox: Python · SQL · PySpark · TensorFlow · AWS/Azure/GCP</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-rutgers-red font-bold mr-2">•</span>
                  <span className="text-gray-700">Passion: turning data noise into decisions that save time & money</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-rutgers-red font-bold mr-2">•</span>
                  <span className="text-gray-700">Always remote-ready and visa-authorized—wherever the challenge is</span>
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
