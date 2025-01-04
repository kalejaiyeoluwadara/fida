import React from "react";
import { BsPeople, BsGraphUp, BsMegaphone } from "react-icons/bs"; // Importing relevant icons

function Hero4() {
  return (
    <main className="my-[100px] px-6 sm:px-12">
      {/* Header Section */}
      <div className="flex items-center justify-center flex-col text-center">
        <h1 className="leading-tight clear-start text-2xl sm:text-5xl">
          Key Aspects of Our <br /> Digital Marketing Agency
        </h1>
        <p className="text-gray-400 mt-3 sm:w-[400px] text-sm sm:text-base">
          Explore the core values and strategies that define our success and
          drive your growth.
        </p>
      </div>

      {/* Content Section */}
      <section className="grid mt-[70px] gap-4 sm:grid-cols-2">
        {/* Left Section */}
        <div className="h-auto sm:h-[400px] flex flex-col justify-between w-auto bg-[#F8F8F8] gap-5 sm:gap-0 rounded-[30px] p-6">
          {/* Item 1 */}
          <div className="flex border-b border-gray-200 pb-6 flex-col gap-2">
            <div className="flex gap-4 items-center sm:justify-normal justify-center">
              <BsPeople size={20} className="" />
              <h2 className="Medium text-base w-[180px] text-center sm:text-start sm:w-auto sm:text-xl">
                Collaborative Partnership Approach
              </h2>
            </div>
            <p className="text-gray-500 sm:text-base text-sm">
              We work closely with our clients to ensure alignment with their
              goals, fostering a culture of trust and teamwork.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex border-b border-gray-200 pb-6 flex-col gap-2">
            <div className="flex gap-4 items-center sm:justify-normal justify-center">
              <BsGraphUp size={20} className="" />
              <h2 className="Medium text-base w-[180px] text-center sm:text-start sm:w-auto sm:text-xl">
                Data-Driven Strategies
              </h2>
            </div>
            <p className="text-gray-500 sm:text-base text-sm">
              Our decisions are backed by in-depth analytics and insights,
              ensuring measurable and sustainable growth.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center sm:justify-normal justify-center">
              <BsMegaphone size={20} className="" />
              <h2 className="Medium text-base w-[180px] text-center sm:text-start sm:w-auto sm:text-xl">
                Innovative Marketing Campaigns
              </h2>
            </div>
            <p className="text-gray-500 sm:text-base text-sm">
              Creativity and innovation drive our campaigns, helping you stand
              out in a crowded digital marketplace.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-[400px] w-auto bg-[#F8F8F8] rounded-[30px] p-6 flex items-center justify-center">
          <p className="text-gray-500 text-center sm:text-lg">
            Partner with us to transform your digital presence and achieve
            unparalleled results.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Hero4;
