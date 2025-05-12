import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
// import AbayBridge from "../assets/abay-bridge.svg";
import AbayBridge from "../assets/abayBridge.png";
import AddisFetch from "../assets/addisfetch.jpg";
// import TopTrader from "../assets/topTrader.jpg";
import Telescribe from "../assets/telescribe.png";
import QrHotel from "../assets/qrhotel.png"
import Private from "../assets/private.png"
import TopTrader from "../assets/top.png"

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
        "Get what you need from abroad with ease! Our app connects you with travelers who can bring items directly to you from another country. Simply post your request, connect with travelers.",
      image: AddisFetch,
      technologies: ["ReactNative", "Expo", "Firebase", "TailwindCSS"],
      github: "",
      demo: "https://addis-fetchet.onrender.com/",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "TeleScribe",
      image: Telescribe,
      description: "Monetize your Telegram channels with ease! TeleScribe is a web app that helps you manage private channels, streamline subscriptions, and maximize revenue effortlessly.",
      technologies: ["Nextjs", "Prisma", "Postgres", "Shadcn", "TON"],
      github: "",
      demo: "",
      color: "from-blue-500 to-teal-500",
    },
    {
      title: "Abay Bridge",
      description: "This educational platform connects learners and experts through a dynamic question-and-answer system, fostering seamless collaboration.",
      image: AbayBridge,
      technologies: ["React", "Node.js", "Express JS", "MongoDB"],
      github: "",
      demo: "https://abay-bridge-1.onrender.com/",
      color: "from-blue-500 to-teal-500",
    },
    {
      title: "QR-Hotel",
      image:QrHotel,
      description: "Transform hotel operations with QR-Hotel! This web app simplifies guest services, enabling seamless ordering, payments, and real-time system for a modern hospitality experience.",
      technologies: ["React", "NodeJs", "Express", "MongoDB", "Chapa", "web socket"],
      github: "",
      demo: "",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "PrivateBot",
      description: "Manage your Telegram private channels with ease! PrivateBot is a mini-app that empowers you to control and organize your private channel bots effortlessly.",
      technologies: ["Telegraf","NodeJS","ReactJs"],
      image:Private,
      github: "https://github.com/abuki43/TelegramPaidChannelPayment",
      demo: "https://t.me/privateChannelOwner_bot",
      color: "from-blue-500 to-teal-500",
    },
    {
      title: "Top Trader",
      description:
        "A telegram bot that provides wallet analysis, find top traders from a token and filter out the best traders address based on your settings.",
      image: TopTrader,
      technologies: ["Nodejs", "Telegram API", "MongoDB"],
      github: "",
      demo: "",
      color: "from-purple-600 via-pink-500 to-blue-500",
    },
  ];

  // // Create progress transforms for each project
  // const progressTransforms = projects.map((_, index) => 
  //   useTransform(
  //     scrollYProgress,
  //     [index / projects.length, (index + 1) / projects.length],
  //     [0, 1]
  //   )
  // );

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
          {projects.map((project, index) => (
            <motion.div
              key={index}
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
                  <h3 className="text-3xl dark:text-primary font-bold mb-4">{project.title}</h3>
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
                    {project.github && (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;