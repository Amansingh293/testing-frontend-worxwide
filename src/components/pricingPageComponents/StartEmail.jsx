import React, { memo } from "react";
import dp from "@/assets/pricingpagedp.png";
import { Input } from "../ui/input";
import CustomButton from "../CustomButton";

const StartEmail = memo(() => {
  return (
    <div className="flex p-12 items-center justify-center font-inter bg-white w-full rounded-[16px]">
      <div className="flex items-start gap-8 w-[742px] justify-center">
        <img src={dp} alt="dp" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
                <h1 className="text-[#252B37] text-2xl leading-[44px] tracking-[-0.72px]">Be Like Alex</h1>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="10.5" fill="#FF5502" />
                <path
                  d="M17.9477 15.75H11.8081V8.33285C12.377 7.81339 13.1137 7.5 13.9186 7.5C15.6997 7.5 17.1473 9.03468 17.1797 10.941C17.4199 10.8497 17.6784 10.8 17.9477 10.8C19.2192 10.8 20.25 11.9081 20.25 13.275C20.25 14.6419 19.2192 15.75 17.9477 15.75Z"
                  fill="white"
                />
                <path d="M11.25 9H10.5V15.75H11.25V9Z" fill="white" />
                <path d="M9 9.75H9.75V15.75H9V9.75Z" fill="white" />
                <path d="M8.25 11.25H7.5V15.75H8.25V11.25Z" fill="white" />
                <path d="M6 10.5H6.75V15.75H6V10.5Z" fill="white" />
                <path d="M5.25 12H4.5V15.75H5.25V12Z" fill="white" />
              </svg>
              <span className="text-[#A4A7AE] leading-[20px] text-[14px]">
                Sales Manager at Acme Corp
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#414651] text-[18px] leading-[28px] italic">
              Saved 10+ hours weekly with our Pro Plan
            </p>

            <div className="flex gap-2 items-center">
              <Input
                placeholder={"Enter your work email"}
                className="text-[#717680] leading-[20px] placeholder:text-[#717680] font-normal !h-11 w-[389px]"
              />
              <CustomButton
                variant="secondary"
                text={"Start for free"}
                onClick={"onButtonClick"}
                customClass={" rounded-[10px] font-normal px-16  !h-11"}
              />{" "}
            </div>
            <p className="text-[#A4A7AE] text-[14px] leading-[20px] ml-auto">
              Try Free, no credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default StartEmail;
