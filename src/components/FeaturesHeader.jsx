import React from "react";
import Salesworx from "@/assets/Salesworx.gif";
import Section from "@/components/common/Section";
import FAQ from "@/components/common/Faq";
import { Link } from "react-router-dom";

const FeaturesHeader = ({handleClick , isClicked}) => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center text-center">
        <img
          src={Salesworx} // Replace with your icon path
          alt="Time-Consuming Manual Research"
          className="w-[100px] h-[100px] mb-[24px]"
        />
      </div>
      <h1 className="text-[#252B37] text-center font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px]">
        Revolutionize Your Sales Journey with{" "}
        <span className="text-[var(--Brand-colour,#207C97)] font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px]">
          Salesworx
        </span>
      </h1>
      <p className="text-[#414651] font-inter text-[16px] font-normal leading-[24px] mt-[16px]">
        Empowering modern sales teams with AI-driven automation, intelligence,
        and hyper-personalization.
      </p>
      <Link to="/login">
        <button
          onClick={handleClick}
          className={`group relative mt-4 rounded-[36px] border border-[#207C97] 
                     text-white text-sm font-medium leading-[20px] py-[12px] px-[16px] 
                     overflow-hidden transition-colors duration-300 
                     ${
                       isClicked
                         ? "bg-[#ADD8E6] border-[#87CEEB]"
                         : "bg-[#207C97]"
                     }`}
        >
          <div className="flex gap-1 items-center relative z-10">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#207C97]">
              Get Started Today
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
                className="fill-white transition-colors duration-700 group-hover:fill-[#207C97]"
              />
            </svg>
          </div>

          {/* Background Hover Effect */}
          <span
            className="absolute rounded-full h-[300px] w-[250px] bg-white 
            scale-0 group-hover:scale-100 
            transition-transform duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
            origin-bottom inset-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          ></span>
        </button>
      </Link>
    </div>
  );
};

export default FeaturesHeader;
