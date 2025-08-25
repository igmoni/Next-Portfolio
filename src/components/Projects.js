import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      id="projects"
      className="py-16 px-6 md:px-12 lg:px-24 xl:px-32 h-auto bg-white w-full flex flex-col gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4">
        <p className="text-2xl font-semibold text-[#027DD4]">PROJECTS</p>
        <div className="w-full rounded-full bg-[#D9D9D9] h-[5px]">
          <motion.span 
            className="block w-[5%] rounded-full bg-[#027DD4] h-full"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "5%" } : {}}
            transition={{ duration: 0.8 }}
          ></motion.span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {[1, 2].map((project, index) => (
          <motion.div 
            key={index} 
            className="w-full max-w-[450px] h-auto shadow-2xl p-5 flex rounded-md flex-col gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-full h-[250px] relative">
              <Image src="/compEdu.jpg" layout="fill" objectFit="cover" alt="Project Image" className="rounded-md" />
            </div>
            <p className="text-2xl text-[#001424] font-semibold">BALC</p>
            <p className="text-lg text-[#3B5766]">
              A modern, responsive website designed for computer institutes to
              effectively showcase courses, services, and achievements.
            </p>
            <motion.button 
              className="p-2 border-2 cursor-pointer border-[#D9D9D9] bg-transparent rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://www.balc-cadd-bengaluru.in">Click to View</a>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
