import React, { useState } from "react";
import { LuDot } from "react-icons/lu";
import CustomButtonExtended from "../common/CustomButtonExtended";
import { useNavigate } from "react-router-dom";

const CostPerMonth = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pt-6 pb-6 pl-12 pr-12 flex flex-col gap-6 items-start bg-[#207C97] rounded-[16px] w-[572px] h-[508px]">
      <div className="flex flex-col gap-6 text-[#FFF]">
        <p className="leading-[38px] font-bold text-[30px]">
          Cut your sales costs by up to 17x with Salesworx
        </p>

        <ul className="text-[14px] !font-normal">
          <li className="flex gap-1 items-center">
            <LuDot />
            No hiring costs
          </li>
          <li className="flex gap-1 items-center">
            <LuDot />
            No expensive tools
          </li>
          <li className="flex gap-1 items-center">
            <LuDot />
            No admin overhead
          </li>
          <li className="flex gap-1 items-center">
            <LuDot />
            Just results, at a fraction of the cost!
          </li>
        </ul>
      </div>

      <div className="flex flex-col mt-auto text-[#FFF]">
        <p>Salesworx costs, per month</p>
        <p className="font-bold leading-[38px] text-[30px] pt-3">$500</p>
        <CustomButtonExtended text={"Try AI SDR"} width={"140px"} onClick={()=>navigate("/login")}/>
      </div>
    </div>
  );
};

export default CostPerMonth;
