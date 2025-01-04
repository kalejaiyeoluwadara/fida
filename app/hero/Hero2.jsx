import React from "react";
import Image from "next/image";
import { images } from "../utils";
import { FaBullhorn, FaChartLine, FaSearch, FaPenNib } from "react-icons/fa"; // Importing icons

function Hero2() {
  const services = [
    {
      title: "Strategic Digital Campaigns",
      icon: <FaBullhorn size={15} className="text-blue-500" />, // Icon for campaigns
    },
    {
      title: "Data-Driven Analytics Tools",
      icon: <FaChartLine size={15} className="text-green-500" />, // Icon for analytics
    },
    {
      title: "Search Engine Optimization",
      icon: <FaSearch size={15} className="text-orange-500" />, // Icon for SEO
    },
    {
      title: "Engaging Content Creation",
      icon: <FaPenNib size={15} className="text-purple-500" />, // Icon for content
    },
  ];

  return (
    <main
      id="about"
      className="flex sm:my-[200px] h-full gap-12 my-[40px] w-full sm:flex-row flex-col justify-between relative px-8"
    >
      {/* Image Section */}
      <div className="w-[55%] sm:block hidden flex-shrink-0">
        <Image
          src={images.hero}
          alt=""
          className="h-[300px] sm:h-[600px] object-cover sm:w-full w-[500px] rounded-[25px]"
        />
      </div>

      {/* Text Section */}
      <div className="sm:text-start text-center">
        <h1 className="text-3xl Medium sm:text-5xl leading-tight">
          Empowering Your <br /> Digital Presence
        </h1>
        <div className="mt-[20px]">
          <p className="sm:w-full">
            By partnering with us, you benefit from a holistic approach to
            digital marketing that combines strategic thinking, data-driven
            insights, SEO expertise, and compelling content creation.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6 gap-3">
          {services.map((service, id) => (
            <div
              key={id}
              className="w-full sm:w-auto border border-gray-300 h-[150px] flex flex-col gap-4 px-6 sm:px-4 py-3 rounded-[20px]"
            >
              {/* Icon inside the ellipse */}
              <div className="h-[40px] w-[40px] rounded-full border flex items-center justify-center">
                {service.icon}
              </div>
              {/* Service Title */}
              <p className="mt-4 sm:px-0 px-3 text-xl font-[500]">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Hero2;
