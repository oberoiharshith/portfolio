
const certifications = [
  {
    name: "Bloomberg Market Concepts",
    logo: "📈",
    link: "https://portal.bloombergforeducation.com/certificates/XgU83hRCJHmhpZC3sJ7iXZLX"
  },
  {
    name: "Neo4j Fundamentals",
    logo: "🕸️",
    link: "https://graphacademy.neo4j.com/certificates/bfc7a09cea8cf08b1e41ee9c7d0e853dc5d6bfd1ac936d5a51aca4aa37e95f34.pdf"
  },
  {
    name: "Cypher Fundamentals",
    logo: "🔗",
    link: "https://graphacademy.neo4j.com/certificates/7e1b6f6e7bb3c68c9ccea75d47b6644c2c78f3e97f43e81ad7b48b5e2d1b568b.pdf"
  },
  {
    name: "Using MongoDB with Python",
    logo: "🍃",
    link: "https://university.mongodb.com/course_completion/01886a1e-0b7b-4e78-8cc0-cd7fe6651a5c"
  },
  {
    name: "Agile Software Development",
    logo: "⚡",
    link: "https://www.coursera.org/account/accomplishments/verify/AEFR8UA7GGDH"
  },
  {
    name: "Azure Fundamentals",
    logo: "☁️",
    link: "https://www.credly.com/badges/8a5b5b5c-1c8e-4c7e-9b7e-1c8e4c7e9b7e"
  },
  {
    name: "A/B Testing (Udacity)",
    logo: "🧪",
    link: "https://www.udacity.com/course/ab-testing--ud257"
  }
];

const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-center text-gray-900 mb-16">
            Certifications
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
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
