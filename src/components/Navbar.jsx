import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const handleMenuClick = () => {
    setshowMenu((prev) => !prev);
  };

  return (
    <div className="flex gap-8 max-h-24 items-center p-4 z-1">
      <h1 className="w-full text-3xl text-[#FACC15] font-bold text-left">
        AnalyticGrowth.
      </h1>
      <div className="text-white font-semibold w-full hidden md:flex items-center justify-end ">
        <a href="" className="mx-4">
          Home
        </a>
        <a href="" className="mx-4">
          Account
        </a>
        <a href="" className="mx-4">
          Sign in
        </a>
        <a href=""></a>
        <button className="bg-white text-black px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>
      {!showMenu ? (
        <div className="text-white md:hidden" onClick={handleMenuClick}>
          <AiOutlineMenu size={25} />
        </div>
      ) : (
        <div className="text-white md:hidden" onClick={handleMenuClick}>
          <IoMdClose size={25} />
        </div>
      )}

      <div
        className={
          showMenu
            ? "fixed pt-24 top-0 left-0 w-2/4 ease-in duration-200 md:hidden z-2 bg-black h-full"
            : "fixed pt-24 top-0 left-[-100%] w-2/4 ease-in-out duration-500 md:hidden"
        }
      >
        <ul className="text-white text-left uppercase p-4 ">
          <li className="p-4 border-b border-slate-500">Home</li>
          <li className="p-4 border-b border-slate-500">Company</li>
          <li className="p-4 border-b border-slate-500">Resources</li>
          <li className="p-4 border-b border-slate-500">About</li>
          <li className="p-4  border-b border-slate-500">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
