import React from "react";
import Salesworx from "@/assets/Salesworx.gif";
import Section from "@/components/common/Section";
import FAQ from "@/components/common/Faq";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import CustomButtonCorrect from "./common/CustomButtonCorrect";

const FeaturesHeader = ({ handleClick, isClicked }) => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center text-center">
        <img
          src={Salesworx} // Replace with your icon path
          alt="Time-Consuming Manual Research"
          className="w-[100px] h-[100px] mb-[24px]"
        />
      </div>
      <h1 className="text-[#252B37] text-center font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px]">
        Revolutionize Your Sales Journey with{" "}
        <span className="text-[var(--Brand-colour,#207C97)] font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px]">
          Salesworx
        </span>
      </h1>
      <p className="text-[#414651] font-inter text-[16px] font-normal leading-[24px] mt-[16px]">
        Empowering modern sales teams with AI-driven automation, intelligence,
        and hyper-personalization.
      </p>
      <Link to="/login">
        {/* <CustomButton
          variant="secondary"
          text={"Get Started Today"}
          onClick={"onButtonClick"}
          showIcon={true}
        />{" "} */}
        <CustomButtonCorrect text="Get Started Today"/>
        
      </Link>
    </div>
  );
};

export default FeaturesHeader;
