import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import tryout from "@/assets/tryout.png";
import chaticon from "@/assets/chaticon.png";
import { Input } from "./ui/input";
import bulb from "@/assets/bulb.gif";

export default function PersonalizeEmailChatbot({
  personalizeEmailOpen,
  setPersonalizeEmailOpen,
}) {
  const ref = useRef(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setPersonalizeEmailOpen(false);
      }
    }

    if (personalizeEmailOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [personalizeEmailOpen, setPersonalizeEmailOpen]);

  return (
    <div className="relative w-full h-[400px]">
      <motion.div
        ref={ref}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: personalizeEmailOpen ? "546px" : 0,
          opacity: personalizeEmailOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`w-[790px] bg-[#FFF] rounded-[16px] flex flex-col items-end border-[#003648] shadow-[2px_2px_24px_0px_rgba(0,0,0,0.04)] p-9 overflow-hidden z-50`}
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          originY: 0.5,
        }}
      >
        {/* Positioned Image */}
        {personalizeEmailOpen && (
         <div class="flex p-1.5 px-3 justify-center items-center gap-1 absolute left-[316px] top-2 text-[#252B37] font-inter text-xs font-semibold leading-[18px] font-inter rounded-[24px] border border-[#F5F5F5] bg-white">
            <img src={bulb} alt={bulb} className="w-[18px] h-[18px]" />
            Try it out
          </div>
        )}

        {/* Content Inside Expanding Div */}
        {personalizeEmailOpen && (
          <div className="flex flex-col gap-8 w-full h-full">
            {/* Email Personalization Button */}
            <div className="w-44 pt-2 pb-2 pl-4 pr-4 flex justify-center items-center gap-2 bg-[#207C97] rounded-lg ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
              >
                <path
                  d="M5.50468 0.282846L5.94839 1.51077C6.44187 2.8736 7.51934 3.94661 8.88775 4.43804L10.1208 4.87993C10.232 4.91985 10.232 5.07678 10.1208 5.11671L8.88775 5.55859C7.51929 6.05004 6.44185 7.12309 5.94839 8.48586L5.50468 9.71379C5.46459 9.82461 5.30701 9.82461 5.26692 9.71379L4.82321 8.48586C4.32973 7.12303 3.25225 6.05002 1.88384 5.55859L0.650838 5.11671C0.539564 5.07679 0.539564 4.91986 0.650838 4.87993L1.88384 4.43804C3.2523 3.94659 4.32974 2.87355 4.82321 1.51077L5.26692 0.282846C5.307 0.171343 5.46458 0.171343 5.50468 0.282846Z"
                  fill="white"
                />
              </svg>
              <p className="text-[12px] font-normal leading-[18px] text-[#FFF]">
                Personalize an email
              </p>
            </div>

            {/* Chat Section */}
            <div className="flex gap-5 items-center w-full">
              <img src={chaticon} alt="chaticon" />
              <span className="text-[#252B37] text-[14px] font-semibold leading-[20px]">
                Let’s get started on personalizing your first email!
              </span>
            </div>

            {/* Who’s this email for? */}
            <div className="flex gap-5 items-center w-full">
              <img src={chaticon} alt="chaticon" />
              <div className="flex flex-col">
                <span className="text-[#252B37] text-[14px] font-semibold leading-[20px]">
                  Who’s this email for?
                </span>
                <span className="font-normal text-[14px] leading-[20px] text-[#252B37]">
                  Adding recipient work email helps us tailor the message. Rest
                  assured, we won’t send out anything yet.
                </span>
              </div>
            </div>

            {/* Input Field */}
            <Input
              className="p-3 pt-4 pb-4 h-12 placeholder:text-[#717680] mt-auto"
              placeholder={
                "Add the recipient’s work email so we can personalize the message for them."
              }
            />

            {/* Submit Button */}
            <div className="bg-[#3F454D] p-2 flex justify-center items-center rounded-[4px] absolute bottom-[42px] right-[43px] cursor-pointer h-9 w-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16.5 1.5L8.25 9.75M16.5 1.5L11.25 16.5L8.25 9.75M16.5 1.5L1.5 6.75L8.25 9.75"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
