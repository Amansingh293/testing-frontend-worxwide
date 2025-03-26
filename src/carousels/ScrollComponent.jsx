// import React, { useState, useEffect, useRef } from "react";
// import ss from "../assets/ss.mp4"
// import { motion,AnimatePresence } from "framer-motion";

// const sections = [
//   {
//     heading: "Hyperpersonalized Outreach",
//     content: "Connect like never before. Tailor every message with AI-driven personalization to address your prospect’s unique needs and preferences."
//   },
//   {
//     heading: "Omnichannel Sequencing",
//     content: "Engage prospects across multiple channels in a seamless and efficient manner."
//   },
//   {
//     heading: "Account Based Selling",
//     content: "Target high-value accounts with customized sales strategies for maximum impact.",
//     subcontent: [
//       { heading: "AI Custom Account plans", content: "Allocate resources effectively to ensure balanced workloads and prevent bottlenecks." },
//       { heading: "Deals Management", content: "Allocate resources effectively to ensure balanced workloads and prevent bottlenecks." },
//       { heading: "Conversational Intelligence", content: "Allocate resources effectively to ensure balanced workloads and prevent bottlenecks." },
//     ]
//   },
//   {
//     heading: "Lead Profiling",
//     content: "Uncover actionable insights about your prospects and accounts to drive smarter sales decisions."
//   },
//   {
//     heading: "Lead Scoring",
//     content: "Prioritize leads with AI-powered scoring to focus on the prospects most likely to convert."
//   },
//   {
//     heading: "Train the Trainer",
//     content: "Refine your AI’s capabilities to write tailored, impactful emails that resonate with your audience by training it with real-world examples and feedback."
//   },
// ];

// const ScrollComponent = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const sectionRefs = useRef([]);
//   const [viewedSections, setViewedSections] = useState(new Set());
//   const [isFixed, setIsFixed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;
//       const containerRect = containerRef.current.getBoundingClientRect();
//       const fixedThreshold = 100;
//       setIsFixed(containerRect.top <= fixedThreshold);

//       let newSet = new Set(viewedSections);
//       sectionRefs.current.forEach((section, index) => {
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= fixedThreshold + 50) {
//             newSet.add(index);
//           }
//         }
//       });

//       setViewedSections(newSet);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [viewedSections]);

//   return (
//     <div className="relative w-full flex flex-col items-center space-y-10  ">
//       <div className="h-[100px] w-full text-[#252B37] text-center font-inter text-[30px] font-medium leading-[38px]">The Answer to Transform Your Sales Game</div>
//       <div className="realtive w-full p-6 " ref={containerRef}>
//         {sections.map((section, index) => (
//           <div className="sticky top-[10px] w-[1100px] h-[600px] bg-white flex justify-center pl-8">
//           <div
//             key={index}
//             ref={(el) => (sectionRefs.current[index] = el)}
//             className="w-full h-[500px] bg-white transition-all duration-700 border-l-2 border-dashed border-gray-300"
//           >
//             {/* <div className="absolute top-[0px] left-3 w-[20px] h-[150px] bg-white"></div> */}
//             <div className="w-full flex justify-between mt-[170px] mb-[170px] ml-[90px] mr-0">
//               {/* Left Section - Takes 1 column */}
//               <div className="w-[300px] flex flex-col justify-center items-start">
//                 <h3 className="stretch text-[#252B37] text-[20px] font-inter font-semibold leading-8">
//                   {section.heading}
//                 </h3>
//                 <p className="stretch text-[#535862] text-[14px] font-inter font-normal leading-6 mt-2">
//                   {section.content}
//                 </p>
//                 {section.subcontent && section.subcontent.length > 0 && (
//                   <div className="mt-2">
//                     {section.subcontent.map((sub, subIndex) => (
//                       <div key={subIndex} className="mt-2 border-b">
//                         <h4 className="text-[#207C97] text-[18px] font-inter font-semibold leading-7">
//                           {sub.heading}
//                         </h4>
//                         <p className="text-[#535862] text-[14px] font-inter font-normal leading-6 mt-1">
//                           {sub.content}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 <button class="relative mt-4 rounded-[36px] border border-[#207C97] bg-[#207C97] text-white text-sm font-medium leading-[20px] py-2 px-4 overflow-hidden group">
//                   <span class="relative z-10 group-hover:text-[#207C97] transition-colors duration-300"> Learn How to Personalize</span>
//                   <span class="absolute rounded-full inset-0 bg-white transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out origin-bottom"></span>
//                 </button>
//               </div>

//               {/* Right Section (Video) - Takes 2 columns */}
//               <div className="w-full h-[380px] flex justify-center border border-gray-300 rounded-md overflow-hidden ml-6 mt-8">
//                 <video
//                   className="w-full h-[380px] object-cover"

//                 >
//                   <source src={ss} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>
//             {/* Left Icon */}
//             {/* <div className="absolute top-[130px] left-2  flex items-center justify-center w-10 h-10  text-white rounded-full border-2  border-dashed border-gray-300 bg-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="32" viewBox="0 0 18 32" fill="none">
//               <path d="M9.72319 31.9994H0.783691L9.06056 16H18.0001L9.72319 31.9994Z" fill="#207C97"/>
//               <path d="M8.9395 15.9994H0L8.27687 0H17.2164L8.9395 15.9994Z" fill="#207C97"/>
//             </svg>
//             </div> */}

// <div className="absolute top-[170px] md:left-[76px] lg:left-[74px] xl:custom-left transform -translate-y-1/2 flex items-center justify-center w-[52px] h-[52px] text-white rounded-full border-2 border-dashed border-gray-300 bg-white">
// <AnimatePresence mode="wait">
//   {viewedSections.has(index) ? (
//     <motion.div
//       key="tick"
//       className="relative w-16 h-16 flex items-center justify-center"
//       initial={{ scale: 0.5, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       exit={{ scale: 0.5, opacity: 0 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//     >
//       {/* Green Circle */}
//       <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
//         <circle cx="26" cy="26" r="25.5" fill="#039855" stroke="white" />
//       </svg>

//       {/* Tick Icon (Perfectly Centered) */}
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//         className="absolute w-6 h-6">
//         <path d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z" fill="white" />
//       </svg>
//     </motion.div>
//   ) : (
//     <motion.svg
//       key="arrow"
//       xmlns="http://www.w3.org/2000/svg"
//       width="18" height="32" viewBox="0 0 18 32" fill="none"
//       initial={{ scale: 0.5, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       exit={{ scale: 0.5, opacity: 0 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//     >
//       <path d="M9.72319 31.9994H0.783691L9.06056 16H18.0001L9.72319 31.9994Z" fill="#207C97" />
//       <path d="M8.9395 15.9994H0L8.27687 0H17.2164L8.9395 15.9994Z" fill="#207C97" />
//     </motion.svg>
//   )}
//         </AnimatePresence>
//         </div>
//           </div>
//         </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollComponent;

import React, { useState, useEffect, useRef, memo } from "react";
import ss from "../assets/ss.mp4";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const sections = [
  {
    heading: "Hyperpersonalized Outreach",
    content:
      "Connect like never before. Tailor every message with AI-driven personalization to address your prospect’s unique needs and preferences.",
    button: "Learn How to Personalize",
  },
  {
    heading: "Omnichannel Sequencing",
    content:
      "Engage prospects across multiple channels in a seamless and efficient manner.",
    button: "See Omnichannel in Action",
  },
  {
    heading: "Account Based Selling",
    content:
      "Target high-value accounts with customized sales strategies for maximum impact.",
    button: "Optimize Your Account Strategy",
    subcontent: [
      {
        heading: "AI Custom Account plans",
        content:
          "Allocate resources effectively to ensure balanced workloads and prevent bottlenecks.",
      },
      {
        heading: "Deals Management",
        content:
          "Allocate resources effectively to ensure balanced workloads and prevent bottlenecks.",
      },
      {
        heading: "Conversational Intelligence",
        content:
          "Allocate resources effectively to ensure balanced workloads and prevent bottlenecks.",
      },
    ],
  },
  {
    heading: "Lead Profiling",
    content:
      "Uncover actionable insights about your prospects and accounts to drive smarter sales decisions.",
    button: "Get Lead Insights",
  },
  {
    heading: "Lead Scoring",
    content:
      "Prioritize leads with AI-powered scoring to focus on the prospects most likely to convert.",
    button: "Improve Lead Quality",
  },
  {
    heading: "Train the Trainer",
    content:
      "Refine your AI’s capabilities to write tailored, impactful emails that resonate with your audience by training it with real-world examples and feedback.",
    button: "Enhance AI Email Writing",
  },
];

const ScrollComponent = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [viewedSections, setViewedSections] = useState(new Set());
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fixedThreshold = 90;
      setIsFixed(containerRect.top <= fixedThreshold);

      setViewedSections((prev) => {
        let newSet = new Set(prev);
        sectionRefs.current.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= fixedThreshold + 150) {
              newSet.add(index);
            }
          }
        });
        return newSet;
      });
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center  bg-white pt-12 pb-12 rounded-[12px]">
      <div className="h-[100px] w-full text-[#252B37] text-center font-inter text-[30px] font-medium leading-[38px]">
        The Answer to Transform Your Sales Game
      </div>
      <div
        className="realtive w-full h-[520px] overflow-y-scroll hide-scrollbar "
        ref={containerRef}
      >
        {sections.map((section, index) => (
          <div className="sticky top-[50px] max-w-6xl bg-white h-[520px] flex justify-center pl-8 mx-10">
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="max-w-7xl h-[500px] bg-white transition-all duration-500 border-l-2 border-dashed border-gray-300"
            >
              {/* <div className="absolute top-[0px] left-3 w-[20px] h-[150px] bg-white"></div> */}
              <div className="w-full flex justify-between px-6 mx-10">
                {/* Left Section - Takes 1 column */}
                <div className="w-[300px] flex flex-col justify-start items-start gap-3">
                  <h3 className="stretch text-[#252B37] text-[20px] font-inter font-semibold leading-8">
                    {section.heading}
                  </h3>
                  <p className="stretch text-[#535862] text-[14px] font-inter font-normal leading-6 mt-2">
                    {section.content}
                  </p>
                  {section.subcontent && section.subcontent.length > 0 && (
                    <div className="mt-2">
                      {section.subcontent.map((sub, subIndex) => (
                        <div key={subIndex} className="mt-2 border-b">
                          <h4 className="text-[#207C97] text-[18px] font-inter font-semibold leading-7">
                            {sub.heading}
                          </h4>
                          <p className="text-[#535862] text-[14px] font-inter font-normal leading-6 mt-1">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <Link to="/login">
                    <button class="relative mt-4 rounded-[36px] border border-[#207C97] bg-[#207C97] text-white text-sm font-medium leading-[20px] py-2 px-4 overflow-hidden group">
                      <span class="relative z-10 group-hover:text-[#207C97] transition-colors duration-300">
                        {" "}
                        {section.button}
                      </span>
                      <span class="absolute rounded-full inset-0 bg-white transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out origin-bottom"></span>
                    </button>
                  </Link>
                </div>

                {/* Right Section (Video) - Takes 2 columns */}
                <div className="max-w-3xl h-[321px] flex justify-center border border-gray-300 rounded-md overflow-hidden ml-6 ">
                  {/* <video
                    className="w-full h-[300px] object-cover"
                    
                  > */}
                  <video
                    className="w-full h-[320px] object-cover overflow-hidden"
                    src={ss}
                    autoPlay
                    muted
                    preload="auto"
                    loop
                  ></video>
                  {/* <source src={ss} type="video/mp4" /> */}
                  {/* Your browser does not support the video tag.
                  </video> */}
                </div>
              </div>
              {/* Left Icon */}
              {/* <div className="absolute top-[130px] left-2  flex items-center justify-center w-10 h-10  text-white rounded-full border-2  border-dashed border-gray-300 bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="32" viewBox="0 0 18 32" fill="none">
                <path d="M9.72319 31.9994H0.783691L9.06056 16H18.0001L9.72319 31.9994Z" fill="#207C97"/>
                <path d="M8.9395 15.9994H0L8.27687 0H17.2164L8.9395 15.9994Z" fill="#207C97"/>
              </svg>
              </div> */}

              <div className="absolute top-[26px] md:left-[76px] lg:left-[74px] xl:left-[24px] transform -translate-y-1/2 flex items-center justify-center w-[52px] h-[52px] text-white rounded-full border-2 border-dashed border-gray-300 bg-white">
                <AnimatePresence mode="wait">
                  {viewedSections.has(index) ? (
                    <motion.div
                      key="tick"
                      className="relative w-16 h-16 flex items-center justify-center"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {/* Green Circle */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <circle
                          cx="26"
                          cy="26"
                          r="25.5"
                          fill="#039855"
                          stroke="white"
                        />
                      </svg>

                      {/* Tick Icon (Perfectly Centered) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute w-6 h-6"
                      >
                        <path
                          d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"
                          fill="white"
                        />
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.svg
                      key="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="32"
                      viewBox="0 0 18 32"
                      fill="none"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <path
                        d="M9.72319 31.9994H0.783691L9.06056 16H18.0001L9.72319 31.9994Z"
                        fill="#207C97"
                      />
                      <path
                        d="M8.9395 15.9994H0L8.27687 0H17.2164L8.9395 15.9994Z"
                        fill="#207C97"
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ScrollComponent;
