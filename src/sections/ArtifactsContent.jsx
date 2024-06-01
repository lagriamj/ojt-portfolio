import React from "react";
import { motion, useInView } from "framer-motion";
import deployment from "../assets/deployment.jpg";

const textContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridTextVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ArtifactsContent = () => {
  const ref = React.useRef(null);
  const textRef = React.useRef(null);
  const inView = useInView(ref, { threshold: 1 });
  return (
    <div className="flex flex-col  w-full h-auto bg-main">
      <div className="h-screen flex">
        <div className="w-[65%] h-full p-10 flex items-center justify-center">
          <motion.img
            src={deployment}
            alt="deployment"
            className="rounded-xl"
          />
        </div>
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-[35%] h-full flex flex-col items-center justify-center gap-4"
          ref={ref}
        >
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl text-red-300 font-semibold"
          >
            Deployment Day
          </motion.h1>
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl text-red-400 font-semibold"
          >
            Deployment Day
          </motion.h1>
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl text-red-500 font-semibold italic"
          >
            Deployment Day
          </motion.h1>
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl text-red-400 font-semibold"
          >
            Deployment Day
          </motion.h1>
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl text-red-300 font-semibold"
          >
            Deployment Day
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtifactsContent;
