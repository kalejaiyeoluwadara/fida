import React from "react";
import Image from "next/image";
import { images } from "../utils";
function Hero2() {
  return (
    <main className="flex h-full pb-[100px] mt-[100px] w-full justify-between relative px-8 ">
      <div>
        <Image
          src={images.hero}
          alt=""
          className="h-[500px] object-cover w-[500px] rounded-[25px]  "
        />
      </div>
      <div className="w-[50%]">
        <h1 className=" text-5xl leading-tight ">
          Empowering Your <br /> Digital Presence
        </h1>
        <div className="mt-[20px]">
          <p className="w-[90%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium et asperiores sit ut atque tenetur, eum reprehenderit
            deleniti quibusdam quam vel in fugit nam recusandae labore molestias
            reiciendis optio excepturi!
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero2;
