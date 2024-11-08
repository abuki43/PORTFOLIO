import { motion } from "framer-motion";
import { link } from "framer-motion/client";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiInstagram,
} from "react-icons/fi";

const Hero = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const socialIcons = [
    { icon: FiGithub, link: "" },
    {
      icon: FiLinkedin,
      link: "https://www.linkedin.com/in/abubeker-abe-bb2325285?",
    },
    { icon: FiSend, link: "https://t.me/ABking1" },
    { icon: FiInstagram, link: "https://www.instagram.com/abuki431/" },
  ];

  const handleMouseOver = (event) => {
    let iterations = 0;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= event.target.dataset.value.length)
        clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full dark:opacity-20 opacity-10">
        <div className="absolute w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-purple-300/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1
            className="glitch-text text-6xl md:text-8xl font-bold mb-6 cursor-default"
            data-value="ABUBEKER ABE"
            onMouseOver={handleMouseOver}
          >
            ABUBEKER ABE
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Crafting digital solutions that push the boundaries of web
            development
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            {socialIcons.map((Social, index) => (
              <motion.a
                key={index}
                href={Social.link}
                className="social-icon-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="scroll-indicator"
        >
          <span className="sr-only">Scroll down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
