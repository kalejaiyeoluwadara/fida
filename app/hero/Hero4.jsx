import React from "react";
import { BsChevronContract } from "react-icons/bs";
function Hero4() {
  return (
    <main className="my-[100px] px-6 sm:px-12">
      <div className="flex items-center justify-center flex-col text-center">
        <h1 className="leading-tight clear-start text-2xl sm:text-5xl">
          Key Aspects of Our <br /> Digital Marketing Agency
        </h1>
        <p className="text-gray-400 mt-3 sm:w-[400px] text-sm sm:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          velit omnis eaque ipsum veritatis{" "}
        </p>
      </div>
      <section className="grid mt-[70px] gap-4 sm:grid-cols-2">
        <div className=" h-auto sm:h-[400px] flex flex-col justify-between w-auto bg-[#F8F8F8] gap-5 sm:gap-0 rounded-[30px] p-6 ">
          {/* item 1 */}
          <div className="flex border-b border-gray-200 pb-6 flex-col gap-2">
            <div className="flex gap-2 items-center sm:justify-normal justify-center ">
              <BsChevronContract />
              <h2 className="Medium text-base w-[180px] text-center sm:text-start sm:w-auto sm:text-xl">
                Collaborative Partnership Approach
              </h2>
            </div>
            <p className="text-gray-500 sm:text-base text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              vitae culpa repellendus voluptate soluta et debitis aliquam,
              dolorum
            </p>
          </div>
          {/* item 2 */}
          <div className="flex border-b border-gray-200 pb-6 flex-col gap-2">
            <div className="flex gap-2 items-center sm:justify-normal justify-center ">
              <BsChevronContract />
              <h2 className="Medium text-base w-[180px] text-center sm:text-start sm:w-auto sm:text-xl">
                Collaborative Partnership Approach
              </h2>
            </div>
            <p className="text-gray-500 sm:text-base text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              vitae culpa repellendus voluptate soluta et debitis aliquam,
              dolorum
            </p>
          </div>
          {/* item 3 */}
          <div className="flex  flex-col gap-2">
            <div className="flex gap-2 items-center sm:justify-normal justify-center ">
              <BsChevronContract />
              <h2 className="Medium text-base w-[180px] text-center sm:text-start sm:w-auto sm:text-xl">
                Collaborative Partnership Approach
              </h2>
            </div>
            <p className="text-gray-500 sm:text-base text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              vitae culpa repellendus voluptate soluta et debitis aliquam,
              dolorum
            </p>
          </div>
        </div>
        <div className="h-[400px] w-auto bg-[#F8F8F8] rounded-[30px] p-6 "></div>
      </section>
    </main>
  );
}

export default Hero4;
