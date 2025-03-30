import React, { useState } from "react";

const CustomButtonCorrect = ({
  onClick,
  text = "Get Started Today",
  isClicked = false,
  bgColor = "#207C97",
  hoverBgColor = "#ADD8E6",
  borderColor = "#207C97",
  hoverBorderColor = "#87CEEB",
  downloadIcon,
}) => {
  const [clicked, setClicked] = useState(isClicked);

  const handleClick = () => {
    setClicked(!clicked);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative mt-4 rounded-[36px] border text-white text-sm font-medium leading-[20px] py-[12px] px-[16px] 
                  overflow-hidden transition-colors duration-300 
                  ${
                    clicked
                      ? `bg-[${hoverBgColor}] border-[${hoverBorderColor}]`
                      : `bg-[${bgColor}] border-[${borderColor}]`
                  }`}
    >
      <div className="flex gap-1 items-center relative z-10">
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[#207C97]">
          {text}
        </span>

        {/* SVG with Hover Effects */}
        {!downloadIcon && (
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
        )}

        {downloadIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M6 15.5H15C15.2761 15.5 15.5 15.7239 15.5 16C15.5 16.2455 15.3231 16.4496 15.0899 16.4919L15 16.5H6C5.72386 16.5 5.5 16.2761 5.5 16C5.5 15.7545 5.67688 15.5504 5.91012 15.5081L6 15.5H15H6ZM10.4101 3.50806L10.5 3.5C10.7455 3.5 10.9496 3.67688 10.9919 3.91012L11 4V12.792L13.682 10.1109C13.8555 9.93735 14.125 9.91806 14.3198 10.0531L14.3891 10.1109C14.5627 10.2845 14.5819 10.5539 14.4469 10.7488L14.3891 10.818L10.8536 14.3536C10.68 14.5271 10.4106 14.5464 10.2157 14.4114L10.1464 14.3536L6.61091 10.818C6.41565 10.6228 6.41565 10.3062 6.61091 10.1109C6.78448 9.93735 7.0539 9.91806 7.24877 10.0531L7.31802 10.1109L10 12.792V4C10 3.75454 10.1769 3.55039 10.4101 3.50806L10.5 3.5L10.4101 3.50806Z"
              fill="white"
            />
            <path
              d="M6 15.5H15C15.2761 15.5 15.5 15.7239 15.5 16C15.5 16.2455 15.3231 16.4496 15.0899 16.4919L15 16.5H6C5.72386 16.5 5.5 16.2761 5.5 16C5.5 15.7545 5.67688 15.5504 5.91012 15.5081L6 15.5ZM10.4101 3.50806L10.5 3.5C10.7455 3.5 10.9496 3.67688 10.9919 3.91012L11 4V12.792L13.682 10.1109C13.8555 9.93735 14.125 9.91806 14.3198 10.0531L14.3891 10.1109C14.5627 10.2845 14.5819 10.5539 14.4469 10.7488L14.3891 10.818L10.8536 14.3536C10.68 14.5271 10.4106 14.5464 10.2157 14.4114L10.1464 14.3536L6.61091 10.818C6.41565 10.6228 6.41565 10.3062 6.61091 10.1109C6.78448 9.93735 7.0539 9.91806 7.24877 10.0531L7.31802 10.1109L10 12.792V4C10 3.75454 10.1769 3.55039 10.4101 3.50806Z"
              stroke="white"
              stroke-width="0.4"
            />
          </svg>
        )}
      </div>

      {/* Background Hover Effect */}
      <span
        className="absolute rounded-full h-[300px] w-[250px] bg-white 
        scale-0 group-hover:scale-100 
        transition-transform duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
        origin-bottom inset-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      ></span>
    </button>
  );
};

export default CustomButtonCorrect;
