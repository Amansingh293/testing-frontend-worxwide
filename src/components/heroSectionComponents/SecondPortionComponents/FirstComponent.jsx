import CustomButton from "@/components/CustomButton";
import React from "react";
import MailInfo from "./MailInfo";
import InfoSection from "./InfoSection";
import PersonlizedEmail from "./PersonlizedEmail";

const FirstComponent = () => {
  return (
    <div className="flex justify-center items-center w-full tracking-[0.010rem] gap-20">
      {/* left portion */}
      <InfoSection
        title="Goodbye Spray & Pray!"
        description="Deliver AI-driven, hyper-personalized messaging at scale."
        stat="3x"
        statDescription="increase in response rates while reducing SDR workload by half!"
        buttonText="Try It Now"
        onButtonClick={() => console.log("Button clicked!")}
      />

      {/* Right portion */}
      <PersonlizedEmail />

      {/* <div className="font-poppins tracking-[0.030rem]  flex flex-col relative border-[1px] rounded-[10px] border-[#D7D7D799] leading-[16px] w-[458px]  shadow-[0_4px_12px_0_#E9EAEB] pt-9 pb-9 pl-12 pr-12 text-[12px] gap-2 mr-36">
        <div className="border-b-[1px] border-b-[#EFEFF1] pt-3 pb-3 text-[#605E5C] ">
          <span className="text-black font-semibold">To: </span>{" "}
          mariahawkin@boostyoursales.com
        </div>
        <div className="border-b-[1px] border-b-[#EFEFF1] pt-3 pb-3 text-[#605E5C]">
          <span className="text-black font-semibold"> Sub: </span> Boosting User
          Growth & AOV: Case Study for E-commerce
        </div>
        <p className="text-[#1D1B20] flex flex-col gap-4 pt-3 leading-[16px] font-normal text-[10px]">
          Dear Maria,
          <span className="bg-[#FFF699] p-[5px]">
            I hope you’re doing well!
          </span>
          <span className="bg-[#FFE699] p-[5px]">
            I understand you've been facing challenges with declining user
            engagement on your e-commerce platform. Given the recent volatility
            in the retail industry, this is a pressing issue, but it's also an
            opportunity to create meaningful improvements
          </span>
          <span className="bg-[#E6FF99] p-[5px]">
            We’ve tackled similar challenges, driving up engagement and average
            order value for a leading beverage brand through persuasive
            triggers, behavioral design, and improved marketing strategies.
          </span>
          <span className="bg-[#9bffd6] p-[5px]">
            You can explore the impact we made by downloading the case study: CX
            Strategy for Global Beverage Manufacturer.
          </span>
          <span className="bg-[#85e3ff] p-[5px] ">
            Let’s discuss how we can achieve the same results for you.
          </span>
          <span className=" p-[5px] ">Book a meeting here</span>
          <span className=" p-[5px] flex flex-col">
            Regards,
            <span className="text-[#1D1B20] font-semibold">
              Mohit | Partner and CEO
            </span>
            Worxwide Consulting(Formerly Bids and Beyond)Ph: +1-571-3650400 |
            +447444-299-178
          </span>
        </p>
        <MailInfo
          className={"top-28 right-[430px] bg-[#FFF699]  w-40 text-[10px]"}
          text={"Tailored greetings based on psychological traits and timezone"}
        />
        <MailInfo
          className={"top-60 right-[430px] bg-[#E6FF99]  w-[125px]  text-[10px]"}
          text={"Solutions addressing key needs"}
        />
        <MailInfo
          className={"top-96 right-[430px] bg-[#99F7FF]  w-[148.35px] text-[10px]"}
          text={"Smart CTAs based on deep user needs"}
        />
        <MailInfo
          className={"top-[189px] left-[430px] bg-[#FFE699]  w-[149.78px] text-[10px]"}
          text={"Challenges from reports, news and interviews"}
        />{" "}
        <MailInfo
          className={"top-[346px] left-[430px] bg-[#9bffd6]  w-[139.35px] text-[10px]"}
          text={"Proven success via showcased results"}
        />
      </div> */}
    </div>
  );
};

export default FirstComponent;
