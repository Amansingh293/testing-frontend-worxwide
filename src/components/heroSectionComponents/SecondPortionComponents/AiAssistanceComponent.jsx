import React from "react";
import chattbot from "../../../assets/chatbot.png";
import icon from "../../../assets/mainicon.png";
import { Input } from "@/components/ui/input";

const AiAssistanceComponent = () => {
  return (
    <div className="w-[685.554px] flex flex-col p-5 gap-4 items-center font-inter shadow-[0.941px_0.941px_13.176px_0px_rgba(0,0,0,0.10)] bg-[#FFF] border-[1px] border-[#207C97]/50 rounded-[10px]">
      <div className="flex flex-col gap-3 items-center">
        <div className="h-9 w-9 border-[0.5px] p-[6px] border-[#D5D7DA] rounded-[5px]">
          <img src={chattbot} alt="chatbot" />
        </div>
        <p className="w-44 text-[#414651] text-[10px] font-semibold leading-[16px]">
          Hello! I’m Salesi, your AI Trainer.
        </p>
        <p className=" text-[#535862] text-[9px] font-normal leading-[11.503px]">
          Teach AI to refine your email outreach and craft messages tha match
          your style.
        </p>
      </div>

      <div className="flex flex-col gap-6 items-start w-full">
        <div className="flex items-center leading-[11.503px]">
          <img src={icon} alt="icon" className="h-5 w-5" />
          <p className="p-2 text-[9px]">
            Let's train your AI to match your communication style, ensuring your
            emails feel natural and personalized.
          </p>
        </div>
        <div className="flex items-center leading-[11.503px]">
          <img src={icon} alt="icon" className="h-5 w-5" />
          <p className="p-2 text-[9px]"> Ready to get started?</p>
        </div>
      </div>
      <div className="bg-[#207C97] rounded-[4px] text-[#FFF] text-[9px] p-2 pl-3 pr-3 rounded-br-none ml-auto leading-[11.503px]">
        Yes, let's get started
      </div>
      <div className="p-[6px] border-[0.5px] border-[#D5D7DA] bg-[#FFF] w-full rounded-[4px] h-[33.36px] flex gap-3 items-center leading-[11.503px]">
        <Input
          className="border-none h-[30px] text-[9px] placeholder:text-[9px] focus:border-none"
          placeholder="Please confirm so that we can proceed further"
        />
        <div className="h-5 w-5 flex justify-center items-center rounded-[4px] bg-[#3F454D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
          >
            <path
              d="M9.78465 1.53906L5.03984 6.28388M9.78465 1.53906L6.76523 10.166L5.03984 6.28388M9.78465 1.53906L1.15771 4.55849L5.03984 6.28388"
              stroke="white"
              stroke-width="0.862694"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AiAssistanceComponent;
