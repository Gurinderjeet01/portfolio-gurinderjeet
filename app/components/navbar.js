"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  


  return (
    <nav className=" w-full fixed z-[100] shadow-xl h-20 ">
      <div className="flex justify-between items-center w-full h-full">
        <ul className="hidden md:flex">
          <Link href="#home">
            <li className="ml-5  uppercase hover:border-b">Home</li>
          </Link>
          <Link href="#about">
            <li className="ml-10  uppercase hover:border-b">About</li>
          </Link>
          <Link href="#skills">
            <li className="ml-10  uppercase hover:border-b">Skills</li>
          </Link>
        </ul>
        
      </div>

  
    </nav>
  );
};

export default Navbar;
