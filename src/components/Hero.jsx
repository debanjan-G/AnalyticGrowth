import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="p-6 mt-28 grid min-w-2/4 mx-auto min-h-[65vh] place-content-center text-center">
      <h1 className="text-[#FACC15] text-sm font-bold ">
        GROWING WITH DATA ANALYTICS
      </h1>
      <h1 className="text-white text-5xl font-bold my-4 md:text-7xl">
        Grow with data.
      </h1>
      <h1 className="text-white text-3xl font-bold my-2 md:text-4xl">
        Fast, flexible financing for
        <span className="text-zinc-500">
          <ReactTyped
            className="pl-3 md:pl-5"
            strings={["BTB", "SASS", "BTC"]}
            typeSpeed={60}
            backSpeed={90}
            loop
          />
        </span>
      </h1>
      <p className="text-zinc-500 text-lg font-bold my-2 md:text-2xl">
        Empowering businesses with data-driven growth. Harness the power of
        analytics to elevate your success.
      </p>
      <button className="bg-[#FACC15] rounded-md p-3 font-semibold min-w-[25%] mx-auto my-2">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
