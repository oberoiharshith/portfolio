
const ValueBring = () => {
  const values = [
    {
      title: "Rapid Impact",
      description: "Drops 60% of cycle time within first release"
    },
    {
      title: "End-to-End Builder", 
      description: "Ideation ➜ deployment ➜ dashboard in one sprint"
    },
    {
      title: "Fearless Communicator",
      description: "Asks hard questions early; de-risks scope"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            What I Bring
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-gray-50 rounded-2xl animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-epilogue font-bold text-rutgers-red mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueBring;
