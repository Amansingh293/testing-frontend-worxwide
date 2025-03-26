import timer from ".././assets/timer.gif";
import message from ".././assets/message.gif";
import noti from ".././assets/noti.gif";
import book from ".././assets/book.gif";
import ScrollComponent from "@/carousels/ScrollComponent";
import Salesworx from "../assets/Salesworx.gif";
import BlogSlide from "@/carousels/BlogSlide";
import Section from "@/components/common/Section";
import FAQ from "@/components/common/Faq";
import Footer from "@/components/common/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import TeamSection from "@/components/common/TeamSection";
import StartEmail from "@/components/pricingPageComponents/StartEmail";
import Testimonials from "@/carousels/Testimonials";
import MultiAccountManagement from "@/components/MultiAccountManagement";
import AiSalesIntelligence from "@/components/AiSalesIntelligence";
import ContactUs from "@/components/common/ContactUs";

const Features = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <>
      <div className="flex flex-col gap-36 w-full relative  py-10 px-36 z-0">
        <div className="absolute  top-[720px] -left-[150px] w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[90px] -z-10"></div>
        <div className="absolute top-[250px] right-[0px] w-[100px] h-[260px]  rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[75px] z-10"></div>
        {/* Header Section */}
        <div className="text-center">
          <div className="flex flex-col items-center text-center">
            <img
              src={Salesworx} // Replace with your icon path
              alt="Time-Consuming Manual Research"
              className="w-[100px] h-[100px] mb-[24px]"
            />
          </div>
          <h1 className="text-[#252B37] text-center font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px]">
            Revolutionize Your Sales Journey with{" "}
            <span className="text-[var(--Brand-colour,#207C97)] font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px]">
              Salesworx
            </span>
          </h1>
          <p className="text-[#414651] font-inter text-[16px] font-normal leading-[24px] mt-[16px]">
            Empowering modern sales teams with AI-driven automation,
            intelligence, and hyper-personalization.
          </p>
          <Link to="/login">
            <button
              onClick={handleClick}
              className={`group relative mt-4 rounded-[36px] border border-[#207C97] 
                   text-white text-sm font-medium leading-[20px] py-[12px] px-[16px] 
                   overflow-hidden transition-colors duration-300 
                   ${
                     isClicked
                       ? "bg-[#ADD8E6] border-[#87CEEB]"
                       : "bg-[#207C97]"
                   }`}
            >
              <div className="flex gap-1 items-center relative z-10">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#207C97]">
                  Get Started Today
                </span>

                {/* SVG with Hover Effects */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  className="transition-transform duration-300 group-hover:-rotate-[50deg] relative z-10"
                >
                  <path
                    d="M2.5 8.98756L14.5265 8.98756L9.85539 4.43159L11.3231 3L18.5 10L11.3231 17L9.85539 15.5684L14.5265 11.0124L2.5 11.0124L2.5 8.98756Z"
                    className="fill-white transition-colors duration-700 group-hover:fill-[#207C97]"
                  />
                </svg>
              </div>

              {/* Background Hover Effect */}
              <span
                className="absolute rounded-full h-[300px] w-[250px] bg-white 
          scale-0 group-hover:scale-100 
          transition-transform duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
          origin-bottom inset-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              ></span>
            </button>
          </Link>
        </div>

        <div className="flex flex-col w-full relative z-20">
          <h1 className="text-[#252B37] text-center font-inter text-[30px] font-medium leading-[38px]">
            Now Achieve Greater Efficiency and Savings
          </h1>

          <div className="mt-16 flex justify-between items-start self-stretch">
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
                Automation and personalization lead to at least 2x or more
                increase in average revenue per email.
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
        </div>
        <div className=" flex flex-col items-center gap-16 py-12 self-stretch">
          {/* Section Heading */}
          <h2 className="text-gray-900 text-center font-inter text-[30px] font-medium leading-[38px]">
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
                  Many sales teams struggle with low response rates because
                  their outreach lacks the personalization required to engage
                  prospects meaningfully.
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
                  Sales representatives spend significant amounts of time
                  manually researching and customizing emails, reducing
                  efficiency and productivity.
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
                  A lack of unified solution understanding among sales teams
                  leads to inconsistent messaging, making it harder to pitch
                  effectively and align with buyer needs.
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
                  Sales pitches often fail to persuade because they lack
                  compelling storytelling that integrates the problem, solution,
                  and case studies effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-[148px] mx-32">
        <ScrollComponent />
      </div>

      <div className="space-y-[144px] mx-32 mt-[144px]">
        <StartEmail />

        <AiSalesIntelligence />

        <MultiAccountManagement />

        <TeamSection
          title="AI Assistant to Nurture Key Accounts & Accelerate Deal Closures"
          description="Automate follow-ups, gain real-time insights, and close high-value deals faster with AI-driven account intelligence."
          buttonText="Try for Free "
          onButtonClick={handleClick}
        />

        <Testimonials
          heading={"Hear from Our Satisfied Customers"}
          headingWidth={"w-[666px]"}
          buttonClasses={"-ml-7"}
        />
        <BlogSlide
          text={"Insights to Elevate Your Sales Game"}
          goto={"blogdetail"}
          classname={"center"}
          buttonClass={"-ml-14"}
        />

        <ContactUs />
      </div>

      <Footer />
    </>
  );
};
// "rounded-[36px] border border-[#207C97] bg-[#207C97] flex px-4 py-3 justify-center items-center gap-1"

export default Features;
