import React, { useState } from "react";
import rockect from "../assets/rocket.gif";

const BookDemo = () => {
  const handleOpenCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/salesworx-ai/demo?hide_event_type_details=1&hide_gdpr_banner=1&text_color=ffffff&primary_color=207c97",
      });
    } else {
      alert("Calendly script is still loading. Please try again.");
    }
  };
  return (
    <div className="relative">
      <button
        onClick={handleOpenCalendly}
        className="relative  rounded-[36px] text-white border border-[#207C97] bg-gradient-to-r from-[#2A86A1] to-[#3FF1B9] 
      bg-[length:200%] animate-gradient-move flex w-[159px] px-4 py-2 justify-center items-center gap-1 overflow-hidden group"
      >
        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
          <span className="relative z-10 group-hover:text-[#207C97] transition-colors duration-300">
            {" "}
            Book a Demo
          </span>
          <span className="group-hover:hidden transition-colors duration-300 ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2 8.98756L14.0265 8.98756L9.35539 4.43159L10.8231 3L18 10L10.8231 17L9.35539 15.5684L14.0265 11.0124L2 11.0124L2 8.98756Z"
                fill="white"
              />
            </svg>{" "}
          </span>
          <img
            src={rockect}
            alt="Loading"
            className="hidden group-hover:inline opacity-0 group-hover:opacity-100 w-[20px] transition-opacity duration-900 delay-200 w-[20px] h-[20px] animate-subtle-bounce"
          />
        </span>

        <span className="absolute rounded-full inset-0 bg-white transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out origin-bottom"></span>
      </button>

      {/* < group-hover:hidden transition-transform duration-300 animate-bounce-slow*/}
    </div>
  );
};

export default BookDemo;
