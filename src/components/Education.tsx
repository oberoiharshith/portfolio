
const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl animate-on-scroll">
              <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-2">
                Rutgers University
              </h3>
              <p className="text-gray-600 mb-2">New Brunswick, NJ</p>
              <p className="text-lg text-gray-700 mb-1">
                M.S. Data Science (Statistics)
              </p>
              <div className="flex justify-end">
                <span className="text-gray-600">May 2025</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl animate-on-scroll" style={{ animationDelay: '0.1s' }}>
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
        </div>
      </div>
    </section>
  );
};

export default Education;