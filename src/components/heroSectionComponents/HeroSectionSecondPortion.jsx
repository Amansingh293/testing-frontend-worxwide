import React from "react";
import Heading from "./SecondPortionComponents/Heading";
import FirstComponent from "./SecondPortionComponents/FirstComponent";
import SecondComponent from "./SecondPortionComponents/SecondComponent";
import ThirdComponent from "./SecondPortionComponents/ThirdComponent";
import FourthComponent from "./SecondPortionComponents/FourthComponent";
import FifthComponent from "./SecondPortionComponents/FifthComponent";
import SixthComponent from "./SecondPortionComponents/SixthComponent";

const   HeroSectionSecondPortion = () => {
  return (
    <div className="w-full rounded-[24px]  mt-16 p-12  overflow-hidden">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <SixthComponent />
    </div>
  );
};

export default HeroSectionSecondPortion;
