import { useEffect } from 'react';

const certifications = [
  {
    name: "Bloomberg Market Concepts",
    logo: "📈",
    link: "https://portal.bloombergforeducation.com/certificates/YyEFJnJaRkCSJoRBphZWaSVM"
  },
  {
    name: "Neo4j Fundamentals",
    logo: "🕸️",
    link: "http://graphacademy.neo4j.com/c/0eeaa8e2-7a19-4d8b-a649-b1d37043317c/"
  },
  {
    name: "Cypher Fundamentals",
    logo: "🔗",
    link: "http://graphacademy.neo4j.com/c/2f822a77-375d-477e-8c80-7ba1e5d8fb3b/"
  },
  {
    name: "Using MongoDB with Python",
    logo: "🍃",
    link: "https://learn.mongodb.com/c/Z-4v1ODrQPu0vySvszexCA"
  },
  {
    name: "Agile Software Development",
    logo: "⚡",
    link: "https://www.coursera.org/account/accomplishments/certificate/3MFFK9CS53KD"
  },
  {
    name: "Azure Fundamentals",
    logo: "☁️",
    link: "#"
  },
  {
    name: "A/B Testing (Udacity)",
    logo: "🧪",
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-white">
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
