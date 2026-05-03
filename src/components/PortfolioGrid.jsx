import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "My Nyumba",
    description:
      "A modern real estate platform that enables agents to list properties and allows clients or tenants to browse listings and connect directly with the responsible agent, simplifying and speeding up the house search process.",
    image: "/images/project1.png",
    link: "https://mynyumba-kenya-finder.lovable.app/",
  },
  {
    title: "MoiLearn",
    description:
      "A student platform for sharing learning materials and past papers for Moi University, helping learners access academic resources quickly and collaborate efficiently.",
    image: "/images/Moilearn.png",
    link: "https://moilearn.vercel.app/",
  },
  {
    title: "EcoCircuit",
    description:
      "An e-waste management platform that connects e-waste producers with recyclers, making recycling easier and more transparent for everyone.",
    image: "/images/ecocircuit.png",
    link: "https://waste-frontend-two.vercel.app/",
  },
];

const PortfolioGrid = ({ featuredOnly = false }) => {
  const visibleProjects = featuredOnly ? projects.slice(0, 3) : projects;

  return (
    <div>
      {/* Heading centered with brand colors – reduced top margin, p4 bottom spacing */}
      <h2 className="mb-12 mt-0 text-center font-orbitron text-2xl font-bold text-primary sm:text-3xl">
        Explore our projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-primary bg-dark-light/40 shadow-[0_24px_80px_rgba(6,182,212,0.16)] transition-transform duration-500 hover:-translate-y-1"
            style={{
              animation: "fadeInUp 0.8s ease forwards",
              animationDelay: `${index * 0.12}s`,
              opacity: 0,
            }}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 sm:p-7 space-y-4">
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light"
              >
                View project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PortfolioGrid;