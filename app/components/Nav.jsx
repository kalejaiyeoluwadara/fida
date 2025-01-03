import React from "react";

function Nav() {
  return (
    <div className="fixed z-50 top-0 left-0 bg-white px-8 py-5 flex w-full justify-between items-center ">
      <div>FIDA</div>
      <div className="flex gap-3">
        <p>Menu</p>
        <p>Menu</p>
        <p>Menu</p>
        <p>Menu</p>
      </div>
      <div className="flex gap-4">
        <p>fida@gmail.com</p>
        <p>Get in Touch</p>
      </div>
    </div>
  );
}

export default Nav;
