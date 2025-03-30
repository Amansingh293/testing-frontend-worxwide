import React, { useState } from "react";
import { Button } from "./ui/button";

const CustomButton = ({
  variant,
  size,
  customClass,
  text,
  showIcon,
  downloadIcon,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  const classGenerator = () => {
    let className =
      "relative rounded-[36px] text-white border border-[#207C97] flex px-4 py-2 justify-center items-center gap-1 overflow-hidden transition-transform duration-500 ease-in-out bg-[#207C97] ";

    if (variant === "primary") {
      className += " w-[159px] ";
    } else if (variant === "secondary") {
      className +=
        " w-fit hover:text-[#207C97] text-[14px] hover:bg-[#207C97] ";
    }

    if (size === "small") {
      className += " text-sm ";
    } else if (size === "large") {
      className += " text-lg ";
    }

    return className;
  };

  return (
    <Button
      className={`${classGenerator()} ${customClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-150">
        <span className={hovered ? "text-[#207C97]" : "text-white"}>
          {text}
        </span>

        {showIcon && (
          <RightArrow
            size={20}
            color={hovered ? "#207C97" : "#FFFFFF"} // ✅ Dynamic color change
            strokeWidth={2}
          />
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
      </span>

      {/* Expanding circle effect */}
      <span
        className={`absolute rounded-[50px] bg-white w-[110%] h-[300%] ${
          hovered ? "scale-100" : "scale-0"
        } transition-transform duration-700 ease-in-out origin-bottom`}
      />
    </Button>
  );
};

const RightArrow = ({ size = 24, color = "#FFFFFF", strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: "fill 0.3s ease, stroke 0.3s ease",
    }}
  >
    <path
      d="M4 12H20"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 6L20 12L14 18"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CustomButton;
