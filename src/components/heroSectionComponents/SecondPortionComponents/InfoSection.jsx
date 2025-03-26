import CustomButton from "@/components/CustomButton";
import React from "react";

const InfoSection = ({
  title,
  description,
  stat,
  statDescription,
  buttonText,
  onButtonClick,
  className,
}) => {
  return (
    <div className={"flex flex-col font-inter w-80 gap-9 " + className}>
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-[#252B37] text-xl font-semibold">{title}</h1>
        <p className="text-[16px] leading-[24px] font-[400] text-gray-600">
          {description}
        </p>
      </div>
      <div className="flex flex-col items-start w-3/4 text-[#207C97] gap-3">
        <h1 className="text-[36px] font-semibold leading-[44px] tracking-[-0.72px] bg-[#f4f9f9] pl-[5px] pr-[5px] pt-[2px] rounded-sm pb-[2px]">
          {stat}
        </h1>
        <p>{statDescription}</p>
        <CustomButton
          variant="secondary"
          text={buttonText}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default InfoSection;
