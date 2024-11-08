import { motion } from 'framer-motion';

const Cursor = ({ mousePosition }) => {
  return (
    <>
      <motion.div
        className="cursor-dot pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      />
      <motion.div
        className="cursor-ring pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </>
  );
};

export default Cursor;