import React from "react";
import InfoSection from "./InfoSection";
import AccountManagement from "./forFourthComponents/AccountManagement";
import CompanyAccount from "@/components/common/CompanyAccount";
import Accounts from "@/components/common/Accounts";

const FifthComponent = () => {
  return (
    <div className="flex pt-10 mt-36 font-inter w-full justify-center gap-20 items-center relative h-[560px]">
      {/* left portion */}
      <InfoSection
        className={""}
        title="Account Management"
        description="Account Action Plan: Predictive Insights & Strategic Deal Management"
        stat="35%"
        statDescription="Sales Efficiency"
        buttonText="Try It Now"
      />

      {/* <AccountManagement className={"absolute top-0 right-0 z-10"} />
      <CompanyAccount className={"absolute top-44 right-56 z-0"} /> */}

      <Accounts/>
    </div>
  );
};

export default FifthComponent;
