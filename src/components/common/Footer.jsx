import React, { useState } from "react";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const features = [
    { label: "Hyperpersonalized Outreach", url: "#" },
    { label: "Omnichannel Sequencing", url: "#" },
    { label: "Sales Intelligence", url: "#" },
    { label: "Account Based Selling", url: "#" },
    { label: "Lead Scoring", url: "#" },
  ];
  const companyLinks = [
    { label: "About", url: "#" },
    { label: "Features", url: "#" },
    { label: "Works", url: "#" },
    { label: "Career", url: "#" },
  ];

  const helpLinks = [
    { label: "Customer Support", url: "#" },
    { label: "Terms & Conditions", url: "#" },
    { label: "Privacy Policy", url: "#" },
  ];

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  return (
    <>
      <div className="bg-white w-full mt-20">
        {/* Footer Section */}
        <footer className="mt-6 mb-6 flex py-12 mx-20 justify-start w-full">
          <div className="w-[369px] flex flex-col gap-5">
            <p className="text-[#252B37] font-inter text-sm font-normal leading-5">
              <strong>Salesworx</strong>, crafted by Worxwide Consulting,
              empowers modern sales teams.
            </p>
            <a
              href="https://worxwide.com/"
              className="text-[#207C97] font-inter text-sm font-normal leading-[20px] underline block mt-4"
            >
              Learn more about Worxwide Consulting.
            </a>
            <div className="mt-6">
              <p className="text-gray-600">
                Subscribe to the get latest updates
              </p>
              <div className="flex mt-2 gap-2">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="border border-[#D4D4D8] rounded p-2 px-4 flex items-center gap-3 text-[#717680] text-sm font-normal leading-[20px]"
                />
                <button
                  className={`text-xs font-bold leading-[18px] flex flex-col items-center justify-center gap-2.5 p-2.5 rounded ${
                    subscribed
                      ? "text-white bg-[#039855]"
                      : "text-white bg-[#717680]"
                  } transition-all`}
                  onClick={handleSubscribe}
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                </button>
              </div>
              {/* Thank You Message */}
              {subscribed && (
                <p className="text-[#039855] mt-3">
                  Thank you for subscribing!
                </p>
              )}
              <div className="flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <g filter="url(#filter0_d_6071_951)">
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="4"
                      fill="white"
                    />
                    <path
                      d="M22.0513 8.52344L16.0642 13.1959L9.94019 8.52344V8.5247L9.94758 8.53101V15.0737L15.9951 19.8471L22.0513 15.258V8.52344Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.6235 7.38639L22.0511 8.52292V15.2575L26.9987 11.459V9.17074C26.9987 9.17074 26.3981 5.90258 23.6235 7.38639Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M22.0511 15.2575V23.9924H25.8432C25.8432 23.9924 26.9222 23.8813 26.9999 22.6513V11.459L22.0511 15.2575Z"
                      fill="#34A853"
                    />
                    <path
                      d="M9.94787 23.9996V15.0727L9.94019 15.0664L9.94787 23.9996Z"
                      fill="#C5221F"
                    />
                    <path
                      d="M9.94014 8.52453L8.37646 7.39431C5.60179 5.9105 5 9.17741 5 9.17741V11.4656L9.94014 15.0672V8.52453Z"
                      fill="#C5221F"
                    />
                    <path
                      d="M9.94019 8.52344V15.0661L9.94787 15.0724V8.52975L9.94019 8.52344Z"
                      fill="#C5221F"
                    />
                    <path
                      d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                      fill="#4285F4"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_6071_951"
                      x="-2"
                      y="-1"
                      width="36"
                      height="36"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6071_951"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6071_951"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="4"
                    fill="#1275B1"
                  />
                  <path
                    d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
                    fill="white"
                  />
                  <path
                    d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z"
                    fill="white"
                  />
                  <path
                    d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            className=" flex xl:gap-[169px] 2xl:gap-[180px] xl:ml-32 2xl:ml-[570px]"
          >
            {/* Column 2 */}
            <div className=" w-[100px]">
              <h3 className="text-left text-[#207C97] text-sm font-medium leading-5 font-inter ">
                Company
              </h3>
              <ul className="mt-4 space-y-5">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-[#252B37] font-inter text-sm font-normal leading-5 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="w-[200px]">
              <h3 className="text-left text-[#207C97] text-sm font-medium leading-5 font-inter ">
                Features
              </h3>
              <ul className="mt-4 space-y-5">
                {features.map((feature, index) => (
                  <li key={index}>
                    <a
                      href={feature.url}
                      className="text-[#252B37] font-inter text-sm font-normal leading-5 hover:underline"
                    >
                      {feature.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div className=" w-[100px]">
              <h3 className="text-left text-[#207C97] text-sm font-medium leading-5 font-inter ">
                Help
              </h3>
              <ul className="mt-4 space-y-5">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-[#252B37] font-inter text-sm font-normal leading-5 hover:underline text-nowrap"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>


        <div className="p-4 pt-8 pb-8 border-t-2 mx-20">
          <p className="text-center text-gray-500 text-sm">
            © Copyright 2025, All Rights Reserved by Salesworx.ai
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
