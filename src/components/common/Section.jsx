import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import campaign from "@/assets/campaign.png";
import DropEffect from "./dropEffectAnimation/DropEffect";

const Section = ({ text, text2, buttonText }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);

  const handlePath = () => {
    if (
      location.pathname === "/contact" ||
      location.pathname === "/blogdetail"
    ) {
      // If on HomePage -> Go to Blog Detail Page
      handleOpenCalendly();
    } else {
      // If on Blog Detail Page -> Go to Blog Section
      navigate("/login");
    }
  };
  const handleOpenCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/salesworx-ai/demo?hide_event_type_details=1&hide_gdpr_banner=1&text_color=ffffff&primary_color=207c97",
      });
    } else {
      alert("Calendly script is still loading. Please try again.");
    }
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <div className="mt-10 rounded-[20px] bg-[#207C97] p-20 flex justify-start w-[1153px] h-[399px]">
      <section className=" w-[359px] h-[280px]  relative z-10">
        {/* <section className="rounded-[20px] bg-[#207C97] w-full h-[280px] flex-shrink-0 mx-auto md:w-[90%] lg:w-[80%] py-12 md:py-16 px-6 relative"> */}
        <div className="flex flex-col items-start">
          <h2 className="text-white  font-inter text-[30px] font-medium leading-[38px] sm:text-[32px]">
            {text}
          </h2>
          <p className="mt-4 text-white  font-inter text-[16px] font-normal leading-[24px]">
            {text2}
          </p>
          {/* <button className="mt-6 bg-white text-teal-600 font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
            Book a demo →
          </button> */}

          <button
            onClick={handlePath}
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
                {buttonText ? "Book a demo" : "Try for Free"}
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
              className="absolute rounded-md inset-0 bg-[#207C97] 
                     transform scale-0 group-hover:scale-100 
                     transition-transform duration-500 ease-out origin-bottom z-0"
            ></span>
          </button>
        </div>
        
        <img src={campaign} alt="campaign" className="absolute top-[10px] left-[600px] z-0" />

        

        {/* Top-left Decorative Circle */}
        {/* <div className="absolute -top-14 -left-14 w-48 h-48 md:w-40 md:h-40 rounded-full border-8 border-white opacity-20"></div> */}

        {/* Bottom-right Decorative Circle */}
        {/* <div className="absolute -bottom-14 -right-14 w-48 h-48 md:w-40 md:h-40 rounded-full border-8 border-white"></div> */}
      </section>
    </div>
  );
};

export default Section;
