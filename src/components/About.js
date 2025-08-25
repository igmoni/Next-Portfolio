'use client'
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const TechScroll = () => {
  const [isPaused, setIsPaused] = useState(true);
  
  const techIcons = [
    { src: "/Figma.png", alt: "Figma", className: "rounded-lg" },
    { src: "/JS.png", alt: "JavaScript", className: "rounded-md" },
    { src: "/reactjs.png", alt: "React", className: "rounded-md" },
    { src: "/Nextjs.png", alt: "Next.js", className: "rounded-full" },
    { src: "/tailwindcss.png", alt: "Tailwind CSS", className: "rounded-md" },
    { src: "/Typescript.png", alt: "TypeScript", className: "rounded-md" },
    { src: "/Github.png", alt: "GitHub", className: "rounded-md" }
  ];
  
  // Duplicate the array to create a seamless loop
  const allIcons = [...techIcons, ...techIcons];

  return (
    <div 
      className="relative rounded-2xl  w-[300px] overflow-hidden" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`flex gap-10 w-max ${isPaused ? 'paused' : ''}`}
        style={{
          animation: 'scroll 20s linear infinite',
        }}
      >
        {allIcons.map((icon, index) => (
          <Image 
            key={index} 
            src={icon.src} 
            width={50} 
            height={50} 
            alt={icon.alt} 
            className={icon.className} 
          />
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // 20% visible triggers animation

  return (
    <motion.div
      ref={ref}
      id="about"
      className="py-16 px-6 md:px-12 lg:px-24 xl:px-32 h-auto bg-white w-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4">
        <p className="text-2xl font-semibold text-[#027DD4]">ABOUT</p>
        <div className="w-full rounded-full bg-[#D9D9D9] h-[5px]">
          <span className="block w-[5%] rounded-full bg-[#027DD4] h-full"></span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <motion.div
          className="flex flex-col gap-10 py-7 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-lg text-[#486270]">
          I craft high-performance, visually stunning web experiences designed to elevate your brand and drive real business growth. With a perfect blend of cutting-edge development and intuitive design, I help businesses stand out, connect with their audience, and achieve lasting success
          </div>
          <div id="stack" className="flex flex-col gap-3">
            <p className="px-3 py-2 w-[80px] rounded-md border-2 border-[#D9D9D9] text-[#486270] text-lg">SKILLS</p>
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4">
              <p className="px-4 py-3 w-[120px] bg-white shadow-xl rounded-md">Web design</p>
              <p className="px-4 py-3 w-[130px] bg-white shadow-xl rounded-md">UI/UX design</p>
              <p className="px-4 py-3 w-[210px] bg-white shadow-xl rounded-md">Full-stack development</p>
              <p className="px-4 py-3 w-[100px] bg-white shadow-xl rounded-md">Marketing</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="px-3 py-2 w-[130px] rounded-md border-2 border-[#D9D9D9] text-[#486270] text-lg">TECH SKILLS</p>
            <TechScroll />
          </div>
        </motion.div>
        {/* Right Section */}
        <motion.div
          className="flex flex-col gap-10 py-7 w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-lg">
          As a Bachelor of Computer Applications (BCA) student, I’ve built a strong foundation in both front-end and back-end development, allowing me to create efficient, scalable web solutions. By combining technical expertise with a deep understanding of user experience, I help businesses establish a powerful online presence, attract more customers, and drive measurable growth.
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5">
            {[
              { title: "Next JS", desc: "React framework for fast, scalable web apps", percent: 92 },
              { title: "Figma", desc: "Collaborative UI/UX design tool", percent: 74 },
              { title: "Github", desc: "Version control and code collaboration", percent: 80 },
            ].map((skill, index) => (
              <div
                key={index}
                className="w-full max-w-[400px] h-[150px] rounded-lg bg-[#001424] flex items-center justify-center px-5 gap-5"
              >
                <div className="text-white">
                  <p className="text-3xl font-semibold">{skill.title}</p>
                  <p className="text-lg">{skill.desc}</p>
                </div>
                <div className="h-[80%] w-[2px] bg-[#5B7C97]"></div>
                <div className="text-[56px] font-bold text-[#5B7C97]">{skill.percent}%</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
