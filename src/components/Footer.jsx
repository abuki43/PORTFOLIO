import { FiGithub, FiLinkedin, FiTwitter, FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © 2025 Abubeker Abe. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abubeker-abe-bb2325285?"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/ABking1"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <FiSend className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
