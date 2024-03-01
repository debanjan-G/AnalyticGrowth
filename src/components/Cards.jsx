import React from "react";
import Card from "./Card";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white min-h-[65vh] flex w-full justify-around flex-wrap">
      <Card
        imgSrc={Single}
        cardTitle="Single User"
        price="₹11,000"
        storage="500 GB"
        noOfUsers="1 User"
        sendingLimit="2"
      />

      <Card
        imgSrc={Double}
        cardTitle="Partnership"
        price="₹15,000"
        storage="1 TB"
        noOfUsers="3 Users"
        sendingLimit="10"
      />

      <Card
        imgSrc={Triple}
        cardTitle="Group Account"
        price="₹22,500"
        storage="5 TB"
        noOfUsers="10 Users"
        sendingLimit="20"
      />
    </div>
  );
};

export default Cards;
