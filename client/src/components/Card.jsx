import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";

const Card = ({ sub }) => {
  // Variants for container animation
  const containerVariants = {
    initial: {
      opacity: 0,
      height: 0,
    },
    hover: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.25,
        ease: "easeOut",
        staggerChildren: 0.2, // Staggers child animations by 0.1s
      },
    },
  };

  // Variants for individual paragraph animation
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <Link to={sub.path}>
        <motion.img
          src={sub.thumbnail}
          alt=""
          className="w-full"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </Link>

      <motion.div
        className="absolute bottom-0 p-4 bg-black/60 text-white w-full"
        layout
      >
        <motion.div layout transition={{ duration: 0.25, ease: "circInOut" }}>
          <Link to={sub.path}>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-xl">{sub.title}</span>
              <span className="text-2xl">
                <MdKeyboardArrowRight />
              </span>
            </div>
            <div>
              <span className="text-highlight">{sub.type}</span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          transition={{ duration: 0.25 }}
          style={{ overflow: "hidden" }}
          className="border-t border-gray-300 pt-4"
        >
          <motion.p variants={itemVariants}>{sub.L1}</motion.p>
          <motion.p variants={itemVariants}>{sub.L2}</motion.p>
          <motion.p variants={itemVariants}>{sub.L3}</motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
