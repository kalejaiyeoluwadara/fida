import React from "react";
import {
  FaChartPie,
  FaCog,
  FaPalette,
  FaBolt,
  FaMobileAlt,
  FaUsers,
} from "react-icons/fa"; // Import icons

function Hero3() {
  const services = [
    {
      title: "Conversion Rate Optimization",
      description:
        "Enhance your website's user experience and drive higher conversions with our optimization strategies.",
      icon: <FaChartPie size={16} className="text-blue-500" />,
    },
    {
      title: "Advanced Automation",
      description:
        "Streamline your workflows and improve efficiency with cutting-edge automation tools.",
      icon: <FaCog size={16} className="text-green-500" />,
    },
    {
      title: "Creative Branding",
      description:
        "Develop a unique brand identity that resonates with your audience and stands out in the market.",
      icon: <FaPalette size={16} className="text-purple-500" />,
    },
    {
      title: "Performance Marketing",
      description:
        "Achieve measurable results with our targeted performance marketing campaigns.",
      icon: <FaBolt size={16} className="text-yellow-500" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Create user-friendly and responsive mobile applications tailored to your business needs.",
      icon: <FaMobileAlt size={16} className="text-red-500" />,
    },
    {
      title: "Customer Engagement",
      description:
        "Foster deeper connections with your audience through effective engagement strategies.",
      icon: <FaUsers size={16} className="text-orange-500" />,
    },
  ];

  return (
    <main id="services" className="my-[100px]">
      {/* Header Section */}
      <div className="flex items-center justify-center flex-col text-center">
        <h1 className="leading-tight clear-start text-2xl sm:text-5xl">
          Digital Excellence with <br /> Our Additional Services
        </h1>
        <p className="text-gray-400 mt-3 sm:w-[400px] text-base">
          Elevate your business with specialized services designed to deliver
          exceptional results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-full mt-[70px] px-12 sm:gap-0 gap-6 grid sm:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex box ${
              index % 2 === 1 ? "bg-gray-50" : ""
            } border-b border-gray-100 h-auto sm:h-[250px] items-center justify-center flex-col text-center`}
          >
            {/* Icon */}
            <div className="h-[40px] w-[40px] flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
              {service.icon}
            </div>

            {/* Title & Description */}
            <div className="mt-4">
              <h4 className="text-xl Medium">{service.title}</h4>
              <p className="mt-2 text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Hero3;
