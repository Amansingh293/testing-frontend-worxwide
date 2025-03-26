import React from "react";
import EmailCard from "./EmailCard";
import ProfileImage from "../../../../assets/pp.png";

const AccountManagement = ({className}) => {
  return (
    <div className={"flex flex-col gap-4 items-start w-[460px] h-[395.99px] overflow-y-auto p-4 font-inter bg-[#FFF] rounded-[16px]    shadow-[0_4px_12px_0_#E9EAEB] overflow-hidden " + className}>
      {/* first poriton */}
      <div className="flex items-center gap-3">
        <span className="text-[#252B37] text-[9px] pl-2 pr-2">All</span>
        <div className="flex gap-3 items-center w-fit pr-6">
          <img
            src={ProfileImage}
            height={"25"}
            width={"25"}
            className=" rounded-full"
          />
          <div className="gap-[1.4px] flex flex-col items-start justify-center">
            <span className="text-[#252B37] text-[10px] leading-[15px] text-nowrap">
              Apeksha Singh
            </span>
            <span className="text-[#717680] text-[10px] leading-[15px] text-nowrap">
              Decision Maker{" "}
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center w-fit pr-6">
          <img
            src={ProfileImage}
            height={"25"}
            width={"25"}
            className=" rounded-full"
          />
          <div className="gap-[1.4px] flex flex-col items-start justify-center">
            <span className="text-[#252B37] text-[10px] leading-[15px] text-nowrap">
              Apeksha Singh
            </span>
            <span className="text-[#717680] text-[10px] leading-[15px] text-nowrap">
              Decision Maker{" "}
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center w-fit pr-6">
          <img
            src={ProfileImage}
            height={"25"}
            width={"25"}
            className=" rounded-full"
          />
          <div className="gap-[1.4px] flex flex-col items-start justify-center">
            <span className="text-[#252B37] text-[10px] leading-[15px] text-nowrap">
              Apeksha Singh
            </span>
            <span className="text-[#717680] text-[10px] leading-[15px] text-nowrap">
              Decision Maker{" "}
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center w-fit pr-6">
          <img
            src={ProfileImage}
            height={"25"}
            width={"25"}
            className=" rounded-full"
          />
          <div className="gap-[1.4px] flex flex-col items-start justify-center">
            <span className="text-[#252B37] text-[10px] leading-[15px] text-nowrap">
              Apeksha Singh
            </span>
            <span className="text-[#717680] text-[10px] leading-[15px] text-nowrap">
              Decision Maker{" "}
            </span>
          </div>
        </div>
      </div>

      {/* second portion */}
      <div className="flex flex-col items-start gap-2">
        <span className="text-[#252B37] text-[10px] leading-[14px] font-semibold">
          Conversation Summary
        </span>
        <p className="text-[#252B37] text-[9px] font-normal leading-[13px]">
          Post discussion with Apeksha, Adam and Ritwik it was evident that
          Northface lacks in UX maturity and they may require UX audit, design
          and testing services.
        </p>
        <div className="pt-1  font-semibold text-[10px] leading-[14px]">
          <span className="text-[#252B37]">Net Sentiment Analysis</span>
          <span className="text-[#12B76A] font-normal ">: 66% Positive</span>
        </div>
      </div>

      {/* third portion */}

      <p className="font-semibold text-[10px] leading-[14px] text-[#252B37]">
        Interaction History
      </p>

      {/* fourth portion */}
      <EmailCard/>
      <EmailCard/>
      <EmailCard/>
      <EmailCard/>
      <EmailCard/>
      
    </div>
  );
};

export default AccountManagement;
