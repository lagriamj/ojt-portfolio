import { FaDownload } from "react-icons/fa";
import me from "../assets/me.png";
import { motion, useInView } from "framer-motion";
import resume from "../../public/Resume_Lagria-main.pdf";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const ref = useRef(null);
  const imgRef = useRef(null);

  // Use the inView hook with the created refs
  const inView = useInView(ref, { threshold: 0.5 });
  const imgInView = useInView(imgRef, { threshold: 0.5 });

  return (
    <div className="h-screen w-full flex">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        animate={inView ? { x: 0, opacity: 1 } : { x: "-100px", opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 h-full flex items-center justify-center flex-col gap-4"
        ref={ref}
      >
        <h2 className="text-left text-3xl">Hello!!</h2>
        <h1 className="text-4xl font-bold">I&apos;m Mark John Lagria</h1>
        <div className="flex items-center justify-center gap-2 w-full ">
          <h1 className="text-2xl">I am a </h1>
          <span className="text-red-500 text-3xl font-semibold">
            <Typewriter
              words={[
                "Back-End Developer",
                "Front-End Developer",
                "Full-Stack Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              className="tex-red-700"
            />
          </span>
        </div>

        <p className="text-lg font-light w-[70%] text-justify">
          A graduating IT student from the University of Mindanao I specialized
          in Back-End Development, and can also do Full-Stack Development
        </p>
        <motion.a
          whileHover={{
            backgroundColor: "transparent",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            fontWeight: "semibold",
          }}
          transition={{ duration: 0.3 }}
          href={resume}
          download={resume}
          className="text-base bg-red-600 rounded-lg py-2 px-3 flex items-center justify-center gap-2 mt-4 border-nonez"
        >
          Download CV
          <FaDownload />
        </motion.a>
      </motion.div>
      <div className="w-1/2 h-full flex items-center justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          animate={
            imgInView ? { x: 0, opacity: 1 } : { x: "100px", opacity: 0 }
          }
          transition={{ duration: 0.8 }}
          className="w-[60%] h-[60%] flex items-center justify-center bg-white rounded-full"
          ref={imgRef}
        >
          <img src={me} alt="me" className="rounded-full w-[100%] h-[90%]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
