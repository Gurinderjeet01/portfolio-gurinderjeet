import React from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen">
      <div className="max-w-[1080px] mx-auto flex flex-col justify-center h-full py-20">
        <p className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-[#5270be] p-2">
          Skills
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl shadow-black/60 hover:scale-105 ease-in duration-500 ">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/html.png"
                  alt="HTML"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-2xl font-semibold">HTML</div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-black/60 hover:scale-105 ease-in duration-500 ">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/css.png"
                  alt="CSS"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-2xl font-semibold">CSS</div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-black/60 hover:scale-105 ease-in duration-500 ">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/javascript.png"
                  alt="JS"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-2xl font-semibold">JavaScript</div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-black/60 hover:scale-105 ease-in duration-500 ">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  alt="React"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-2xl font-semibold">React</div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-black/60 hover:scale-105 ease-in duration-500 ">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/nextjs.png"
                  alt="Next.js"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-2xl font-semibold">Next.js</div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-black/60 hover:scale-105 ease-in duration-500 ">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/tailwind.png"
                  alt="Tailwind"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-2xl font-semibold">Tailwind</div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}
