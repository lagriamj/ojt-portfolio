/* eslint-disable react/no-children-prop */
import React from "react";
import { motion, useInView } from "framer-motion";
import deployment from "../assets/deployment.jpg";
import { Code } from "@chakra-ui/react";
import { Card } from "antd";
const { Meta } = Card;

import img1 from "../assets/artificats/img1.webp";
import img2 from "../assets/artificats/img2.webp";
import img3 from "../assets/artificats/img3.webp";
import img4 from "../assets/artificats/img4.jpg";
import img5 from "../assets/artificats/img5.jpg";
import img6 from "../assets/artificats/img6.jpg";
import img7 from "../assets/artificats/img7.jpg";
import img8 from "../assets/artificats/img8.jpg";
import img9 from "../assets/artificats/img9.jpg";
import img10 from "../assets/artificats/img10.webp";
import img11 from "../assets/artificats/img11.webp";
import img12 from "../assets/artificats/img12.webp";
import img13 from "../assets/artificats/img13.jpg";
import img14 from "../assets/artificats/img14.jpg";

const imageList = [
  { src: img1, title: "Software Development" },
  { src: img2, title: "Software Development" },
  { src: img3, title: "Software Development" },
  { src: img4, title: "Software Development" },
  { src: img5, title: "Software Development" },
  { src: img8, title: "Software Development" },
  { src: img7, title: "Software Development" },
  { src: img6, title: "Software Development" },
  { src: img9, title: "Software Development" },
  { src: img10, title: "Technical" },
  { src: img11, title: "Technical" },
  { src: img12, title: "Technical" },
];

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

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5, // Adjust duration as needed
      staggerChildren: 0.15, // Adjust stagger delay between cards
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, transform: "translateY(20px)" }, // Add an initial transform
  show: { opacity: 1, transform: "translateY(0px)" }, // Animate transform on show
};

const cardVariants2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5, // Adjust duration as needed
      staggerChildren: 0.15, // Adjust stagger delay between cards
    },
  },
};

const cardItemVariants2 = {
  hidden: { opacity: 0, transform: "translateY(20px)" }, // Add an initial transform
  show: { opacity: 1, transform: "translateY(0px)" }, // Animate transform on show
};

const ArtifactsContent = () => {
  const ref = React.useRef(null);
  const textRef = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const imgRef = React.useRef(null);
  const imgInView = useInView(imgRef, { threshold: 0.5 });
  const textInView = useInView(textRef, { threshold: 0.5 });
  const card2Ref = React.useRef(null);
  const card2InView = useInView(card2Ref, { threshold: 0.5 });
  return (
    <div className="flex flex-col  w-full h-auto bg-main">
      <div className="h-screen flex">
        <div className="w-[65%] h-full p-10 flex items-center justify-center">
          <motion.img
            initial={{ x: "-80px", opacity: 0 }}
            animate={
              imgInView ? { x: 0, opacity: 1 } : { x: "-80px", opacity: 0 }
            }
            transition={{ duration: 0.6 }}
            src={deployment}
            alt="deployment"
            className="rounded-xl"
            ref={imgRef}
          />
        </div>
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate={textInView ? "show" : "hidden"}
          className="w-[35%] h-full flex flex-col items-center justify-center gap-4"
          ref={textRef}
        >
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl  text-red-300 font-semibold"
          >
            <Code
              children="Deployment Day"
              className=" text-center"
              colorScheme="gray"
              style={{ fontSize: "2.0rem" }}
            />
          </motion.h1>
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl text-red-400 font-semibold"
          >
            <Code
              children="Deployment Day"
              className=" text-center"
              colorScheme="yellow"
              style={{ fontSize: "2.0rem" }}
            />
          </motion.h1>
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl text-red-500 font-semibold "
          >
            <Code
              children="Deployment Day"
              className=" text-center"
              colorScheme="red"
              style={{ fontSize: "2.0rem" }}
            />
          </motion.h1>
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl text-red-400 font-semibold"
          >
            <Code
              children="Deployment Day"
              className=" text-center"
              colorScheme="yellow"
              style={{ fontSize: "2.0rem" }}
            />
          </motion.h1>
          <motion.h1
            variants={gridTextVariants}
            className="text-4xl text-red-300 font-semibold"
          >
            <Code
              children="Deployment Day"
              className=" text-center"
              style={{ fontSize: "2.0rem" }}
            />
          </motion.h1>
        </motion.div>
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <Code
          style={{ fontSize: "2rem" }}
          children="Daily Activities"
          className="mb-10"
        />
        <div className="w-[90%] h-full">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            ref={ref}
            className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 "
          >
            {imageList.map((image, index) => (
              <motion.div variants={cardItemVariants} key={index}>
                <Card
                  key={index}
                  hoverable
                  style={{ width: 400 }}
                  cover={<img alt={image.title} src={image.src} />}
                >
                  <Meta title={image.title} />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <Code
          children="Exit Conference"
          style={{
            fontSize: "2rem",
          }}
          className="my-10"
        />
        <div className="w-full flex items-center justify-center">
          <motion.div
            variants={cardVariants2}
            initial="hidden"
            animate={card2InView ? "show" : "hidden"}
            ref={card2Ref}
            className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 "
          >
            <motion.div variants={cardItemVariants2}>
              <Card
                hoverable
                style={{
                  width: 600,
                }}
                cover={<img alt="Exit Con" src={img13} />}
              >
                <Meta
                  title="Exit Conference"
                  description="My internship at Infosoft Studio/Miniclean over the past three months has been an incredible experience. I have gained invaluable knowledge and hands-on experience, particularly in backend development. Working alongside talented professionals, I have honed my skills in coding, database management, and server-side logic. This opportunity has not only enhanced my technical abilities but also provided me with a deeper understanding of the industry, preparing me for a successful career in software development."
                />
              </Card>
            </motion.div>
            <motion.div variants={cardItemVariants2}>
              <Card
                hoverable
                style={{
                  width: 600,
                }}
                cover={<img alt="Exit Con" src={img14} />}
              >
                <Meta title="Exit Conference" />
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsContent;
