import React from "react";

function Footer() {
  return (
    <div className=" h-auto sm:h-[400px] px-12 sm:px-20  w-full flex bg-[#1F1F1F] justify-between items-center flex-col ">
      <div className="text-white flex sm:flex-row flex-col justify-between mt-[70px] sm:gap-40 items-start gap-8 sm:items-center w-full">
        <div>
          <h3 className="text-[#6f6d6d] Medium uppercase ">Email</h3>
          <p>fida@marketing.agency</p>
        </div>
        <div>
          <h3 className="text-[#6f6d6d] Medium uppercase "> Social</h3>
          <p>Linkedin</p>
          <p>twitter</p>
        </div>
        <div>
          <h3 className="text-[#6f6d6d] Medium uppercase "> Services</h3>
          <p>FAQ's</p>
        </div>
      </div>
      <div className="pt-12 sm:mt-0 mt-8 pb-5 w-full flex items-center justify-center border-stone-700 border-t">
        <p className="text-stone-500 text-xs sm:text-sm">
          Copright @FIDA 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
