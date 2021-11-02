import { motion } from "framer-motion";
import { FunctionComponent } from "react";

import { Skill } from "../type";

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  const varients = {
    initial: { width: 0, height: 35 },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <motion.div
        className="flex items-center px-4 py-1 bg-gradient-to-r to-blue-500 rounded-full from-green"
        style={{
          width: bar_width,
        }}
        variants={varients}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default Bar;
