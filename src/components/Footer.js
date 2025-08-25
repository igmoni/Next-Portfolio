import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      id="contact"
      className="w-full h-auto px-5 sm:px-10 md:px-20 lg:px-[100px] py-[50px] flex flex-col md:flex-row gap-[50px] items-center md:items-start"
    >
      {/* Left Side */}
      <motion.div
        className="text-4xl flex flex-col gap-10 md:text-6xl text-[#001424] font-semibold text-center md:text-left md:pt-10 md:max-w-[700px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Let’s create something powerful and transformative, together
        <p className="text-[#3B5766] font-semibold text-lg md:text-xl">
          Let’s make an impact
        </p>
      </motion.div>

      {/* Divider */}
      <div className="hidden md:block h-[350px] w-[2px] bg-[#3B5766] rounded-full"></div>

      {/* Right Side */}
      <motion.div
        className="w-full max-w-[450px] flex flex-col gap-10 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src={"/Moni3.jpg"}
            width={80}
            height={80}
            alt="Moni"
            className="rounded-full border-[#001424] shadow-[0_0_10px_#001424] border-2 object-cover object-top w-[80px] h-[80px] bg-red-300 flex-shrink-0 min-w-[80px] min-h-[80px]"
          />

          <div className="w-full">
            <p className="font-semibold text-lg">Mohan S P</p>
            <p className="text-[#3B5766]">Web Developer, Designer</p>
            <div className="flex justify-center md:justify-start gap-3 text-xl mt-2">
              <a
                href="https://instagram.com/_igmoni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:drop-shadow-lg transition" />
              </a>
              <a
                href="https://x.com/_igmoni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="hover:drop-shadow-lg transition" />
              </a>
              <a
                href="https://linkedin.com/igmoni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:drop-shadow-lg transition" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[#3B5766] font-semibold text-lg md:text-xl">
            Contact me
          </p>
          <p className="text-2xl md:text-3xl font-semibold">
            igmonii.21<span className="text-[#ED8F55]">@</span>gmail.com
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center">
          <p className="text-lg">
            Need a <span className="font-semibold">top-tier web developer</span>{" "}
            to bring your vision to life? Let’s create something amazing.
          </p>
          <a 
           href="https://mail.google.com/mail/?view=cm&fs=1&to=igmonii.21@gmail.com&su=Collaboration Inquiry&body=Hello, I’d love to collaborate with you!"
           target="_blank"
           rel="noopener noreferrer"
           className="text-white bg-[#ED8F55] flex items-center justify-center gap-2 px-5 py-3 mt-3 rounded-md hover:bg-[#D97846] transition">
            Let's Collaborate
            <Image
              src={"/white-return.png"}
              width={30}
              height={30}
              alt="Return"
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
