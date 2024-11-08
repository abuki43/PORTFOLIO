import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import AbayBridge from "../assets/abay-bridge.svg";
import AddisFetch from "../assets/addisfetch.jpg";
import TopTrader from "../assets/topTrader.jpg";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const projects = [
    {
      title: "Addis Fetch",
      description:
        "Get what you need from abroad with ease! Our app connects you with travelers who can bring items directly to you from another country. Simply post your request, connect with  travelers. ",
      image: AddisFetch,
      technologies: ["ReactNative", "Expo", "Firebase", "TailwindCSS"],
      github: "",
      demo: "https://addis-fetchet.onrender.com/",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Top Trader",
      description:
        "A telegram bot that provides wallet analysis, find top traders from atoken and filter out the best traders based on their performance.",
      image: TopTrader,
      technologies: ["Node.js", "Telegram API", "MongoDB"],
      github: "",
      demo: "",
      color: "from-blue-500 to-teal-500",
    },
    {
      title: "Abay Bridge",
      description: "An eductional question and answer platform",
      image: AbayBridge,
      technologies: ["React", "Node.js", "Express JS", "MongoDB"],
      github: "",
      demo: "https://abay-bridge-1.onrender.com/",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={containerRef} id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch-text">
            Featured Work
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const progress = useTransform(
              scrollYProgress,
              [index * 0.3, (index + 1) * 0.3],
              [0, 1]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity: progress }}
                className="relative group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ x: index % 2 ? 100 : -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative overflow-hidden rounded-xl aspect-video ${
                      index % 2 ? "lg:order-2" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: index % 2 ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`${index % 2 ? "lg:order-1" : ""}`}
                  >
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-6">
                      {project.code && (
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                        >
                          <FiGithub className="w-6 h-6 mr-2" />
                          Code
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                        >
                          <FiExternalLink className="w-6 h-6 mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
