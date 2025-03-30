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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import TeamSection from "@/components/common/TeamSection";
import StartEmail from "@/components/pricingPageComponents/StartEmail";
import Testimonials from "@/carousels/Testimonials";
import MultiAccountManagement from "@/components/MultiAccountManagement";
import AiSalesIntelligence from "@/components/AiSalesIntelligence";
import ContactUs from "@/components/common/ContactUs";
import FeaturesHeader from "@/components/FeaturesHeader";

const Features = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <>
      <main className="flex flex-col gap-36 items-center 2xl:mx-40">
        <section className="flex flex-col gap-36 w-full relative py-10 px-36 2xl:px-40">
          <div className="absolute top-[720px] xl:-left-[150px] 2xl:-left-[230px] z-10 w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[90px]"></div>
          <div className="absolute top-[250px] xl:right-[0px] 2xl:-right-24 w-[100px] h-[260px] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[75px] z-10"></div>

          {/* Header Section */}
          <FeaturesHeader />

          <article className="flex flex-col w-full relative z-20">
            <h1 className="text-[#252B37] text-center font-inter text-[30px] font-medium leading-[38px]">
              Now Achieve Greater Efficiency and Savings
            </h1>

            <div className="mt-16 flex justify-between items-start self-stretch">
              <div className="flex flex-col w-[264px] items-center gap-4 self-stretch">
                <h2 className="text-4xl font-bold text-[#207C97] shimmer-effect">
                  10%
                </h2>
                <p className="text-[#414651] text-center font-inter text-[16px] font-normal leading-[24px]">
                  or greater reduction in costs associated with marketing
                  efforts.
                </p>
              </div>
              <div className="flex flex-col w-[327px] items-center gap-4 self-stretch">
                <h2 className="text-4xl font-bold text-[#207C97] shimmer-effect">
                  2x
                </h2>
                <p className="text-[#414651] text-center font-inter text-[16px] font-normal leading-[24px]">
                  Automation and personalization lead to at least 2x or more
                  increase in average revenue per email.
                </p>
              </div>
              <div className="flex flex-col w-[310px] items-center gap-4 self-stretch">
                <h2 className="text-4xl font-bold text-[#207C97] shimmer-effect">
                  20%
                </h2>
                <p className="text-[#414651] text-center font-inter text-[16px] font-normal leading-[24px]">
                  Reduction in churn with personalized email marketing
                  campaigns.
                </p>
              </div>
            </div>
          </article>

          {/* Problems Section */}
          <section className="flex flex-col items-center gap-16 py-12 self-stretch">
            <h2 className="text-gray-900 text-center font-inter text-[30px] font-medium leading-[38px]">
              So, What Is Stopping Your Sales Growth?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] w-full">
              {/* Problem 1 */}
              <article className="flex gap-4 justify-start items-start">
                <img
                  src={message}
                  alt="Low response rates due to generic outreach"
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
              </article>

              {/* Problem 2 */}
              <article className="flex gap-4 justify-end items-start">
                <img
                  src={timer}
                  alt="Time-consuming manual research"
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
              </article>
              <article className="flex gap-4 justify-end items-start">
                <img
                  src={noti}
                  alt="Ineffective Storytelling in Sales Pitches"
                  className="w-[68px] h-[56px]"
                />
                <div>
                  <h3 className="text-[#207C97] font-inter text-[18px] font-semibold leading-[28px]">
                    Ineffective Storytelling in Sales Pitches{" "}
                  </h3>
                  <p className="text-[#535862] font-inter text-[16px] font-normal leading-[24px]">
                    Sales pitches often fail to persuade because they lack
                    compelling storytelling that integrates the problem,
                    solution, and case studies effectively.
                  </p>
                </div>
              </article>
              <article className="flex gap-4 justify-end items-start">
                <img
                  src={book}
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
              </article>
            </div>
          </section>
        </section>

        <section className="space-y-[148px] px-32 2xl:px-36 w-full">
          <ScrollComponent />
        </section>

        <section className="space-y-[144px] xl:px-32 2xl:px-40 mt-[144px] w-full">
          <StartEmail />

          <AiSalesIntelligence />

          <MultiAccountManagement />

          <TeamSection
            title="AI Assistant to Nurture Key Accounts & Accelerate Deal Closures"
            description="Automate follow-ups, gain real-time insights, and close high-value deals faster with AI-driven account intelligence."
            buttonText="Try for Free"
            onButtonClick={() => navigate("/login")}
          />

          <Testimonials
            heading={"Hear from Our Satisfied Customers"}
            headingWidth={"w-[666px]"}
            buttonClasses={"xl:-ml-7 "}
            cardMargin={"xl:ml-32 2xl:ml-[310px]"}
          />
          <BlogSlide
            text={"Insights to Elevate Your Sales Game"}
            goto={"blogdetail"}
            classname={"center"}
            buttonClass={"xl:-ml-[15px]"}
            customMarginCard={"2xl:ml-80"}
          />

          <ContactUs />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Features;
