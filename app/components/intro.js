"use client";

import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Intro = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1080px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex-col">
          <div>
            <h1 className="flex flex-col text-3xl sm:text-5xl md:text-7xl  font-serif font-medium ">
              <span className="col-span-7">Hello, I am Gurinderjeet </span>
              
            </h1>
          </div>
          <div className="md:block pt-10 w-screen justify-between mx-auto">
            <p className="uppercase tracking-widest text-[#5270be]">
              Connect me:
            </p>
            <div className="flex my-4 items-center mx-auto justify-center w-full sm:w-[80%] ">
              <div className="rounded-full shadow-lg w-fit shadow-black/60 p-3 cursor-pointer hover:scale-105 ease-in duration-100 mx-3">
                <Link href="https://www.linkedin.com/in/gurinderjeet-singh-270326261/">
                <FaLinkedinIn className="text-xl sm:text-2xl md:text-3xl" /></Link>
              </div>
              <div className="rounded-full shadow-lg w-fit shadow-black/60 p-3 cursor-pointer hover:scale-105 ease-in duration-100 mx-3">
                <Link href="https://github.com/Gurinderjeet01">
                <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
                </Link>
              </div>
              <div className="rounded-full shadow-lg w-fit shadow-black/60 p-3 cursor-pointer hover:scale-105 ease-in duration-100 mx-3">
                <Link href="mailto:gurinderjeetsingh01@edu.sai.ca">
                <AiOutlineMail className="text-xl sm:text-2xl md:text-3xl" />
                </Link>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
