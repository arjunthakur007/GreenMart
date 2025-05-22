import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative ">
      <img
        src="https://wallpapercrafter.com/th8006/1533701-emerald-green-gradation-blur-backgrounds-green.jpg"
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src="https://as1.ftcdn.net/v2/jpg/01/69/19/54/1000_F_169195456_8ZS5CwKNvB4LcIygftE7uhwatw4TcD9b.jpg"
        alt="banner"
        className="w-full md:hidden"
      />

      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
          Freshness you can trust, Savings you will love!
        </h1>
        <div className="flex items-center mt-6 font-medium">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-green-700 hover:bg-green-500 transition rounded text-white cursor-pointer"
          >
            Shop now!
          </Link>
          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore deals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
