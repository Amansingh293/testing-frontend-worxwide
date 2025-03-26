import React from "react";

const LinkednTemplate = ({ className }) => {
  return (
    <div
      className={
        "w-[437.485px] flex flex-col gap-[8px] p-4 shadow-[0_4px_12px_0_#E9EAEB] rounded-[5px] " +
        className
      }
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_7645_15912)">
              <path
                d="M14.589 0.414062H1.92536C1.63449 0.414062 1.35552 0.529613 1.14984 0.735293C0.944163 0.940973 0.828613 1.21993 0.828613 1.51081V14.1745C0.828613 14.4653 0.944163 14.7443 1.14984 14.95C1.35552 15.1557 1.63449 15.2712 1.92536 15.2712H14.589C14.8799 15.2712 15.1589 15.1557 15.3645 14.95C15.5702 14.7443 15.6858 14.4653 15.6858 14.1745V1.51081C15.6858 1.21993 15.5702 0.940973 15.3645 0.735293C15.1589 0.529613 14.8799 0.414062 14.589 0.414062ZM5.25687 13.0705H3.02314V5.97518H5.25687V13.0705ZM4.13846 4.99192C3.88508 4.9905 3.6378 4.91405 3.42783 4.77222C3.21786 4.63039 3.05461 4.42954 2.95868 4.19502C2.86275 3.9605 2.83844 3.70281 2.88883 3.45449C2.93921 3.20617 3.06202 2.97833 3.24176 2.79974C3.4215 2.62115 3.65012 2.4998 3.89876 2.45102C4.1474 2.40223 4.40493 2.42819 4.63883 2.52563C4.87273 2.62306 5.07252 2.7876 5.213 2.99847C5.35348 3.20935 5.42834 3.45711 5.42814 3.7105C5.43053 3.88013 5.39874 4.04852 5.33467 4.20561C5.2706 4.36271 5.17556 4.50529 5.05521 4.62487C4.93486 4.74445 4.79167 4.83858 4.63417 4.90164C4.47666 4.9647 4.30808 4.9954 4.13846 4.99192ZM13.4902 13.0767H11.2575V9.20042C11.2575 8.05725 10.7716 7.70439 10.1443 7.70439C9.48188 7.70439 8.83188 8.20375 8.83188 9.22931V13.0767H6.59814V5.98034H8.74624V6.96359H8.77513C8.99077 6.52716 9.74601 5.78121 10.8985 5.78121C12.1448 5.78121 13.4912 6.52097 13.4912 8.68764L13.4902 13.0767Z"
                fill="#0A66C2"
              />
            </g>
            <defs>
              <clipPath id="clip0_7645_15912">
                <rect
                  width="14.8572"
                  height="14.8572"
                  fill="white"
                  transform="translate(0.828613 0.414062)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="text-[#252B37] text-[12px] leading-[14px]">
            LinkedIn Connection
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
              <g clipPath="url(#clip0_7899_5280)">
                <path
                  d="M5.87536 2.95874V5.45153L7.53722 6.28246M10.03 5.45153C10.03 7.74608 8.16991 9.60618 5.87536 9.60618C3.5808 9.60618 1.7207 7.74608 1.7207 5.45153C1.7207 3.15698 3.5808 1.29688 5.87536 1.29688C8.16991 1.29688 10.03 3.15698 10.03 5.45153Z"
                  stroke="#B54708"
                  strokeWidth="1.2464"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              strokeWidth="1.2464"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.04996 4.70929C8.39414 4.70929 8.67315 4.43027 8.67315 4.08609C8.67315 3.74191 8.39414 3.46289 8.04996 3.46289C7.70577 3.46289 7.42676 3.74191 7.42676 4.08609C7.42676 4.43027 7.70577 4.70929 8.04996 4.70929Z"
              stroke="#717680"
              strokeWidth="1.2464"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.04996 13.4341C8.39414 13.4341 8.67315 13.155 8.67315 12.8109C8.67315 12.4667 8.39414 12.1877 8.04996 12.1877C7.70577 12.1877 7.42676 12.4667 7.42676 12.8109C7.42676 13.155 7.70577 13.4341 8.04996 13.4341Z"
              stroke="#717680"
              strokeWidth="1.2464"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="border-[1px] rounded-[5px] flex flex-col gap-4 p-4 text-[9px]">
       
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
      </div>

      <div className="w-full flex gap-2 items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M9.80498 11.7281L5.98877 7.91192L9.80498 4.0957"
            stroke="#252B37"
            stroke-width="1.27207"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.43018 11.7281L10.2464 7.91192L6.43018 4.0957"
            stroke="#252B37"
            stroke-width="1.27207"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="text-[#252B37] text-[10px] text-center">1/10</span>
      </div>
    </div>
  );
};

export default LinkednTemplate;
