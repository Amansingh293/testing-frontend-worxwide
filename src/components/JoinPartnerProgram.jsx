import React from "react";
import CustomButton from "./CustomButton";
import old from "@/assets/old.png";
import male from "@/assets/male.png";
import female from "@/assets/female.png";
import { useNavigate } from "react-router-dom";

const JoinPartnerProgram = () => {
  const navigate = useNavigate();

  return (
    <div className="p-[34px] flex gap-12 rounded-[32px] bg-white items-center h-[489px] ">
      <div className="flex flex-col gap-8 w-1/2">
        <div className="flex flex-col gap-4 w-[546px]">
          <h1 className=" text-[#252B37] text-[30px] leading-[38px]">
            Join our partner program
          </h1>{" "}
          <p className="text-[#717680] text-[16px] leading-[24px] font-normal">
            Join our network of experts helping organizations unlock their full
            productivity potential. As a consulting partner, you’ll gain
            exclusive access to resources, training, and a dedicated support
            team to drive real results for your clients with Worx Squad.
          </p>
          <CustomButton
            variant="secondary"
            text={"Get in touch"}
            onClick={() => navigate("/login")}
            customClass={"rounded-[6px]"}
          />{" "}
        </div>
      </div>

      <div className="p-0 relative h-full">
        <img src={old} alt="old" />
        <img src={male} alt="male" className="absolute top-[223px]" />
        <img
          src={female}
          alt="female"
          className="absolute top-[115px] left-[258px]"
        />
      </div>
    </div>
  );
};

export default JoinPartnerProgram;
