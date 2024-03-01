import React from "react";

const Signup = () => {
  return (
    <div className=" grid mx-auto my-20 md:grid-cols-2 py-6 px-8 min-h-[33vh] place-content-center md:px-12">
      <div className="text-white md:mx-4">
        <h1 className="font-bold text-3xl my-2">
          Want tips and tricks to optimize your flow?
        </h1>
        <p className="my-2">Sign up to our newsletter and stay up to date.</p>
      </div>
      <div className="md:mx-4">
        <form
          action=""
          className="flex flex-col  md:flex-row md: justify-start items-center"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
            className="p-2 rounded-md w-full mx-4 md:max-h-10  min-w-fit"
          />
          <button className=" bg-[#FACC15] text-black rounded-md py-2 px-6 font-semibold min-w-fit max-w-2/4 mx-auto md:mx-0 my-4">
            Notify Me
          </button>
        </form>
        <p className="text-white md:text-center">
          We care about the protection of your data. Read our{" "}
          <a href="" className="text-[#FACC15] underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
