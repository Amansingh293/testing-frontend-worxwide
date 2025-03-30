import React, { useState } from "react";
import rockect from "../assets/rocket.gif";

const BookDemo = () => {
  const handleOpenCalendly = () => {
    if (window.Calendly) {
      document.body.classList.add("no-scroll");
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/salesworx-ai/demo?hide_gdpr_banner=1&primary_color=207c97",
      });

      setTimeout(() => {
        const calendlyPopup = document.querySelector(".calendly-popup");
        if (calendlyPopup) {
          calendlyPopup.parentElement.classList.add("custom-calendly");
          calendlyPopup.children[0]?.classList.add("custom-calendly-popupchild");
          console.log(calendlyPopup.parentElement);
        }
      }, 100); // Small timeout to ensure the popup is mounted
    } else {
      document.body.classList.remove("no-scroll");
      alert("Calendly script is still loading. Please try again.");
    }
  };

  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={handleOpenCalendly}
        className="relative  rounded-[36px] text-white border border-[#207C97] bg-gradient-to-r from-[#207C97] to-[#31c2d8] 
      bg-[length:200%] animate-gradient-move flex w-[159px] px-4 py-2 justify-center items-center gap-1 overflow-hidden group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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

        <span
          className={`absolute rounded-[50px] bg-white w-[100%] h-[180%] ${
            hovered ? "scale-100" : "scale-0"
          } transition-transform duration-700 ease-in-out origin-bottom`}
        ></span>
      </button>

      {/* < group-hover:hidden transition-transform duration-300 animate-bounce-slow*/}
    </div>
  );
};

export default BookDemo;
