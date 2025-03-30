import React, { useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import { CustomSlider } from "../ui/CustomSlider";

const SdrCalculator = () => {
  const [totalCost, setTotalCost] = useState(8500);

  const [costObject, setCostObject] = useState({
    salary: [100],
    permonth: [100],
    b2bData: [100],
    adminExpense: [100],
  });

  useEffect(() => {
    setTotalCost((prev) => {
      const total =
        +costObject?.salary[0] +
        +costObject?.permonth[0] +
        +costObject?.adminExpense[0] +
        +costObject?.b2bData[0];
      return total;
    });
  }, [JSON.stringify(costObject)]);

  return (
    <div className="pt-6 pb-6 pl-12 pr-12 flex flex-col justify-evenly items-start bg-white rounded-[16px] h-[508px] w-[572px]">
      <h1>Cost per “human” SDR, per month</h1>

      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col gap-3 w-full">
          <p className="text-[#3D261A] text-[14px] font-normal leading-[20px]">
            SDR salary: ${costObject?.salary}
          </p>
          <CustomSlider
            defaultValue={[costObject?.salary]}
            max={1000}
            step={1}
            height="4px" // Adjust track height
            trackColor="#207C97" // Customize track color
            thumbColor="#207C97" // Customize thumb color
            thumbSize="15px"
            className="w-[480px]"
            value={[costObject?.salary]}
            onValueChange={(value) => {
              setCostObject((prev) => {
                let temp = { ...prev, salary: value };
                return temp;
              });
            }}
            // Customize thumb size
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <p className="text-[#3D261A] text-[14px] font-normal leading-[20px]">
            Sales tools per 1 SDR per month: ${costObject?.permonth}
          </p>
          <CustomSlider
            defaultValue={[22]}
            max={1000}
            step={1}
            height="4px" // Adjust track height
            trackColor="#207C97" // Customize track color
            thumbColor="#207C97" // Customize thumb color
            thumbSize="15px"
            className="w-[480px]"
            value={[costObject?.permonth]}
            onValueChange={(value) => {
              setCostObject((prev) => {
                let temp = { ...prev, permonth: value };
                return temp;
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <p className="text-[#3D261A] text-[14px] font-normal leading-[20px]">
            B2B Data: ${costObject?.b2bData}
          </p>
          <CustomSlider
            defaultValue={[44]}
            max={1000}
            step={1}
            height="4px" // Adjust track height
            trackColor="#207C97" // Customize track color
            thumbColor="#207C97" // Customize thumb color
            thumbSize="15px"
            className="w-[480px]"
            value={[costObject?.b2bData]}
            onValueChange={(value) => {
              setCostObject((prev) => {
                let temp = { ...prev, b2bData: value };
                return temp;
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <p className="text-[#3D261A] text-[14px] font-normal leading-[20px]">
            Admin expenses: ${costObject?.adminExpense}
          </p>
          <CustomSlider
            defaultValue={[33]}
            max={1000}
            step={1}
            height="4px" // Adjust track height
            trackColor="#207C97" // Customize track color
            thumbColor="#207C97" // Customize thumb color
            thumbSize="15px"
            className="w-[480px]"
            value={[costObject?.adminExpense]}
            onValueChange={(value) => {
              setCostObject((prev) => {
                let temp = { ...prev, adminExpense: value };
                return temp;
              });
            }}
          />
        </div>
      </div>

      <p className="text-[30px] font-bold leading-[38px] text-[#252B37">
        Total: ${totalCost}
      </p>
    </div>
  );
};

export default SdrCalculator;
