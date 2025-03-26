import React, { memo } from "react";

const CustomButtonExtended = memo(({ text, width, onClick, isClicked }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative mt-6 rounded-md border border-[#fff] h-12 text-nowrap pb-[3px]
        text-[#207C97] text-sm font-medium leading-[20px] px-[16px] 
        overflow-hidden transition-colors duration-700
        ${
          isClicked
            ? "bg-[linear-gradient(180deg, #207C97 30.83%, #0A2831 119.17%)] border-[#207C97]"
            : "bg-white"
        }`}
      style={{ width }}
    >
      <div className="flex gap-1 items-center relative z-10">
        <span className="relative z-10 transition-colors duration-700 group-hover:text-white mt-1">
          {text}
        </span>

        {/* SVG with Hover Effects */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          className="transition-transform duration-1000 group-hover:-rotate-[50deg] relative z-10 mt-1"
        >
          <path
            d="M2.5 8.98756L14.5265 8.98756L9.85539 4.43159L11.3231 3L18.5 10L11.3231 17L9.85539 15.5684L14.5265 11.0124L2.5 11.0124L2.5 8.98756Z"
            className="fill-[#207C97] transition-colors duration-700 group-hover:fill-white"
          />
        </svg>
      </div>

      {/* Background Hover Effect */}
      <span
        className="absolute rounded-full h-[300px] w-[250px] bg-[#207C97] 
          scale-0 group-hover:scale-100 
          transition-transform duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
          origin-bottom inset-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      ></span>
    </button>
  );
});

export default CustomButtonExtended;
