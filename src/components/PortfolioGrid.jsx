import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Heading with view animation */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={itemVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-12 mt-0 text-center font-orbitron text-2xl font-bold text-primary sm:text-3xl"
      >
        Explore our projects
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group overflow-hidden rounded-3xl border border-primary bg-dark-light/40 shadow-[0_24px_80px_rgba(6,182,212,0.16)] transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-4 p-6 sm:p-7">
              <h3 className="font-orbitron text-xl font-bold text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
              >
                View project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;