import React from "react";

import FeaturesList from "./common/FeaturesLists";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const AiSalesIntelligence = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 p-8 bg-white rounded-[16px] w-full">
      {" "}
      <div className="flex flex-col gap-4 items-center">
        <h1 className=" text-[#252B37] text-[30px] leading-[38px]">
          AI-Driven Sales Intelligence
        </h1>
        <p className="text-[#535862] text-[16px] leading-[24px] font-normal w-[840px] text-center">
          Deep Dive into multiple sources for company and user profiles while we
          personalize
        </p>
      </div>
      <FeaturesList />
      <div className="flex justify-center">
        <CustomButton
          variant="secondary"
          text={"See in Action"}
          onClick={() => navigate("/login")}
        />{" "}
      </div>
    </div>
  );
};

export default AiSalesIntelligence;
