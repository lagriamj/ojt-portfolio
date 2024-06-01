import { motion, useInView } from "framer-motion";
import resume from "../assets/myresume.jpg";
import coverLetter from "../assets/coverletter.jpg";
import React from "react";

const CvPage = () => {
  const ref = React.useRef(null);
  const textRef = React.useRef(null);
  const inView = useInView(ref, { threshold: 1 });
  const txtInView = useInView(textRef, { threshold: 1 });
  return (
    <div className="bg-[#1c1c1f] w-full h-screen flex flex-col">
      <div className="w-full h-[10%] flex items-center" ref={textRef}>
        <motion.h1
          initial={{ x: "-80px", opacity: 0 }}
          animate={
            txtInView ? { x: 0, opacity: 1 } : { x: "-80px", opacity: 0 }
          }
          transition={{ duration: 0.5 }}
          className="text-3xl text-center text-white ml-10"
        >
          Resume and Cover Letter
        </motion.h1>
      </div>
      <div className="w-full h-[90%] flex gap-10 justify-center" ref={ref}>
        <motion.img
          initial={{ x: "-80px", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-80px", opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={resume}
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
          src={coverLetter}
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

export default CvPage;
