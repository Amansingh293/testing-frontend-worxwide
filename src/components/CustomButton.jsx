import React, { useState } from "react";
import { Button } from "./ui/button";

const CustomButton = ({
  variant,
  size,
  customClass,
  text,
  showIcon,
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
      </span>

      {/* Expanding circle effect */}
      <span
        className={`absolute rounded-[50px] bg-white w-[100%] h-[180%] ${
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
