import React, { useState } from "react";
import banner from "@/assets/Banner.png";
import CustomButton from "./CustomButton";
import CustomButtonExtended from "./common/CustomButtonExtended";
import { useNavigate } from "react-router-dom";

const TrialSection = ({ text, text2 }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative">
      <img src={banner} alt="banner" className="h-full w-full" />
      <div className="flex flex-col items-start absolute z-10 top-24 left-20 w-[359px]">
        <h2 className="text-white  font-inter text-[30px] font-medium leading-[38px] sm:text-[32px] ">
          {text}
        </h2>
        <p className="mt-4 text-white  font-inter text-[16px] font-normal leading-[24px]">
          {text2}
        </p>
        

        <CustomButtonExtended text="Try For Free" onClick={()=>navigate("/login")}/>
      </div>
    </div>
  );
};

export default TrialSection;
