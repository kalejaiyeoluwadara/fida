"use client";
import Image from "next/image";
import React, { useState } from "react";
import { images } from "../utils";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { Bs0Circle, BsMenuApp } from "react-icons/bs";
import Menu from "./Menu";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed z-50 top-0 left-0 bg-white px-2 sm:px-8 py-2 flex w-full justify-between items-center ">
      <Link href={"/"}>
        <Image src={images.logo} alt="Logo" className="h-[60px] w-[60px] " />
      </Link>
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
      <div
        onClick={() => setIsMenuOpen(true)}
        className="w-[50px] rounded-full sm:hidden h-[34px] cursor-pointer hover:bg-opacity-70 transition-all bg-black text-white flex items-center justify-center "
      >
        <IoMenu />
      </div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default Nav;
