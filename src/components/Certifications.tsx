
const certifications = [
  {
    name: "Bloomberg Market Concepts",
    logo: "📈",
    link: "#"
  },
  {
    name: "Neo4j Certified Professional",
    logo: "🕸️",
    link: "#"
  },
  {
    name: "MongoDB Developer",
    logo: "🍃",
    link: "#"
  },
  {
    name: "Azure Fundamentals",
    logo: "☁️",
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Certifications
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={cert.name}
                href={cert.link}
                className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {cert.logo}
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-rutgers-red transition-colors duration-200">
                  {cert.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
