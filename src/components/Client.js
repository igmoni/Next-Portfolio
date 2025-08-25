"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Client = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="py-10 px-5 sm:px-10 md:px-20 lg:px-[150px]  flex flex-col gap-10 bg-[#001424] text-center lg:text-left"
    >
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] text-white leading-snug"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        I design and develop high-performance web applications that seamlessly
        blend creativity and technology, helping businesses scale, attract
        customers, and drive growth.
      </motion.p>
      <div className="flex justify-center lg:justify-start">
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=igmonii.21@gmail.com&su=Client Inquiry&body=Hello, I am interested in becoming your client. Let's discuss further!"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-[200px] sm:w-[220px] md:w-[250px] px-5 py-2 bg-[#ED8F55] text-white text-[16px] sm:text-xl font-semibold flex items-center gap-3 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Become a client
          <Image
            src={"/arrow_right.png"}
            width={30}
            height={30}
            alt="right arrow"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Client;
