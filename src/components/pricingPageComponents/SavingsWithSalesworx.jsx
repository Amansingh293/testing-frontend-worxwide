import React from "react";
import SdrCalculator from "./SdrCalculator";
import CostPerMonth from "./CostPerMonth";

const SavingsWithSalesworx = () => {
  return (
    <div className="flex p-12 font-inter flex-col gap-16 items-center">
      <h1 className="text-[30px] leading-[38px] w-[577px] text-center">
        See How Much You Can Save with{" "}
        <span>
          <span className="text-[#207C97]">Salesworx</span>, your AI SDR
        </span>
      </h1>

      <div className="flex gap-10 items-center">
        <SdrCalculator />
        <CostPerMonth />
      </div>
    </div>
  );
};

export default SavingsWithSalesworx;
