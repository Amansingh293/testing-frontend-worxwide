import React from "react";
import FutureSectionCard from "./FutureSectionCard";
import FutureSectionCardGreen from "./FutureSectionCardGreen";
import upperleftfirst from "@/assets/upperleftfirst.png";
import upperleftsecond from "@/assets/upperleftsecond.png";
import bottomrightfirst from "@/assets/bottomrightfirst.png";
import bottomrightsecond from "@/assets/bottomrightsecond.png";
import CustomButton from "../CustomButton";

const FutureSection = () => {
  return (
    <div className="flex flex-col gap-12 font-inter relative bg-white rounded-[32px] pt-12 pb-12">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[30px] leading-[38px] text-[#181D27]">
          Free Your Sales Team’s Time for High-Value Activities{" "}
        </h1>
        <p className="text-[16px] leading-[24px] font-normal text-[#535862]">
          The Future of Sales: Let AI Handle the Busy Work
        </p>
      </div>
      <div className="flex gap-12 justify-center">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="leading-[28px] text-[18px] text-[#252B37]">
            How Sales Used to Work
          </h1>
          <FutureSectionCard text={"Manual prospecting took hours"} />
          <FutureSectionCard text={"Generic outreach lacked impact"} />
          <FutureSectionCard text={"Low-converting campaigns"} />
          <FutureSectionCard text={"Low-converting campaigns"} />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h1 className="leading-[28px] text-[18px] text-[#252B37]">
            Using Salesworx
          </h1>
          <FutureSectionCardGreen text={"Personalized outreach at scale"} />
          <FutureSectionCardGreen text={"AI-driven multi-channel engagement"} />
          <FutureSectionCardGreen
            text={"Ai assistant to close the leads faster"}
          />
          <FutureSectionCardGreen
            text={"One platform for your entire sales process"}
          />
        </div>
      </div>
      <img
        src={upperleftfirst}
        alt="upperleftfirst"
        className="absolute left-[33px] top-0 "
      />
      <img
        src={upperleftsecond}
        alt="upperleftsecond"
        className="absolute top-[75px]"
      />
      <img
        src={bottomrightfirst}
        alt="bottomrightfirst"
        className="absolute bottom-0 right-[65px] "
      />
      <img
        src={bottomrightsecond}
        alt="bottomrightsecond"
        className="absolute bottom-[91px] right-0"
      />
      <div className="flex justify-center">
        <CustomButton
          variant="secondary"
          text={"Book a Demo"}
          onClick={"onButtonClick"}
        />{" "}
      </div>
    </div>
  );
};

export default FutureSection;
