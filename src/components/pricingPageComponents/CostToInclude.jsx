import React, { useState } from "react";
import rocket from "@/assets/rocket.gif";
import target from "@/assets/target.gif";
import { Link, useNavigate } from "react-router-dom";
import CustomButtonCorrect from "../common/CustomButtonCorrect";

const CostToInclude = () => {
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="relative z-0 h-fit w-full">
      <div className="flex flex-col items-center gap-4 min-h-screenn  pt-16">
        <div>
          <h2 className="text-[#252B37] text-center font-inter text-3xl font-semibold leading-[44px] tracking-[-0.72px] mb-[12px]">
            Maximize Your Outreach, Minimize Your Effort
          </h2>
          <h3 className="text-[#207C97] text-center font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px]">
            Pay As You Go!
          </h3>
        </div>
        <p className="text-[#414651] text-center font-inter text-[16px] font-normal leading-[24px]">
          Start your free trial now for any 2 prospects and 1 account!
        </p>

        <div className="relative flex flex-col  justify-center p-6 ">
          <div className="realtive card relative w-[800px] rounded-[16px] p-[3px]">
            <div className="absolute top-[20%] -left-[80px] w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div>
            <div className="absolute top-[90px] left-[650px] w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div>

            <div className="flex justify-center item-center rounded-[12px] p-4 bg-white pt-[28px] pb-[28px]">
              <div className="bg-white ml-4 rounded-lg w-full max-w-sm border border-r-2 flex flex-col justify-around gap-10 ">
                <div className="flex gap-2 m-2 pt-9 pb-0">
                  <img
                    src={target}
                    alt="rocket"
                    className="w-[32px] h-[32px]"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <span className="text-[#3D261A] font-inter text-[20px] font-normal leading-[22px]">
                        $
                      </span>
                      <span className="text-[#3D261A] font-inter text-[36px] font-bold leading-[30px] tracking-[-0.72px]">
                        0.10
                      </span>
                      <span className=" "> /prospect</span>
                    </div>
                    <p className="text-[#717680] font-inter text-[14px] font-normal leading-[20px] mt-2">
                      A prospect is a persona with unique email you wish to
                      target with omni-channel personalized outreach.
                    </p>
                  </div>
                </div>
                <hr className="w-full" />
                <div className="flex gap-2  m-2 p-4 pt-0 pb-10">
                  <img
                    src={rocket}
                    alt="target"
                    className="w-[32px] h-[32px] "
                  />
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <span className="text-[#3D261A] font-inter text-[20px] font-normal leading-[22px]">
                        $
                      </span>
                      <span className="text-[#3D261A] font-inter text-[36px] font-bold leading-[30px] tracking-[-0.72px]">
                        1
                      </span>
                      <span className=" "> /account</span>
                    </div>
                    <p className="text-[#717680] font-inter text-[14px] font-normal leading-[20px] mt-2">
                      An account is a company to nurture, manage deals, and
                      conversations.
                    </p>
                  </div>
                </div>
                {/* <div className="flex flex-col mt-14">
                  <div className="flex">
                    <span className="text-red-500 text-2xl font-bold">$0.10</span>
                    <span className="flex flex-col justify-end">/ account</span>
                    </div>
                    <p className="text-gray-700">
                    An account is a company to nurture, manage deals, and
                    conversations.
                    </p>
                </div> */}
              </div>

              <div className="flex justify-center item-center bg-white p-2 w-full max-w-sm m-2">
                <div>
                  <h3 className="text-[#3D261A] font-inter text-lg font-semibold leading-[28px] mb-[24px]">
                    What's Included:
                  </h3>
                  <ul className="space-y-6 text-[#3D261A] font-inter text-sm font-normal leading-[20px] mb-3">
                    <li className="flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                      >
                        <path
                          d="M13.5 1.375L5.25 9.625L1.5 5.875"
                          stroke="#28A6CC"
                          stroke-width="1.6666"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Email Personalization
                    </li>
                    <li className="flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                      >
                        <path
                          d="M13.5 1.375L5.25 9.625L1.5 5.875"
                          stroke="#28A6CC"
                          stroke-width="1.6666"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Bulk Emailing
                    </li>
                    <li className="flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                      >
                        <path
                          d="M13.5 1.375L5.25 9.625L1.5 5.875"
                          stroke="#28A6CC"
                          stroke-width="1.6666"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Buyer Intent Identification
                    </li>
                    <li className="flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                      >
                        <path
                          d="M13.5 1.375L5.25 9.625L1.5 5.875"
                          stroke="#28A6CC"
                          stroke-width="1.6666"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Account Based Acquisition
                    </li>
                    <li className="flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                      >
                        <path
                          d="M13.5 1.375L5.25 9.625L1.5 5.875"
                          stroke="#28A6CC"
                          stroke-width="1.6666"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Omni-channel Targeting
                    </li>
                    <p className="text-[14px] text-[#3D261A] underline decoration-solid decoration-auto underline-offset-auto">
                      View complete feature list
                    </p>
                  </ul>

                  <CustomButtonCorrect
                    text="Start for free*"
                    onClick={() => navigate("/login")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mt-5">
              *Free trial includes 2 prospects and 1 account. After that you pay
              as per usage. No credit card required for accessing free plan.
            </p>
          </div>
        </div>
        <div>
          <div className="h-[50px] "></div>
        </div>
      </div>
    </div>
  );
};

export default CostToInclude;
