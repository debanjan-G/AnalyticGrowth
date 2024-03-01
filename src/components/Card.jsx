/* eslint-disable react/prop-types */
import React from "react";

const Card = ({
  imgSrc,
  cardTitle,
  price,
  storage,
  noOfUsers,
  sendingLimit,
}) => {
  return (
    <div className="m-10 shadow-lg rounded-md  p-10 text-center hover:bg-slate-100 hover:transition hover:transform hover:scale-105 hover:duration-500 min-w-fit w-[75%] lg:w-[27%] md:w-[45%]">
      <img
        src={imgSrc}
        alt=""
        className="size-20 object-contain mx-auto my-2"
      />
      <p className="my-2 font-semibold text-xl">{cardTitle}</p>
      <h1 className="my-2 font-bold text-2xl">{price}</h1>
      <hr />
      <p className="my-2">{storage} Storage</p>
      <hr />
      <p className="my-2">{noOfUsers} allowed</p>
      <hr />
      <p className="my-2">Send up to {sendingLimit} GB</p>
      <hr />
      <button className=" bg-[#FACC15] text-black rounded-md py-2 px-10 font-semibold my-4 ">
        Start Trial
      </button>
    </div>
  );
};

export default Card;
