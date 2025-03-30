import React from "react";
import timer from "../../assets/timer.gif";
import message from "../../assets/message.gif";
import noti from "../../assets/noti.gif";
import book from "../../assets/book.gif";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

const SalesGrowthSection = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col items-center gap-16 self-stretch">
      <h1 className="text-[#252B37] text-center font-inter text-[30px] font-medium leading-[38px]">
        Now Achieve Greater Efficiency and Savings
      </h1>
      <div className="mt-6 flex justify-between items-start self-stretch ">
        <div className="flex flex-col w-[264px] items-center gap-4 self-stretch">
          <h4 className="text-4xl font-bold text-[#207C97] shimmer-effect">
            10%
          </h4>
          <p className="text-[#414651] text-center font-inter text-[16px] font-normal leading-[24px]">
            or greater reduction in costs associated with marketing efforts.
          </p>
        </div>
        <div className="flex flex-col w-[327px] items-center gap-4 self-stretch">
          <h4 className="text-4xl font-bold text-[#207C97] shimmer-effect">
            2x
          </h4>
          <p className="text-[#414651] text-center font-inter text-[16px] font-normal leading-[24px]">
            Automation and personalization lead to at least 2x or more increase
            in average revenue per email.
          </p>
        </div>
        <div className="flex flex-col w-[310px] items-center gap-4 self-stretch">
          <h4 className="text-4xl font-bold text-[#207C97] shimmer-effect">
            20%
          </h4>
          <p className="text-[#414651] text-center font-inter text-[16px] font-normal leading-[24px]">
            Reduction in churn with personalized email marketing campaigns.
          </p>
        </div>
      </div>
      {/* Section Heading */}
      <h2 className="text-gray-900 text-center font-inter text-[30px] font-medium leading-[38px] mt-24">
        So, What Is Stopping Your Sales Growth?
      </h2>
      {/* Problem Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-[40px] w-full">
        {/* Problem 1 */}
        <div className="flex gap-4 justify-start items-start">
          <img
            src={message} // Replace with your icon path
            alt="Low Response Rates"
            className="w-[68px] h-[56px]"
          />
          <div>
            <h3 className="text-[#207C97] font-inter text-[18px] font-semibold leading-[28px]">
              Low Response Rates Due to Generic Outreach
            </h3>
            <p className="text-[#535862] font-inter text-[16px] font-normal leading-[24px]">
              Many sales teams struggle with low response rates because their
              outreach lacks the personalization required to engage prospects
              meaningfully.
            </p>
          </div>
        </div>

        {/* Problem 2 */}
        <div className="flex gap-4 justify-end items-start">
          <img
            src={timer} // Replace with your icon path
            alt="Time-Consuming Manual Research"
            className="w-[68px] h-[56px]"
          />
          <div>
            <h3 className="text-[#207C97] font-inter text-[18px] font-semibold leading-[28px]">
              Time-Consuming Manual Research
            </h3>
            <p className="text-[#535862] font-inter text-[16px] font-normal leading-[24px]">
              Sales representatives spend significant amounts of time manually
              researching and customizing emails, reducing efficiency and
              productivity.
            </p>
          </div>
        </div>

        {/* Problem 3 */}
        <div className="flex gap-4 justify-start items-start">
          <img
            src={noti} // Replace with your icon path
            alt="Inconsistent Messaging"
            className="w-[68px] h-[56px]"
          />
          <div>
            <h3 className="text-[#207C97] font-inter text-[18px] font-semibold leading-[28px]">
              Inconsistent Messaging Across Teams
            </h3>
            <p className="text-[#535862] font-inter text-[16px] font-normal leading-[24px]">
              A lack of unified solution understanding among sales teams leads
              to inconsistent messaging, making it harder to pitch effectively
              and align with buyer needs.
            </p>
          </div>
        </div>

        {/* Problem 4 */}
        <div className="flex gap-4 justify-end items-start">
          <img
            src={book} // Replace with your icon path
            alt="Ineffective Storytelling"
            className="w-[68px] h-[56px]"
          />
          <div>
            <h3 className="text-[#207C97] font-inter text-[18px] font-semibold leading-[28px]">
              Ineffective Storytelling in Sales Pitches
            </h3>
            <p className="text-[#535862] font-inter text-[16px] font-normal leading-[24px]">
              Sales pitches often fail to persuade because they lack compelling
              storytelling that integrates the problem, solution, and case
              studies effectively.
            </p>
          </div>
        </div>
      </div>
      <CustomButton
        variant="secondary"
        text={"Try for free"}
        onClick={() => navigate("/login")}
        customClass={"mt-3 font-normal"}
      />{" "}
    </div>
  );
};

export default SalesGrowthSection;
