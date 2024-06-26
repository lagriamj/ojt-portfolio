/* eslint-disable react/no-children-prop */
import React from "react";
import me2 from "../assets/me2.webp";
import interns from "../assets/all-interns.jpg";
import { motion, useInView } from "framer-motion";
import { Code } from "@chakra-ui/react";

const Artificats = () => {
  const ref = React.useRef(null);
  // const textRef = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  return (
    <div className="w-full lg:h-screen h-auto bg-[#34353a] flex items-center justify-center">
      <div className="hidden md:flex w-[40%] h-full items-center justify-center">
        <motion.div
          initial={{ x: "-80px", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-80px", opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="h-[70%] w-[70%] border-2 border-white rounded-xl relative"
          ref={ref}
        >
          <motion.img
            whileHover={{
              top: 0,
              left: 0,
              transition: { duration: 0.5 },
            }}
            src={me2}
            alt="Mark John Lagria"
            className="w-full h-full object-cover absolute top-3 left-3 rounded-xl"
          />
        </motion.div>
      </div>

      <div className="lg:w-[60%] w-full h-full flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center justify-center"
          ref={ref}
        >
          <motion.h1
            initial={{ y: "-20px", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "-80px", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl mb-4 italic"
          >
            <Code
              style={{
                fontSize: "2.5rem",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
              colorScheme="red"
              children="Artificats>>>"
              variant={"outline"}
            />
          </motion.h1>
          <motion.div
            initial={{ x: "80px", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "80px", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[84%] h-[94%] bg-white rounded-xl flex items-center justify-center p-2"
          >
            <motion.img
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              src={interns}
              alt=""
              className="rounded-xl h-full w-full bg-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Artificats;
