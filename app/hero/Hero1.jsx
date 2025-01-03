import React from "react";
import Image from "next/image";
import { images } from "../utils";
function Hero1() {
  return (
    <main className="flex h-full pb-[100px] mt-[100px] w-full justify-between relative pl-8 ">
      <div className="w-[50%]">
        <h1 className="w-[50px]  text-7xl  ">Digital Marketing Expertise</h1>
        <div className="mt-[200px]">
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium et asperiores sit ut atque tenetur, eum reprehenderit
            deleniti quibusdam quam vel in fugit nam recusandae labore molestias
            reiciendis optio excepturi!
          </p>
          <div className="mt-[30px] flex gap-8">
            <button className="text-white bg-black rounded-full w-[200px] h-[50px] ">
              Get in touch
            </button>
            <button className="text-black rounded-full w-[200px] h-[50px] ">
              Learn More
            </button>
          </div>
          <hr className="my-12" />
          <div>
            <h3 className="text-3xl tracking-wide ">
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
          className="h-[900px] absolute -right-12 top-0 object-cover w-[600px] rounded-[25px]  "
        />
      </div>
    </main>
  );
}

export default Hero1;
