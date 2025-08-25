import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-[100px] pt-[50px] md:pt-[30px] md:h-[70px] w-full  px-[100px] items-center font-semibold  justify-evenly bg-transparent'>
      <ul className="hidden md:flex w-full items-center text-xl justify-evenly">
        <li className="hover:drop-shadow-lg"><a href="#home">Home</a></li>
        <li className="hover:drop-shadow-lg"><a href="#about">About me</a></li>
        <li className="hover:drop-shadow-lg"><a href="#stack">Stack</a></li>
      </ul>
      <Image src={'/Moni.png'} width={150} height={90} alt='Moni'/>
      <ul className=" w-full items-center text-xl font-semibold justify-evenly hidden md:flex">
        <li className="hover:drop-shadow-lg"><a href="#projects">Projects</a></li>
        <li className="hover:drop-shadow-lg"><a href="#services">Services</a></li>
        <li className="text-white bg-[#001424] p-3 rounded-full px-4"><a href="#contact">Contact me</a></li>
      </ul>
    </div>
  )
}

export default Navbar
