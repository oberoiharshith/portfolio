
const metrics = [
  {
    value: "60%",
    label: "Faster Validation",
    description: "Test validation time reduction at Mercedes-Benz"
  },
  {
    value: "10M",
    label: "Events/Day",
    description: "Real-time telemetry processing with 99.7% SLA"
  },
  {
    value: "88%",
    label: "Precision",
    description: "Chatbot top-3 accuracy on 35K support tickets"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Impact Metrics
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="text-center p-6 bg-gray-50 rounded-2xl animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-epilogue font-bold text-rutgers-red mb-2">
                  {metric.value}
                </div>
                <div className="text-xl font-epilogue font-bold text-gray-900 mb-2">
                  {metric.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl text-center animate-on-scroll">
            <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
              "Harshith consistently delivers exceptional results, combining technical expertise with business acumen. His ability to translate complex data insights into actionable strategies has been invaluable to our team."
            </blockquote>
            <cite className="text-rutgers-red font-semibold">
              — Senior Engineering Manager, Mercedes-Benz
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
