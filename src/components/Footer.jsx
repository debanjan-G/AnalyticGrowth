import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className=" text-gray-500 gap-10 flex flex-col md:flex-row md:flex-wrap flex-wrap items-center justify-center p-4 h-42">
      <div className="text-left w-full items-center md:w-1/3 md:items-start min-w-fit flex flex-col justify-center  my-4 ">
        <h1 className="w-full text-3xl text-[#FACC15] font-bold  text-center md:text-left my-2 ">
          AnalyticGrowth.
        </h1>
        <p className="my-2">© 2024 AnalyticGrowth. All Rights Reserved.</p>
        <div className="flex gap-5 my-4 justify-start">
          <CiFacebook className="text-2xl " />
          <FaGithub className="text-2xl " />
          <FaInstagram className="text-2xl " />
          <FaXTwitter className="text-2xl " />
          <CiLinkedin className="text-2xl " />
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap ">
        <div className="flex flex-col items-center mx-auto p-4">
          <h1 className="font-bold text-lg">Solutions</h1>
          <a className="my-1.5">Analytics</a>
          <a className="my-1.5">Marketing</a>
          <a className="my-1.5">Commerce</a>
          <a className="my-1.5">Insights</a>
        </div>

        <div className="flex flex-col items-center mx-auto p-4">
          <h1 className="font-bold text-lg">Support</h1>
          <a className="my-1.5">Pricing</a>
          <a className="my-1.5">Documentation</a>
          <a className="my-1.5">Guides</a>
          <a className="my-1.5">API Status</a>
        </div>

        <div className="flex flex-col items-center p-4 mx-auto">
          <h1 className="font-bold text-lg">Company</h1>
          <a className="my-1.5">About</a>
          <a className="my-1.5">Blog</a>
          <a className="my-1.5">Jobs</a>
          <a className="my-1.5">Press</a>
          <a className="my-1.5">Partners</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
