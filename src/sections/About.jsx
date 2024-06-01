import React from "react";
import me1 from "../assets/me1.webp";
import { motion, useInView } from "framer-motion";
import fblogo from "../assets/fblogo.png";
import xlogo from "../assets/xlogo.png";
import iglogo from "../assets/iglogo.png";
import linkedinlogo from "../assets/linkedinlogo.png";
import githublogo from "../assets/githublogo.png";

const About = () => {
  const ref = React.useRef(null);
  const textRef = React.useRef(null);
  const inView = useInView(ref, { threshold: 1 });
  const txtInView = useInView(textRef, { threshold: 1 });
  return (
    <div className="w-full h-screen flex bg-[#28292d]">
      <div className="w-1/2 h-full flex items-center justify-center" ref={ref}>
        <motion.div
          initial={{ x: "-80px", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-80px", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="h-[60%] w-[60%] border-2 border-white rounded-xl relative"
        >
          <motion.img
            whileHover={{
              top: 0,
              left: 0,
              transition: { duration: 0.5 },
            }}
            src={me1}
            alt=""
            className="w-full h-full object-cover absolute top-3 left-3  rounded-xl"
          />
        </motion.div>
      </div>
      <div
        className="w-1/2 h-full flex flex-col items-start justify-center"
        ref={textRef}
      >
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={
            txtInView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0 }
          }
          transition={{ duration: 0.8 }}
          className="h-full w-[80%] flex flex-col items-start justify-center"
        >
          <span className="text-5xl mb-6">
            About <b className="text-red-500">Me</b>
          </span>
          <p className="text-lg text-justify w-[70%]">
            Hi, I&apos;m{" "}
            <span className="text-red-500 text-xl font-semibold">
              Mark John Lagria
            </span>
            , an aspiring aspiring{" "}
            <span className="text-red-500 text-xl font-semibold">
              software developer
            </span>{" "}
            who is passionate about creating innovative solutions and delivering
            high-quality web and mobile applications. I do both front-end and
            back-end development. I live in Edullantes Compound, Camasura Phase
            2, SGR Village, Catalunan Grande Davao City. My hobbies are playing
            computer games, watching anime, live-action tv series, and coding.
          </p>
          <div className="w-[70%] mt-20 ml-auto ">
            <ul className="flex gap-4 items-center">
              <li>
                <a href="https://www.facebook.com/lagriamj18/" target="_blank">
                  <img src={fblogo} alt="" className="h-7 w-7" />
                </a>
              </li>
              <li>
                <a href="https://x.com/lagriamj" target="_blank">
                  <img src={xlogo} alt="" className="h-7 w-10" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lagriamj/" target="_blank">
                  {" "}
                  <img src={iglogo} alt="" className="h-8 w-8" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lagriamj" target="_blank">
                  {" "}
                  <img src={linkedinlogo} alt="" className="h-8 w-8" />
                </a>
              </li>
              <li>
                <a href="https://github.com/lagriamj" target="_blank">
                  <img src={githublogo} alt="" className="h-10 w-10" />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
