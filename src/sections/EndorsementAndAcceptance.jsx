/* eslint-disable react/no-children-prop */
import { Code } from "@chakra-ui/react";
import { useInView, motion } from "framer-motion";
import React from "react";
import endorsement from "../assets/batch1-Endorsement.jpg";
import acceptance from "../assets/batch1-Acceptance.jpg";

const EndorsementAndAcceptance = () => {
  const ref = React.useRef(null);
  const textRef = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const txtInView = useInView(textRef, { threshold: 0.5 });
  return (
    <div className="bg-[#1c1c1f] w-full h-screen flex flex-col pb-14">
      <div className="w-full h-[10%] flex items-center justify-center my-6">
        <motion.h1
          initial={{ x: "-80px", opacity: 0 }}
          animate={
            txtInView ? { x: 0, opacity: 1 } : { x: "-80px", opacity: 0 }
          }
          transition={{ duration: 0.5 }}
          className="text-3xl text-center text-white my-4"
          ref={textRef}
        >
          <Code
            children="Endorsement and Acceptance Letter"
            style={{ fontSize: "2rem" }}
          />
        </motion.h1>
      </div>
      <div className="w-full h-[90%] flex gap-10 justify-center" ref={ref}>
        <motion.img
          initial={{ x: "-80px", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-80px", opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={endorsement}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          alt="Resume"
          className="h-[95%] bg-contain"
        />
        <motion.img
          initial={{ x: "80px", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "80px", opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={acceptance}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          alt="Resume"
          className="h-[95%]"
        />
      </div>
    </div>
  );
};

export default EndorsementAndAcceptance;
