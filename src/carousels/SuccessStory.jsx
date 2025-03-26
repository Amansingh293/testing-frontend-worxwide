import CustomButton from "@/components/CustomButton";
import { useRef } from "react";

const caseStudies = [
  {
    title: "Leading Global Beverage Brand",
    percentage: "30%",
    description: "reduction in resource conflicts.",
  },
  {
    title: "Top Steel Manufacturing Giant",
    percentage: "20%",
    description: "boost in team productivity.",
  },
  {
    title: "Leading Global Beverage Brand",
    percentage: "40%",
    description: "reduction in project turnaround time.",
  },
  {
    title: "Top Steel Manufacturing Giant",
    percentage: "50%",
    description: "increase in task completion rates.",
  },
  {
    title: "Top Steel Manufacturing Giant",
    percentage: "20%",
    description: "boost in team productivity.",
  },
  {
    title: "Leading Global Beverage Brand",
    percentage: "40%",
    description: "reduction in project turnaround time.",
  },
  {
    title: "Top Steel Manufacturing Giant",
    percentage: "50%",
    description: "increase in task completion rates.",
  },
];

export default function SuccessStory({ className }) {
  const scrollerRef = useRef(null);
  return (
    <div className={`w-fit  ${className}`}>
      <CaseStudiesCarousel caseStudies={caseStudies} />
    </div>
  );
}

const CaseStudiesCarousel = ({ caseStudies }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  return (
    <>
      <div className={`bg-white w-full flex flex-col items-center py-10`}>
        <h2 className="text-[#252B37] text-center text-[30px] pr-[24rem] font-inter font-medium leading-[38px] mb-[64px]">
          Success Stories Powered by Salesworx
        </h2>

        <div ref={containerRef} className="relative z-20  w-full">
          <div className="flex items-center h-[450px]  w-full overflow-hidden">
            <ul
              ref={scrollerRef}
              className="flex w-full h-[450px] shrink-0 gap-[0px] animate-scroll hover:[animation-play-state:paused] "
            >
              {caseStudies.map((item, index) => (
                <li
                  key={index}
                  className="relative group w-[340px] max-w-full  rounded-2xl flex-shrink-0 md:w-[336px] text-center "
                  // flex flex-col items-start gap-6 p-10 self-stretch rounded-t-lg border border-[#E9EAEB] bg-white
                >
                  {/* Hover Glow Effect (Fixed) */}
                  <div className="absolute top-20 w-[400px] h-[200px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_0%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[97px] opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>

                  {/* Card with Fixed Height */}
                  <div className="w-[291px] h-[335px] flex flex-col justify-between border rounded-lg  bg-white text-center z-10">
                    {/* Card Content */}
                    <div className="flex-grow ">
                      <h3 className="p-6 text-[#414651] text-lg font-inter font-normal leading-[28px] text-left border-b">
                        {item.title}
                      </h3>

                      <div className="mt-4 p-6 text-left flex flex-col justify-center cursor-pointer hover:text-[#207C97]">
                        <p className="text-inherit text-3xl font-inter font-bold leading-[44px] tracking-[-0.72px]">
                          {item.percentage}
                        </p>
                        <p className="pr-2 text-inherit text-base font-inter font-normal leading-6">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="w-full bg-[#207C97] text-white px-6 py-4 rounded-b-lg transition">
                      Check Case Study →
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center pr-[24rem]">
          <CustomButton
            variant="secondary"
            text={"Start Your Success Journey"}
            onClick={"onButtonClick"}
          />{" "}
        </div>
      </div>
    </>
  );
};
