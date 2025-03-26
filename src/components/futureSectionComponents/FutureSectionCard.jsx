import React from "react";

const FutureSectionCard = ({ text }) => {
  return (
    <div className="pt-3 pb-3 pl-4 pr-4 rounded-[24px] border-[#E9EAEB] border-[1px] flex items-center gap-2 w-80">
      <svg
        width="11"
        height="10"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 1L1.5 9M1.5 1L9.5 9"
          stroke="#9CA3AF"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span className="leading-[20px] font-normal text-[14px] text-[#9CA3AF]">
        {text}
      </span>
    </div>
  );
};

export default FutureSectionCard;
