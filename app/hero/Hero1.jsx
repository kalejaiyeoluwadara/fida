import React from "react";
import Image from "next/image";
import { images } from "../utils";
import { LuArrowUpRight } from "react-icons/lu";
function Hero1() {
  return (
    <main className="flex h-full pb-[100px] mt-[100px] w-full justify-between relative sm:pr-0 pr-8 pl-8  sm:flex-row flex-col">
      <div className="sm:w-[50%]">
        <h1 className="sm:w-[50px] text-5xl sm:text-start text-center  sm:text-7xl  ">
          Digital Marketing Expertise
        </h1>
        <div className=" mt-[50px] sm:mt-[100px]">
          <p className=" sm:text-start sm:text-xl text-gray-600 sm:w-[90%] text-center ">
            At <span className="text-black font-semibold">FIDA</span>, we take
            pride in unpalleled Digital Marketing Expertise, seamlessly blending
            creativity with data-driven strategies to propel your brand to new
            heights in the digital landscape.
          </p>
          <div className="mt-[30px] flex gap-8">
            <button className="text-white bg-black rounded-full w-[170px] h-[55px] sm:h-[60px] flex justify-center group gap-2 items-center">
              <LuArrowUpRight className="group-hover:translate-x-[-4px] transition-all  " />
              Get in touch
            </button>
            <button className="text-black hover:font-semibold transition-all rounded-full w-[170px] h-[50px] ">
              Learn More
            </button>
          </div>
          <hr className="my-12" />
          <div>
            <h3 className="  text-xl sm:mb-0 mb-6 sm:text-3xl sm:tracking-wide ">
              We harness the power of of cutting-edge tools and platforms to
              ensure your brand stands out in a crowded digital space.
            </h3>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={images.hero}
          alt=""
          className=" h-[400px] sm:h-[750px] sm:absolute sm:-right-12 top-0 object-cover w-[600px] rounded-[25px]  "
        />
      </div>
    </main>
  );
}

export default Hero1;
