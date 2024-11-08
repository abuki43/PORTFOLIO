import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch-text">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group">
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.02 }}
              className="block p-10 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center space-x-4">
                <FiMail className="w-8 h-8 text-primary" />
                <span className="text-2xl font-medium">
                  Abubeker4310@gmail.com
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Available for freelance opportunities and exciting projects
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 dark:opacity-30 opacity-10">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute left-0 top-0 w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Contact;
