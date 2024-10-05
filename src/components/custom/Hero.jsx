import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col item-center mx-56 gap-9 justify-center ">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]"> Your Next Adventure with AI:</span>
        Personalized Itineraries at your FingerTips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner
      </p>
      <Link to="/CreateTrip">
        <Button className="w-44">Get Started</Button>
      </Link>
    </div>
  );
};

export default Hero;
