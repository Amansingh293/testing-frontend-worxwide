import React from "react";

import ProfileImage from "../../assets/pp.png";

const ProfileCard = ({
  profilePic,
  name,
  designation,
  companyLogo,
  companyName,
  buyingAuthority,
  buyingIntent,
  salesScore,
  recommendation,
}) => {
  return (
    <div className="flex pt-8 pb-8 pl-5 pr-5 gap-6 font-inter tracking-wide shadow-[0_4px_12px_0_#E9EAEB] rounded-[8px] w-[660.5px] h-[259.84px] leading-[12.94px]">
      <div className="flex flex-col w-1/3 items-center gap-5">
        <img
          src={ProfileImage}
          height={"97"}
          width={"97"}
          className="border-4 border-green-500 rounded-full"
        />
        <div className="flex flex-col items-center gap-4">
          <p className="text-[#252B37] font-semibold text-[18px]">
            Apeksha Singh
          </p>
          <p className="text-[14px]">Chief Product Officer</p>
          <div className="flex gap-2 items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/d718/b6d7/86e2a9852fe75146a140a4a439757756?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=meZgfbUNbqCxalBZ2AAzoJLJqBU~95Id-CFiQeR23QR9bkySQXNEcNKorKoEqVOOA~iXgVvPRkf0VTVoc8PJdcy~-uYWNLYop3qaX9diOG3IS~7WHGFD2UKBFBtj4rcw4oVDo4fpKDH0UITCKdj3LuYuDszs3J9eAW8veAsUUPHXcgpGExgcjF6H~yazPKrXoVCjtlBEFop84DaqImf3f0pa18l-2PCRiC7ATbzFIhTp-Qz0up3P~Ez228FVNTKLhNZ7bFAI78KXKfyWiDo69V8e-KzsMzmRCQca2ebOD3yv8fuq5XLdIAKn-vqKfZMOWhF9MkejikFVPxK7kvQ1cQ__"
              alt=""
              className="h-5 w-5"
            />
            <span className="text-[#717680] text-[13px]">Coca-Cola</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full gap-5 font-inter w-2/3 ">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 text-[13px] items-center">
            <span className="text-[#717680]">Buying Authority</span>
            <span className="text-[#12B76A] flex items-center gap-3">
              Influencer{" "}
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7648_8380)">
                  <path
                    d="M7.73545 6.53197C7.73545 6.27679 7.52859 6.06993 7.27341 6.06993C7.01823 6.06993 6.81136 6.27679 6.81136 6.53197V9.30425C6.81136 9.55943 7.01823 9.7663 7.27341 9.7663C7.52859 9.7663 7.73545 9.55943 7.73545 9.30425V6.53197ZM7.9656 4.68382C7.9656 5.0661 7.6557 5.37599 7.27342 5.37599C6.89114 5.37599 6.58124 5.0661 6.58124 4.68382C6.58124 4.30154 6.89114 3.99164 7.27342 3.99164C7.6557 3.99164 7.9656 4.30154 7.9656 4.68382ZM7.27431 0.525391C3.70178 0.525391 0.805664 3.4215 0.805664 6.99404C0.805664 10.5666 3.70178 13.4627 7.27431 13.4627C10.8468 13.4627 13.743 10.5666 13.743 6.99404C13.743 3.4215 10.8468 0.525391 7.27431 0.525391ZM1.72976 6.99404C1.72976 3.93186 4.21214 1.44948 7.27431 1.44948C10.3365 1.44948 12.8189 3.93186 12.8189 6.99404C12.8189 10.0562 10.3365 12.5386 7.27431 12.5386C4.21214 12.5386 1.72976 10.0562 1.72976 6.99404Z"
                    fill="#12B76A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7648_8380">
                    <rect
                      width="14.7855"
                      height="14.7855"
                      fill="white"
                      transform="translate(0.273926 -0.00585938)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="flex flex-col gap-1 text-[13px] items-center border-l-[1px] border-r-[1px] pl-7 pr-7">
            <span className="text-[#717680]">Buying Intent</span>
            <span className="bg-[#F5F5F5] flex items-center gap-2 text-[12px] p-1">
              Commercial{" "}
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10997 6.53197C8.10997 6.27679 7.9031 6.06993 7.64792 6.06993C7.39274 6.06993 7.18587 6.27679 7.18587 6.53197V9.30425C7.18587 9.55943 7.39274 9.7663 7.64792 9.7663C7.9031 9.7663 8.10997 9.55943 8.10997 9.30425V6.53197ZM8.34011 4.68382C8.34011 5.0661 8.03021 5.37599 7.64793 5.37599C7.26565 5.37599 6.95575 5.0661 6.95575 4.68382C6.95575 4.30154 7.26565 3.99164 7.64793 3.99164C8.03021 3.99164 8.34011 4.30154 8.34011 4.68382ZM7.64882 0.525391C4.07629 0.525391 1.18018 3.4215 1.18018 6.99404C1.18018 10.5666 4.07629 13.4627 7.64882 13.4627C11.2214 13.4627 14.1175 10.5666 14.1175 6.99404C14.1175 3.4215 11.2214 0.525391 7.64882 0.525391ZM2.10427 6.99404C2.10427 3.93186 4.58665 1.44948 7.64882 1.44948C10.711 1.44948 13.1934 3.93186 13.1934 6.99404C13.1934 10.0562 10.711 12.5386 7.64882 12.5386C4.58665 12.5386 2.10427 10.0562 2.10427 6.99404Z"
                  fill="#717680"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col gap-1 text-[13px] items-center">
            <span className="text-[#717680]">Sales Score</span>
            <span className="bg-[#F5F5F5] flex items-center gap-2 text-[12px] p-1">
              High{" "}
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10997 6.53197C8.10997 6.27679 7.9031 6.06993 7.64792 6.06993C7.39274 6.06993 7.18587 6.27679 7.18587 6.53197V9.30425C7.18587 9.55943 7.39274 9.7663 7.64792 9.7663C7.9031 9.7663 8.10997 9.55943 8.10997 9.30425V6.53197ZM8.34011 4.68382C8.34011 5.0661 8.03021 5.37599 7.64793 5.37599C7.26565 5.37599 6.95575 5.0661 6.95575 4.68382C6.95575 4.30154 7.26565 3.99164 7.64793 3.99164C8.03021 3.99164 8.34011 4.30154 8.34011 4.68382ZM7.64882 0.525391C4.07629 0.525391 1.18018 3.4215 1.18018 6.99404C1.18018 10.5666 4.07629 13.4627 7.64882 13.4627C11.2214 13.4627 14.1175 10.5666 14.1175 6.99404C14.1175 3.4215 11.2214 0.525391 7.64882 0.525391ZM2.10427 6.99404C2.10427 3.93186 4.58665 1.44948 7.64882 1.44948C10.711 1.44948 13.1934 3.93186 13.1934 6.99404C13.1934 10.0562 10.711 12.5386 7.64882 12.5386C4.58665 12.5386 2.10427 10.0562 2.10427 6.99404Z"
                  fill="#717680"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="leading-[22.18px] font-semibold text-[15px] mb-1">
            Relevance & Recommendations
          </p>
          <p className="text-[#717680] text-[13px] leading-5">
            She matches your ideal customer profile and Interests. She has been
            significantly engaged in your company activity.
          </p>
          <p className="text-[#207C97] text-[13px] pt-1">{`[source]`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
