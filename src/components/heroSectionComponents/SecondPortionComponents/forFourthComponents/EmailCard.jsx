import React, { useState } from "react";
import ProfileImage from "../../../../assets/pp.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const EmailCard = () => {
  const [fullHeight, setFullHeight] = useState();

  return (
    <div
      className={`mt-2 flex gap-2  justify-center w-full 
        ${fullHeight ? "items-start" : "h-[78.08px]"}`}
    >
      <div className="flex items-center gap-3">
        <img
          src={ProfileImage}
          height={"25"}
          width={"25"}
          className=" rounded-full"
        />
        <span className="text-[#717680] text-[9px] leading-[13px]">
          14-11-2024
        </span>
      </div>
      <div
        className={`flex flex-col gap-2 items-start rounded-[5.657px] ml-auto   p-3 border-[0.7px] borer-[#D5D7DA] w-[325.83px] overflow-hidden relative ${
          fullHeight ? "h-fit" : "h-[78.08px]"
        }`}
      >
        {!fullHeight && (
          <MdKeyboardArrowDown
            className="absolute bottom-2 right-2 text-[10px] cursor-pointer"
            onClick={() => setFullHeight(true)}
          />
        )}
        {fullHeight && (
          <MdKeyboardArrowUp
            className="absolute bottom-2 right-2 text-[10px]  cursor-pointer"
            onClick={() => setFullHeight(false)}
          />
        )}
        <div className="text-[#717680] leading-[13px] text-[9px] font-normal flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="9"
            viewBox="0 0 10 8"
            fill="none"
          >
            <path
              d="M1.3177 7.96384C1.0649 7.96384 0.848494 7.87729 0.668471 7.70419C0.488449 7.53109 0.398438 7.32301 0.398438 7.07993V1.77649C0.398438 1.53341 0.488449 1.32532 0.668471 1.15223C0.848494 0.979127 1.0649 0.892578 1.3177 0.892578H8.67181C8.92461 0.892578 9.14102 0.979127 9.32104 1.15223C9.50107 1.32532 9.59108 1.53341 9.59108 1.77649V7.07993C9.59108 7.32301 9.50107 7.53109 9.32104 7.70419C9.14102 7.87729 8.92461 7.96384 8.67181 7.96384H1.3177ZM4.99476 4.87016L1.3177 2.66039V7.07993H8.67181V2.66039L4.99476 4.87016ZM4.99476 3.98625L8.67181 1.77649H1.3177L4.99476 3.98625ZM1.3177 2.66039V1.77649V7.07993V2.66039Z"
              fill="#717680"
            />
          </svg>
          <span>Meeting initiated</span>
        </div>
        <p className="text-[#252B37] text-[10px] font-semibold leading-[14.1px]">
          <span>Q4 </span>Timeline Approval Meeting
        </p>
        <div className="flex justify-between w-full items-center pr-2">
          <div className="flex items-center gap-1 text-[9px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <g clip-path="url(#clip0_7769_5998)">
                <path
                  d="M6.64142 3.48333V6.31183L8.52709 7.25467M11.3556 6.31183C11.3556 8.9154 9.24499 11.026 6.64142 11.026C4.03785 11.026 1.92725 8.9154 1.92725 6.31183C1.92725 3.70826 4.03785 1.59766 6.64142 1.59766C9.24499 1.59766 11.3556 3.70826 11.3556 6.31183Z"
                  stroke="#252B37"
                  stroke-width="1.41425"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7769_5998">
                  <rect
                    width="11.314"
                    height="11.314"
                    fill="white"
                    transform="translate(0.984375 0.654297)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>45 min</span>
          </div>
          <div className="flex items-center">
            <img
              src={ProfileImage}
              height={"14"}
              width={"14"}
              className=" rounded-full"
            />
            <img
              src={ProfileImage}
              height={"14"}
              width={"14"}
              className=" rounded-full"
            />
            <img
              src={ProfileImage}
              height={"14"}
              width={"14"}
              className=" rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
