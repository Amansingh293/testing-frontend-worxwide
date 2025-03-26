import React from "react";

const FeatureComponent = ({ image, title, children, homepage }) => {
  return (
    <div
      className={`border-[1px] border-[#E9EAEB] rounded-[48px] flex items-center justify-start gap-2 p-2 ${
        homepage ? "pl-[10px] pr-[10px]" : "pl-2 pr-3"
      } gap-3 relative`}
    >
      {image}
      <span className="text-[#207C97] text-[16px] leading-[24px] text-nowrap">
        {title}
      </span>
      {children}
    </div>
  );
};

export default FeatureComponent;
