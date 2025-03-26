import React from "react";

const EmailTemplate = ({ className }) => {
  return (
    <div
      className={
        "w-[437.485px] flex flex-col gap-[8px] p-4  shadow-[0_4px_12px_0_#E9EAEB] rounded-[5px] " +
        className
      }
    >
      <div className="flex justify-between items-center ">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="15px"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M12.3822 3.33359C12.3822 2.76232 11.9148 2.29492 11.3436 2.29492H3.03427C2.463 2.29492 1.99561 2.76232 1.99561 3.33359M12.3822 3.33359V9.56557C12.3822 10.1368 11.9148 10.6042 11.3436 10.6042H3.03427C2.463 10.6042 1.99561 10.1368 1.99561 9.56557V3.33359M12.3822 3.33359L7.18892 6.96891L1.99561 3.33359"
              stroke="#252B37"
              stroke-width="0.997117"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-[#252B37] text-[12px] leading-[14px]">
            Intitial Email
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex gap-2 bg-[#FFFAEB] leading-[11px] p-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 11 11"
              fill="none"
            >
              <g clip-path="url(#clip0_7899_5280)">
                <path
                  d="M5.87536 2.95874V5.45153L7.53722 6.28246M10.03 5.45153C10.03 7.74608 8.16991 9.60618 5.87536 9.60618C3.5808 9.60618 1.7207 7.74608 1.7207 5.45153C1.7207 3.15698 3.5808 1.29688 5.87536 1.29688C8.16991 1.29688 10.03 3.15698 10.03 5.45153Z"
                  stroke="#B54708"
                  stroke-width="1.2464"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7899_5280">
                  <rect
                    width="9.97117"
                    height="9.97117"
                    fill="white"
                    transform="translate(0.889648 0.464844)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[#B54708] text-[9px]">Approval Pending</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.04996 9.07167C8.39414 9.07167 8.67315 8.79266 8.67315 8.44847C8.67315 8.10429 8.39414 7.82528 8.04996 7.82528C7.70577 7.82528 7.42676 8.10429 7.42676 8.44847C7.42676 8.79266 7.70577 9.07167 8.04996 9.07167Z"
              stroke="#717680"
              stroke-width="1.2464"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.04996 4.70929C8.39414 4.70929 8.67315 4.43027 8.67315 4.08609C8.67315 3.74191 8.39414 3.46289 8.04996 3.46289C7.70577 3.46289 7.42676 3.74191 7.42676 4.08609C7.42676 4.43027 7.70577 4.70929 8.04996 4.70929Z"
              stroke="#717680"
              stroke-width="1.2464"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.04996 13.4341C8.39414 13.4341 8.67315 13.155 8.67315 12.8109C8.67315 12.4667 8.39414 12.1877 8.04996 12.1877C7.70577 12.1877 7.42676 12.4667 7.42676 12.8109C7.42676 13.155 7.70577 13.4341 8.04996 13.4341Z"
              stroke="#717680"
              stroke-width="1.2464"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="border-[1px] rounded-[5px] flex flex-col gap-4 p-4 text-[9px]">
        <span className="text-[#000000] font-semibold">
          Subject: Unlock AI-Driven Sales Growth Today – Before Your Competitors
          Do!
        </span>
        <span>Hello,</span>
        <span>
          AI-driven sales automation is reshaping industries, but many are still
          struggling with AI expertise and data integration. At Metasquare, we
          specialize in bridging these gaps, ensuring smooth adoption and
          immediate impact for businesses like Worxwide.
        </span>
        <span>
          Let’s discuss how we can supercharge your growth strategy – how does a
          call tomorrow sound?
        </span>
        <span>Best regardsSarah JohnsonBusiness Development Manager</span>
      </div>

      <div className="border-[1px] rounded-[5px] w-full flex p-2 gap-2">
        <svg
          width="25"
          height="25"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.43457"
            y="0.785156"
            width="19.9423"
            height="19.9423"
            rx="9.97117"
            fill="#207C97"
            fill-opacity="0.2"
          />
          <g clip-path="url(#clip0_7899_5290)">
            <path
              d="M10.8212 6.60156H7.91296C7.69259 6.60156 7.48123 6.68911 7.32541 6.84494C7.16958 7.00077 7.08203 7.21212 7.08203 7.43249V14.0799C7.08203 14.3003 7.16958 14.5117 7.32541 14.6675C7.48123 14.8233 7.69259 14.9109 7.91296 14.9109H12.8985C13.1189 14.9109 13.3303 14.8233 13.4861 14.6675C13.6419 14.5117 13.7295 14.3003 13.7295 14.0799V9.50982M10.8212 6.60156L13.7295 9.50982M10.8212 6.60156V9.50982H13.7295"
              stroke="#207C97"
              stroke-width="0.830931"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_7899_5290">
              <rect
                width="9.97117"
                height="9.97117"
                fill="white"
                transform="translate(5.42041 5.76953)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="flex flex-col gap-1 items-start leading-[12.464px] text-[9px] text-[#414651] ">
          <span>Tech design requirements.pdf</span>
          <span>200 KB</span>
        </div>
      </div>

      <div className="flex w-full justify-end items-center gap-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_7899_5299)">
            <path
              d="M11.7922 6.22298L7.01955 10.9956C6.43486 11.5803 5.64186 11.9088 4.81499 11.9088C3.98812 11.9088 3.19511 11.5803 2.61043 10.9956C2.02574 10.4109 1.69727 9.61794 1.69727 8.79107C1.69727 7.9642 2.02574 7.1712 2.61043 6.58651L7.38308 1.81385C7.77287 1.42406 8.30154 1.20508 8.85279 1.20508C9.40404 1.20508 9.93271 1.42406 10.3225 1.81385C10.7123 2.20364 10.9313 2.73231 10.9313 3.28356C10.9313 3.83481 10.7123 4.36348 10.3225 4.75327L5.54465 9.52593C5.34975 9.72082 5.08542 9.83031 4.80979 9.83031C4.53417 9.83031 4.26984 9.72082 4.07494 9.52593C3.88005 9.33103 3.77055 9.0667 3.77055 8.79107C3.77055 8.51545 3.88005 8.25111 4.07494 8.05622L8.48407 3.65229"
              stroke="#252B37"
              stroke-width="1.2464"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_7899_5299">
              <rect
                width="12.464"
                height="12.464"
                fill="white"
                transform="translate(0.657715 0.486328)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className="flex bg-[#207C97] pt-2 pb-2 pl-3 pr-3 text-[9px] rounded-[10px] text-white font-semibold">
          Approve
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
