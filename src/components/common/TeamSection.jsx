import React, { memo } from "react";
import CustomButtonExtended from "./CustomButtonExtended";

const TeamSection = memo(
  ({ title, description, buttonText, onButtonClick }) => {
    return (
      <section className="rounded-[20px] bg-[#207C97] w-full overflow-hidden h-[318px] flex-shrink-0 mx-auto  py-12 md:py-16 px-6 relative flex flex-col justify-center items-center">
        <div className="text-center m-[50px]">
          <h2 className="text-white text-center font-inter text-[30px] font-medium leading-[32px] mt-4">
            {title}
          </h2>
          <p className="text-white text-center text-[16px] font-inter font-normal leading-6 mt-4">
            {description}
          </p>
          <CustomButtonExtended
            text={buttonText}
            onClick={onButtonClick}
            isClicked={false}
          />
        </div>
        <div className="absolute -top-14 -left-14 w-48 h-48 md:w-40 md:h-40 rounded-full border-8 border-white opacity-20"></div>
        <div className="absolute -bottom-14 -right-14 w-48 h-48 md:w-40 md:h-40 rounded-full border-8 border-white"></div>
      </section>
    );
  }
);

export default TeamSection;
