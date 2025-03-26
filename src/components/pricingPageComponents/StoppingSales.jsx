import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../CustomButton";
import electricity from "@/assets/electricity.gif";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CustomButtonExtended from "../common/CustomButtonExtended";
import TeamSection from "../common/TeamSection";

const StoppingSales = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("form");

  const divRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };

  const scrollToDiv = () => {
    divRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    if (isModalOpen) {
      scrollToDiv();
    }
  }, [isModalOpen]);

  return (
    <div className="flex flex-col gap-[100px] w-full">
      {/* Solution Section */}
      <div className=" text-center">
        <h3 className="text-[#181D27] text-center font-inter text-[30px] font-medium leading-[38px] mb-[16px]">
          Salesworx: A Simple Solution to Your Complex Sales Problems
        </h3>
        <p className="text-[#535862] text-center font-inter text-[16px] font-normal leading-[24px]">
          Personalization at scale, made simple with AI
        </p>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-[64px]">
          <div className="flex flex-col items-center text-center">
            <img
              src={electricity} // Replace with your icon path
              alt="Ineffective Storytelling"
              className="w-8 h-8"
            />
            <h4 className="text-[#207C97] font-inter text-[18px] font-medium leading-[28px]">
              Master Account-Based Strategies
            </h4>
            <p className="text-[#535862] text-center font-inter text-[16px] font-normal leading-[24px]">
              Get actionable insights to engage and win high-value accounts.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={electricity} // Replace with your icon path
              alt="Ineffective Storytelling"
              className="w-8 h-8"
            />
            <h4 className="text-[#207C97] font-inter text-[18px] font-medium leading-[28px]">
              Powerful Persuasion at Scale
            </h4>
            <p className="text-[#535862] text-center font-inter text-[16px] font-normal leading-[24px]">
              Automate follow-ups based on persuasion principles for higher
              conversions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={electricity} // Replace with your icon path
              alt="Ineffective Storytelling"
              className="w-8 h-8"
            />
            <h4 className="text-[#207C97] font-inter text-[18px] font-medium leading-[28px]">
              Designed for Ease of Use
            </h4>
            <p className="text-[#535862] text-center font-inter text-[16px] font-normal leading-[24px]">
              No complex setup—start using the tool right away with minimal
              effort.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={electricity} // Replace with your icon path
              alt="Ineffective Storytelling"
              className="w-8 h-8"
            />
            <h4 className="text-[#207C97] font-inter text-[18px] font-medium leading-[28px]">
              AI That Knows Sales
            </h4>
            <p className="text-[#535862] text-center font-inter text-[16px] font-normal leading-[24px]">
              AI fine-tuned through real-world sales data and industry expert
            </p>
          </div>
        </div>
      </div>
      <TeamSection
        title="Tailored for team of all sizes"
        description="Whether you're running a small campaign or scaling up to enterprise-level outreach, our flexible pricing makes it affordable. Contact our sales team to learn more."
        buttonText="Get Volume Pricing"
        onButtonClick={handleClick}
      />
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg md:flex md:flex-row overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            ref={divRef}
          >
            <div className="flex items-center justify-center">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-md w-full">
                {currentScreen === "form" && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Get Custom Volume Pricing
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">
                      Looking for bulk pricing? Share a few details, and we'll
                      provide a tailored quote that suits your team’s needs.
                    </p>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="mt-6 space-y-4"
                    >
                      {/* Name Input */}
                      <div>
                        <label className="text-gray-700 text-sm font-medium">
                          Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Your name"
                          className="mt-1"
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="text-gray-700 text-sm font-medium">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          className="mt-1"
                        />
                      </div>

                      {/* Team Size Dropdown */}
                      <div>
                        <label className="text-gray-700 text-sm font-medium">
                          Team Size
                        </label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select team size from dropdown" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">1-10 Members</SelectItem>
                            <SelectItem value="medium">
                              11-50 Members
                            </SelectItem>
                            <SelectItem value="large">51+ Members</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Phone Number Input */}
                      <div>
                        <label className="text-gray-700 text-sm font-medium">
                          Phone number
                        </label>
                        <div className="flex items-center gap-2 border border-gray-300 rounded-md p-2 mt-1">
                          <Select>
                            <SelectTrigger className="w-20">
                              <SelectValue placeholder="US" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">US +1</SelectItem>
                              <SelectItem value="IN">IN +91</SelectItem>
                              <SelectItem value="UK">UK +44</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="flex-1 border-none"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      {/* <Button
                    onClick={() => setCurrentScreen('tick')}
                    className="w-full mt-4 bg-gray-600 text-white hover:bg-gray-700">
                    Submit Request →
                  </Button> */}
                      <button
                        onClick={() => setCurrentScreen("tick")}
                        className="flex p-[12px_16px] justify-center items-center gap-1 self-stretch w-full rounded-[36px] border border-[#207C97] bg-[#717680] text-white font-inter text-sm font-medium leading-[20px] hover:bg-white hover:text-[#207C97] "
                      >
                        Submit Request{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M2 8.98756L14.0265 8.98756L9.35539 4.43159L10.8231 3L18 10L10.8231 17L9.35539 15.5684L14.0265 11.0124L2 11.0124L2 8.98756Z"
                            fill="#207C97"
                          />
                        </svg>
                      </button>
                    </form>
                  </>
                )}
                {currentScreen === "tick" && (
                  <div className="flex flex-col items-center justify-center bg-white">
                    {/* Green Check Icon */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      {/* Green Circle */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <circle
                          cx="26"
                          cy="26"
                          r="25.5"
                          fill="#039855"
                          stroke="white"
                        />
                      </svg>

                      {/* Tick Icon (Perfectly Centered) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute w-6 h-6"
                      >
                        <path
                          d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"
                          fill="white"
                        />
                      </svg>
                    </div>

                    {/* Success Message */}
                    <h2 className="mt-4 text-xl font-semibold text-gray-900">
                      Message Sent Successfully!
                    </h2>

                    {/* Description */}
                    <p className="mt-2 text-center text-gray-600 max-w-md">
                      Thank you for reaching out to us. We’ve received your
                      message and will get back to you shortly. Have a great
                      day!
                    </p>

                    {/* Explore Services Button */}
                    <Link to="/features">
                      <button className="mt-6 flex items-center text-gray-900 font-medium hover:text-black transition-all">
                        Explore Our Services
                        {/* <ArrowRightIcon className="w-5 h-5 ml-2" /> */}
                      </button>
                    </Link>

                    {/* Underline Effect */}
                    <div className="w-32 border-t border-gray-900 mt-1"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <CustomButton
            variant="secondary"
            text={"Get Started"}
            onClick={"onButtonClick"}
            customClass={"mt-3"}
          />{" "}
        </div>
      )}
    </div>
  );
};

export default StoppingSales;
