import React from "react";
import infographics from "@/assets/infographics.svg";

const MultiAccountManagement = () => {
  return (
    <div className="pt-8 pb-8 flex flex-col gap-10 font-inter bg-white rounded-[16px]">
      <div className="flex flex-col gap-4 items-center">
        <h1 className=" text-[#252B37] text-[30px] leading-[38px]">
          Effortless Multi-Account Management with AI
        </h1>
        <p className="text-[#535862] text-[16px] leading-[24px] font-normal w-[840px] text-center">
          Handle multiple accounts seamlessly with Supervisor AI—efficiently
          managing branches, tracking performance, and optimizing outreach at
          scale.
        </p>
      </div>

      <div className="relative  flex justify-center items-center w-full overflow-hidden h-[500px]">
        <img
          src={infographics}
          alt="infographics"
          className="absolute left-[167px] top-0 m-0 p-0"
        />
      </div>
    </div>
  );
};

export default MultiAccountManagement;
