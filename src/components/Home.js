'use client'
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const [showRight, setShowRight] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setTimeout(() => setShowRight(true), 500);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div ref={ref} className="flex flex-col md:flex-row items-center md:items-start px-6 sm:px-10 md:px-[100px] pt-[90px] md:pl-[150px] md:pr-[100px]">
        <motion.div 
          initial={{ opacity: 0, x: -150 }} 
          animate={isInView ? { opacity: 1, x: 0 } : {}} 
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-center text-center md:text-left gap-3 w-full md:w-1/3"
        >
          <Image 
            src={'/Moni3.jpg'} 
            width={250} 
            height={250} 
            alt="Moni" 
            className="w-[250px] object-cover object-top border-white border-6 h-[250px] sm:w-[295px] sm:h-[295px] rounded-full shadow-[0_0_30px_#fff]"
          />
          <p className="text-[#3B5766] text-base sm:text-xl">Web-developer, designer</p>
          <p className="text-lg sm:text-xl">
            <span className="text-[#3B5766]">email: </span>igmonii.21@gmail.com
          </p>
          <div className="flex gap-4 text-2xl">
            <a href="https://instagram.com/_igmoni" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:drop-shadow-lg transition" />
            </a>
            <a href="https://x.com/_igmoni" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:drop-shadow-lg transition" />
            </a>
            <a href="https://linkedin.com./igmoni" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:drop-shadow-lg transition" />
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={isInView && showRight ? { opacity: 1, x: 0 } : {}} 
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:pl-[80px] mt-8 md:mt-0 w-full md:w-2/3 flex flex-col gap-3 text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center justify-center md:justify-start gap-3"
          >
            <div className="w-5 h-5 bg-[#9CFF46] rounded-full"></div>
            <p className="text-[#3B5766] font-semibold text-lg sm:text-xl">Available for freelance</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 text-4xl sm:text-[56px] font-semibold"
          >
            <p>Hi! I'm</p>
            <div className="bg-white rounded-full px-6 py-2 text-[38px]">Mohan S P</div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.4 }}
           className="flex place-items-center gap-2">
              <p className="text-[#001424] font-semibold text-[56px]">a</p>
              <div className="bg-[#001424] px-6 py-2 text-4xl md:text-[38px] text-white rounded-full">Web developer</div>
              
            </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-[#001424] font-semibold text-[30px] sm:text-[48px] lg:text-[56px] leading-tight"
          >
            transforming ideas into flawless, high-performance digital solutions
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="text-[#3B5766] text-lg sm:text-xl font-medium max-w-3xl mx-auto md:mx-0"
          >
            I build innovative, high-performance websites that seamlessly blend design, development, and user experience.
          </motion.p>
        </motion.div>
      </div>
      <div className="h-[100px] flex items-center justify-center mt-6">
        <motion.a 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 2 }}
          href="#projects"
          className="bg-[#ED8F55] flex items-center cursor-pointer  justify-center gap-2 font-semibold text-lg sm:text-xl w-[250px] sm:w-[285px] rounded-full py-3 px-6 hover:scale-105 transition-transform"
        >
          See my projects
          <Image src="/Return.png" width={40} height={30} alt="return" />
        </motion.a>
      </div>
    </div>
  );
};

export default Home;