import React from "react";
import Image from "next/image";
import { images } from "../utils";
function Hero1() {
  return (
    <main className="flex h-full pb-[100px] mt-[100px] w-full justify-between relative sm:pr-0 pr-8 pl-8  sm:flex-row flex-col">
      <div className="sm:w-[50%]">
        <h1 className="sm:w-[50px] text-5xl sm:text-start text-center  sm:text-7xl  ">
          Digital Marketing Expertise
        </h1>
        <div className=" mt-[50px] sm:mt-[100px]">
          <p className=" sm:text-start sm:w-[80%] text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium et asperiores sit ut atque tenetur, eum reprehenderit
            deleniti quibusdam quam vel in fugit nam recusandae labore molestias
            reiciendis optio excepturi!
          </p>
          <div className="mt-[30px] flex gap-8">
            <button className="text-white bg-black rounded-full w-[170px] h-[55px] sm:h-[60px] ">
              Get in touch
            </button>
            <button className="text-black rounded-full w-[170px] h-[50px] ">
              Learn More
            </button>
          </div>
          <hr className="my-12" />
          <div>
            <h3 className=" text-xl sm:mb-0 mb-6 sm:text-3xl sm:tracking-wide ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolor quam omnis non ex, pariatur laborum! Eum voluptas magni
              suscipit!
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
