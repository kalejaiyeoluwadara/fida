import Image from "next/image";
import React from "react";
import { images } from "../utils";
import Link from "next/link";

function Nav() {
  return (
    <div className="fixed z-50 top-0 left-0 bg-white px-8 py-2 flex w-full justify-between items-center ">
      <div>
        <Image src={images.logo} alt="Logo" className="h-[60px] w-[60px] " />
      </div>
      <div className=" hidden sm:flex gap-12">
        <Link href={"/"} className="link">
          About
        </Link>
        <Link href={"/"} className="link">
          Services
        </Link>
        <Link href={"/"} className="link">
          Pricing
        </Link>
        <Link href={"/"} className="link">
          Contact
        </Link>
      </div>
      <div className="hidden sm:flex gap-4">
        <p className="px-2 border-b-[1.1px] border-black Medium">
          fida@gmail.com
        </p>
        <p className="px-2 border-b-[1.1px] border-black Medium">
          Get in Touch
        </p>
      </div>
    </div>
  );
}

export default Nav;
