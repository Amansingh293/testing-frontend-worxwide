import React from "react";
import InfoSection from "./InfoSection";
import AiAssistance from "@/assets/aiassistance.png";

const SixthComponent = () => {
  return (
    <div className="flex pt-10 mt-20 font-inter w-full justify-center gap-20  items-center relative h-[560px]">
      <img src={AiAssistance} alt="AiAssistance" />
      {/* <AiAssistanceComponent /> */}
      {/* right portion */}
      <InfoSection
        className={""}
        title="Account Management"
        description="Account Action Plan: Predictive Insights & Strategic Deal Management"
        stat="35%"
        statDescription="Sales Efficiency"
        buttonText="Try It Now"
      />
    </div>
  );
};

export default SixthComponent;
