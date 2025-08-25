"use client";
import About from "@/components/About";
import Client from "@/components/Client";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import React from "react";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="">
      <div
        id="home"
        className="w-full h-auto md:h-auto  bg-gradient-to-bl from-[#BCF5FF] to-[#63B1FF]"
      >
        <Home />
      </div>
      <About />
      <Client />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
};

export default page;
