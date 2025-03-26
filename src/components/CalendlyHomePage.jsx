import React from "react";
import CalendlyEmbed from "./CalendlyEmbed";

const CalendlyHomePage = () => {
  return (
    <div className="flex flex-col pt-12 pb-12  font-inter ">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[#252B37] text-[30px] leading-[38px]">
          Still got questions? Book a call now!
        </h1>
        <p className="leading-[24px] text-[16px] text-[#535862]">
          Book a free call with the team
        </p>
      </div>
      <CalendlyEmbed />
    </div>
  );
};

export default CalendlyHomePage;
