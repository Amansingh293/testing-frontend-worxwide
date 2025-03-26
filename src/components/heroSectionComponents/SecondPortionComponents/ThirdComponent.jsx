import React from "react";
import InfoSection from "./InfoSection";
import CompanyCard from "@/components/common/CompanyCard";
import PersonCard from "@/components/common/PersonCard";

const ThirdComponent = () => {
  return (
    <div className="flex pt-10 mt-20 font-inter w-full justify-center items-center gap-20 ">
      {/* left portion */}
      <InfoSection
        className={""}
        title="Smart Omni-Channel Outreach Sequencing"
        description="Deep insights for better deal closures"
        stat="50%"
        statDescription="More Efficient Lead Targeting"
        buttonText="Try It Now"
      />
      {/* Right Portion */}
      <div className="flex flex-col gap-6">
        <PersonCard />
        <CompanyCard />
      </div>
    </div>
  );
};

export default ThirdComponent;
