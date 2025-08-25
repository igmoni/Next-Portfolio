import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      id="services"
      className="bg-[#001424] flex flex-col gap-10 w-full h-auto px-5 sm:px-10 md:px-20 lg:px-[100px] py-[50px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4">
        <p className="text-2xl font-semibold text-[#027DD4]">SERVICES</p>
        <div className="w-full rounded-full bg-[#D9D9D9] h-[5px]">
          <motion.span
            className="block w-[5%] rounded-full bg-[#027DD4] h-full"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "5%" } : {}}
            transition={{ duration: 0.8 }}
          ></motion.span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center place-items-center">
        {[
          {
            src: "/Frontend-dev.jpg",
            title: "Front-end development",
            desc: "I specialize in crafting static, responsive websites that ensure a seamless user experience across all devices",
            button: true,
          },
          {
            src: "/ui-ux.jpg",
            title: "UI/UX Designer",
            desc: "I design intuitive, responsive interfaces for a seamless user experience across all devices.",
            button: true,
          },
          {
            src: "/fullStack.jpg",
            title: "Full-stack development",
            desc: "I build dynamic, scalable websites with both front-end and back-end solutions for a complete web experience",
            button: false,
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[350px] h-auto p-5 flex flex-col gap-5 items-center rounded-md bg-[#323846]"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Image
              src={service.src}
              width={330}
              height={200}
              alt={service.title}
              className="rounded-md w-full h-auto"
            />
            <div className="text-white flex flex-col gap-3 items-center text-center">
              <p className="text-3xl font-semibold">{service.title}</p>
              <p className="text-md">{service.desc}</p>
              {service.button ? (
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=igmonii.21@gmail.com&su=Service Inquiry&body=Hello, I’d like to inquire about your services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ED8F55] flex items-center justify-center gap-2 font-semibold text-lg sm:text-xl w-[250px] sm:w-[285px] rounded-full py-3 px-6 hover:scale-105 transition-transform"
                >
                  Book Now
                </a>
              ) : (
                <p className="text-[#ED8F55] font-semibold text-3xl">
                  (Coming soon)
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
