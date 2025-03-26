import React, { useState } from "react";
import banner from "@/assets/Banner.png";
import CustomButton from "./CustomButton";

const TrialSection = ({ text, text2 }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative">
      <img src={banner} alt="banner" className="h-full w-full" />
      <div className="flex flex-col items-start absolute z-10 top-24 left-20 w-[359px]">
        <h2 className="text-white  font-inter text-[30px] font-medium leading-[38px] sm:text-[32px] ">
          {text}
        </h2>
        <p className="mt-4 text-white  font-inter text-[16px] font-normal leading-[24px]">
          {text2}
        </p>
        <button
          onClick={"handlePath"}
          className={`group relative mt-4 rounded-md border border-[#fff] 
                   text-[#207C97] text-sm font-medium leading-[20px] py-[12px] px-[16px] 
                   overflow-hidden transition-colors duration-300 
                   ${
                     isClicked
                       ? "bg-[linear-gradient(180deg, #207C97 30.83%, #0A2831 119.17%)] border-[#207C97]"
                       : "bg-white"
                   }`}
        >
          <div className="flex gap-1 items-center relative z-10">
            <span className="relative z-10 transition-colors duration-700 group-hover:text-white">
              {"Try for Free"}
            </span>

            {/* SVG with Hover Effects */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="transition-transform duration-300 group-hover:-rotate-[50deg] relative z-10"
            >
              <path
                d="M2.5 8.98756L14.5265 8.98756L9.85539 4.43159L11.3231 3L18.5 10L11.3231 17L9.85539 15.5684L14.5265 11.0124L2.5 11.0124L2.5 8.98756Z"
                className="fill-[#207C97] transition-colors duration-700 group-hover:fill-white"
              />
            </svg>
          </div>

          {/* Background Hover Effect */}
          <span
            className="absolute rounded-md h-[400%] w-[100%]  inset-0 bg-[#207C97] 
                     transform scale-0 group-hover:scale-100 
                     transition-transform duration-500 ease-out origin-bottom z-0"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default TrialSection;
