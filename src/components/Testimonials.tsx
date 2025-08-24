
const metrics = [
  {
    value: "60%",
    label: "QA Time Saved",
    description: "Validation cut at Mercedes-Benz (~$80K/yr)"
  },
  {
    value: "10M+",
    label: "Events / Day",
    description: "Real-time pipeline uptime (99.7% SLA)"
  },
  {
    value: "95%",
    label: "Model Accuracy",
    description: "EV Battery SoH Prediction"
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
          
          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
