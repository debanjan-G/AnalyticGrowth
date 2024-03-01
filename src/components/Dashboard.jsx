import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-white mt-28 min-w-full min-h-[65vh] p-16 grid md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <img
          src="/src/assets/undraw_Data_re_80ws.png"
          className="h-[75%] mx-auto my-2 object-contain"
          alt=""
        />
      </div>

      <div className="text-center md:text-left flex flex-col justify-center">
        <h1 className="text-[#EAB308] text-lg font-bold uppercase my-2 md:text-xl">
          Data Analytics Dashboard
        </h1>
        <h1 className="text-black text-3xl font-bold my-2 md:text-4xl">
          Manage Data Analytics Centrally
        </h1>
        <p className="text-lg md:text-xl">
          Explore our centralized data analytics feature, offering unified data
          access, consistent analysis, and enhanced collaboration. Gain deeper
          insights and make informed decisions with ease.
        </p>
        <button className=" text-[#FACC15] bg-black rounded-md p-3 font-semibold max-w-[25%] min-w-fit mx-auto md:mx-0 my-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
