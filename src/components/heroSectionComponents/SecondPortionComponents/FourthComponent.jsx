import React from "react";
import InfoSection from "./InfoSection";
import CustomTable from "@/components/CustomTable";
import table from "@/assets/table.png";
import ProfileImage from "../../../assets/pp.png";

const FourthComponent = () => {
  return (
    <div className="flex pt-10 mt-20 font-inter w-full justify-center gap-20 items-center">
      {/* <div className="border-[1px] shadow-[0_4px_12px_0_#E9EAEB] rounded-[8px] p-3 w-[730.08px] ">
        <CustomTable
          headers={headers}
          data={data}
          className="font-poppins"
          rowBodyClass={" h-[40px] leading-[16.04px]"}
        />
      </div> */}
        <img src={table} alt="table" />

      {/* right portion */}
      <InfoSection
        className={""}
        title="AI based Lead Scoring"
        description="Prioritize the Right Leads, Every Time"
        stat="360°"
        statDescription="Lead Visibility"
        buttonText="Try It Now"
      />
    </div>
  );
};

export default FourthComponent;

const headers = [
  <div className="flex justify-center w-4">
    {" "}
    <div className="h-[15px] w-[15px] rounded-[2px] border-[1px]"></div>
  </div>,
  <div className="w-[109px] text-start text-[#0C3440] font-semibold">
    Potential
  </div>,
  <div className="w-[109px] text-start text-[#0C3440] font-semibold">
    Company
  </div>,
  <div className="w-[109px] text-start text-[#0C3440] font-semibold">
    Match Score
  </div>,
  <div className="w-[109px] text-start text-[#0C3440] font-semibold">
    Relevance
  </div>,
];
const data = [
  {
    check: (
      <div className="flex justify-center w-4">
        {" "}
        <div className="h-[15px] w-[15px] rounded-[2px] border-[1px]"></div>
      </div>
    ),
    potential: (
      <div className="flex font-poppins items-center gap-2 w-[159.634px]">
        <img
          src={ProfileImage}
          className="border-2 border-green-500 rounded-full h-10 w-10"
          alt="Profile"
        />
        <div className="flex flex-col gap-1 items-start w-32">
          <span className="font-[400] text-[14px] leading-[17px]">
            Apeksha Singh
          </span>
          <span className="text-[#707475] text-[12px]">Influencer</span>
        </div>
      </div>
    ),
    company: (
      <div className="w-[98.31px] text-start text-[12px]">ABC Media</div>
    ),
    matchscore: (
      <div className="w-[98.31px] flex justify-start">
        <div className="w-[39.04px] bg-[#E4F6DF] text-[#589C43] leading-[16.039px] text-[12px] font-semibold h-fit pl-2 pr-2 pt-1 pb-1">
          70%
        </div>
      </div>
    ),
    relevance: (
      <div className="text-[12px]">
        She matches your ideal customer profile. She has been involved in sales
        of up to $50M with Tesla.
      </div>
    ),
  },
  {
    check: (
      <div className="flex justify-center w-4">
        {" "}
        <div className="h-[15px] w-[15px] rounded-[2px] border-[1px]"></div>
      </div>
    ),
    potential: (
      <div className="flex font-poppins items-center gap-2 w-[159.634px]">
        <img
          src={ProfileImage}
          className="border-2 border-green-500 rounded-full h-10 w-10"
          alt="Profile"
        />
        <div className="flex flex-col gap-1 items-start w-32">
          <span className="font-[400] text-[14px] leading-[17px]">
            Apeksha Singh
          </span>
          <span className="text-[#707475] text-[12px]">Influencer</span>
        </div>
      </div>
    ),
    company: (
      <div className="w-[98.31px] text-start text-[12px]">ABC Media</div>
    ),
    matchscore: (
      <div className="w-[98.31px] flex justify-start">
        <div className="w-[39.04px] bg-[#E4F6DF] text-[#589C43] leading-[16.039px] text-[12px] font-semibold h-fit pl-2 pr-2 pt-1 pb-1">
          70%
        </div>
      </div>
    ),
    relevance: (
      <div className="text-[12px]">
        She matches your ideal customer profile. She has been involved in sales
        of up to $50M with Tesla.
      </div>
    ),
  },
  {
    check: (
      <div className="flex justify-center w-4">
        {" "}
        <div className="h-[15px] w-[15px] rounded-[2px] border-[1px]"></div>
      </div>
    ),
    potential: (
      <div className="flex font-poppins items-center gap-2 w-[159.634px]">
        <img
          src={ProfileImage}
          className="border-2 border-green-500 rounded-full h-10 w-10"
          alt="Profile"
        />
        <div className="flex flex-col gap-1 items-start w-32">
          <span className="font-[400] text-[14px] leading-[17px]">
            Apeksha Singh
          </span>
          <span className="text-[#707475] text-[12px]">Influencer</span>
        </div>
      </div>
    ),
    company: (
      <div className="w-[98.31px] text-start text-[12px]">ABC Media</div>
    ),
    matchscore: (
      <div className="w-[98.31px] flex justify-start">
        <div className="w-[39.04px] bg-[#E4F6DF] text-[#589C43] leading-[16.039px] text-[12px] font-semibold h-fit pl-2 pr-2 pt-1 pb-1">
          70%
        </div>
      </div>
    ),
    relevance: (
      <div className="text-[12px]">
        She matches your ideal customer profile. She has been involved in sales
        of up to $50M with Tesla.
      </div>
    ),
  },
];
