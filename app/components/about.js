import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1080px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-[#5270be] p-2">
            About Me
          </h1>

          <p className=" sm:text-xl md:text-2xl  font-serif font-light p-2">
            I am a front-end web developer as well as Mobile application
            developer. I have a passion for web development and love to create
            new and exciting things. I am always looking for new challenges and
            ways to improve my skills. I am a quick learner and love to work
            with new technologies. I pursued my diploma in Software Development
            from Southern Alberta Institute of Technology (SAIT), Calgary. I
            have experience working with HTML, CSS, JavaScript, React, and
            Next.js. I am always looking for new opportunities to grow and
            expand my knowledge.
          </p>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-black/60 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-500">
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Software Developer"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
