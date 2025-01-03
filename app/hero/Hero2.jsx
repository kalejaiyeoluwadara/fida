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
          className="h-[600px] object-cover w-[500px] rounded-[25px]  "
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
        <div className="mt-10 flex gap-3 flex-wrap">
          {/* card */}
          {[1, 2, 3, 4].map((d, id) => {
            return (
              <div className="w-[220px]  border border-gray-300 h-[150px] flex flex-col gap-4 px-4 py-3 rounded-[20px] ">
                <div className="h-[40px] w-[40px] rounded-full border "></div>
                <p className="mt-4 text-xl font-[500]">
                  Strategic Digital Campaigns
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Hero2;
