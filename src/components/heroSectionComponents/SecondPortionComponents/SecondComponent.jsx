import React from "react";
import EmailTemplate from "./EmailTemplateComponents/EmailTemplate";
import FollowUpEmail from "./EmailTemplateComponents/FollowUpEmail";
import LinkednTemplate from "./EmailTemplateComponents/LinkednTemplate";
import InfoSection from "./InfoSection";
import templateExamples from "@/assets/templateExamples.svg";

const SecondComponent = () => {
  return (
    <div className="flex pt-20 mt-5 font-inter  justify-center gap-20 items-center ">
      {/* left portion */}
      <img
        src={templateExamples}
        alt="templateExamples"
      />

      {/* <div className="relative h-[500px] w-2/3">
        <EmailTemplate className={"absolute z-30 left-56 bg-white"} />
        <FollowUpEmail
          className={"absolute top-8 z-20 left-24 bg-opacity-90 bg-[#FAFAFA]"}
        />
        <LinkednTemplate className={"absolute top-16 z-10  bg-opacity-60"} />
      </div> */}

      {/* Right Portion */}
      <InfoSection
        className={"w-1/3"}
        title="Smart Omni-Channel Outreach Sequencing"
        description="Seamless Outreach Across Every Channel "
        stat="30%"
        statDescription="Faster Deal Closures"
        buttonText="Try It Now"
      />
    </div>
  );
};

export default SecondComponent;
