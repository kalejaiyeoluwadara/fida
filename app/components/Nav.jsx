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
        <Link href="#about" className="link text-lg block">
          About
        </Link>
        <Link href="#services" className="link text-lg block">
          Services
        </Link>
        <Link href="#pricing" className="link text-lg block">
          Pricing
        </Link>
        <Link href="#contact" className="link text-lg block">
          Contact
        </Link>
      </div>
      <div className="hidden sm:flex gap-4">
        <p className="px-2 border-b-[1.1px] cursor-pointer border-black Medium">
          <Link href={"mailto:fida@gmail.com"} target="_blank">
            fida@gmail.com
          </Link>
        </p>
        <p className="px-2 border-b-[1.1px] cursor-pointer border-black Medium">
          <Link href={"#contact"}>Get in Touch</Link>
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
