'use client'
import {  useState } from "react";
import Image from "next/image";

const TechScroll = () => {
  const [isPaused, setIsPaused] = useState(false);
  
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

export default TechScroll;
