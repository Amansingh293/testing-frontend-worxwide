import React, { useEffect, useState } from "react";
import Salesworx from "../assets/Salesworx.gif"
import star from "../assets/star.svg"
import bulb from "../assets/bulb.gif"
// import { motion } from "framer-motion";




// const Insights = () => {
//   const [expanded, setExpanded] = useState(true);

//   const toggleExpand = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   return (
//     <div className="w-full">
//       <div class="w-full">
//         <div class="min-h-screenn relative z-10 flex items-center justify-center">
//           <div className="flex flex-col items-center mt-[30px]">
//             <motion.div
//               initial={{ y: 0 }}
//               animate={{ y: expanded !== null ? 50 : 0 }}
//               transition={{ duration: 0.3 }}
//               className="relative w-[790px]  rounded-[16px] border border-[#F5F5F5] bg-white shadow-[2px_2px_24px_0px_rgba(0,0,0,0.04)] flex flex-col items-center gap-6 px-8 py-[42px] mb-[32px]">
//               <div className="absolute  right-[100px] w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div>
//               <div className="absolute  left-[640px] w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div>

//               <div className="">
//                 <h2 className="text-[#252B37] text-center text-[18px] font-inter font-medium leading-[28px]">
//                   Hi there! I'm your AI sales assistant.
//                 </h2>
//                 <p className="text-[#717680] text-center font-normal text-sm leading-[20px] font-inter">
//                   Ask me about leads, emails, or sales goals—I'm here to help!
//                 </p>
//               </div>
//               <div className="flex flex-wrap justify-center items-center content-center gap-3 self-stretch">
//                 <button className="rounded-[24px] text-[12px] font-normal leading-[18px] text-[#252B37] border border-gray-200 flex p-2 px-4 justify-center items-center gap-2 
//                       hover:bg-[rgba(32,124,151,0.20)] hover:border-[#0F3D4D] hover:text-[#207C97] active:bg-[#207C97] active:text-white">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" >
//                     <path d="M5.36991 3.41468L5.81362 4.64261C6.3071 6.00544 7.38458 7.07845 8.75299 7.56988L9.98599 8.01176C10.0973 8.05168 10.0973 8.20862 9.98599 8.24855L8.75299 8.69043C7.38452 9.18188 6.30708 10.2549 5.81362 11.6177L5.36991 12.8456C5.32982 12.9564 5.17224 12.9564 5.13215 12.8456L4.68844 11.6177C4.19496 10.2549 3.11748 9.18186 1.74907 8.69043L0.516073 8.24855C0.404799 8.20862 0.404799 8.05169 0.516073 8.01176L1.74907 7.56988C3.11753 7.07843 4.19498 6.00539 4.68844 4.64261L5.13215 3.41468C5.17224 3.30318 5.32982 3.30318 5.36991 3.41468Z" fill="#252B37" />
//                     <path d="M10.9174 0.464722L11.1427 1.08624C11.3929 1.77592 11.9382 2.31967 12.6314 2.56884L13.2555 2.79322C13.3122 2.81387 13.3122 2.89302 13.2555 2.91298L12.6314 3.13736C11.9389 3.38653 11.3929 3.92959 11.1427 4.61995L10.9174 5.24148C10.8967 5.29792 10.8172 5.29792 10.7971 5.24148L10.5718 4.61995C10.3216 3.93027 9.77632 3.38653 9.0831 3.13736L8.45901 2.91298C8.40234 2.89233 8.40234 2.81318 8.45901 2.79322L9.0831 2.56884C9.77563 2.31967 10.3216 1.77661 10.5718 1.08624L10.7971 0.464722C10.8172 0.407593 10.8973 0.407593 10.9174 0.464722Z" fill="#252B37" />
//                     <path d="M10.9174 11.0218L11.1427 11.6433C11.3929 12.333 11.9382 12.8768 12.6314 13.1259L13.2555 13.3503C13.3122 13.371 13.3122 13.4501 13.2555 13.4701L12.6314 13.6945C11.9389 13.9436 11.3929 14.4867 11.1427 15.1771L10.9174 15.7986C10.8967 15.855 10.8172 15.855 10.7971 15.7986L10.5718 15.1771C10.3216 14.4874 9.77632 13.9436 9.0831 13.6945L8.45901 13.4701C8.40234 13.4494 8.40234 13.3703 8.45901 13.3503L9.0831 13.1259C9.77563 12.8768 10.3216 12.3337 10.5718 11.6433L10.7971 11.0218C10.8172 10.9654 10.8973 10.9654 10.9174 11.0218Z" fill="#252B37" />
//                   </svg>Personalize an email
//                 </button>
//                 <button className="rounded-[24px] text-[12px] font-normal leading-[18px] text-[#252B37] border border-gray-200 flex p-2 px-4 justify-center items-center gap-2 
//                       hover:bg-[rgba(32,124,151,0.20)] hover:border-[#0F3D4D] hover:text-[#207C97] active:bg-[#207C97] active:text-white">
//                   <img src={star} alt="Time-Consuming Manual Research" className="w-[15px] h-[15px]" />
//                   Create an account profile
//                 </button>
//                 <button className="rounded-[24px] text-[12px] font-normal leading-[18px] text-[#252B37] border border-gray-200 flex p-2 px-4 justify-center items-center gap-2 
//                       hover:bg-[rgba(32,124,151,0.20)] hover:border-[#0F3D4D] hover:text-[#207C97] active:bg-[#207C97] active:text-white">
//                   <img src={star} alt="Time-Consuming Manual Research" className="w-[15px] h-[15px]" />
//                   Create a dynamic sequence
//                 </button>
//               </div>
//               <div class="flex p-1.5 px-3 justify-center items-center gap-1 absolute left-[316px] top-[-15px] text-[#252B37] font-inter text-xs font-semibold leading-[18px] font-inter rounded-[24px] border border-[#F5F5F5] bg-white">
//                 <img src={bulb} alt={bulb} className="w-[18px] h-[18px]" />Try it out
//               </div>
//             </motion.div>

//             <div>
//               <div className="w-[2px] h-[200px] bg-[linear-gradient(180deg,rgba(32,124,151,0.00)_0%,rgba(32,124,151,0.60)_44.8%,rgba(32,124,151,0.00)_97.5%)]"></div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Insights;


// const Insights = () => {
//   const [expanded, setExpanded] = useState(null);

//   const toggleExpand = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   return (
//     <div 
//       className={`relative w-[790px] rounded-[16px] border border-[#F5F5F5] bg-white shadow-lg flex flex-col items-center gap-6 px-8 py-[42px] mb-[32px] 
//         ${expanded !== null ? 'pb-10' : 'pb-[42px]'}`}
//     >
//       {/* Gradient Background (Fix Position) */}
//       <div className="absolute  right-[100px] w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div>
//               <div className="absolute  left-[640px] w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div>

//       <h2 className="text-[#252B37] text-center text-[18px] font-inter font-medium leading-[28px]">
//         Hi there! I'm your AI sales assistant.
//       </h2>
//       <p className="text-[#717680] text-center font-normal text-sm leading-[20px] font-inter">
//         Ask me about leads, emails, or sales goals—I'm here to help!
//       </p>

//       <div className="flex flex-wrap justify-center items-center content-center gap-3 self-stretch">
//         {["Personalize an email", "Create an account profile", "Create a dynamic sequence"].map((text, index) => (
//           <button 
//             key={index}
//             className="rounded-[24px] text-[12px] font-normal leading-[18px] text-[#252B37] border border-gray-200 flex p-2 px-4 justify-center items-center gap-2 
//                   hover:bg-[rgba(32,124,151,0.20)] hover:border-[#0F3D4D] hover:text-[#207C97] active:bg-[#207C97] active:text-white"
//             onClick={() => toggleExpand(index)}
//           >
//             {text}
//           </button>
//         ))}
//       </div>

//       <div
//         className={`w-full bg-gray-100 p-4 rounded-lg shadow-md mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${expanded !== null ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
//       >
//         {expanded !== null && (
//           <p className="text-[#252B37] text-sm">
//             This is the content for {["Personalize an email", "Create an account profile", "Create a dynamic sequence"][expanded]}.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Insights;


// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // const Insights = () => {
// //   const [expanded, setExpanded] = useState(null);

// //   const toggleExpand = (index) => {
// //     setExpanded(expanded === index ? null : index);
// //   };

// //   return (
// //     <motion.div
// //       initial={{ y: 0 }}
// //       animate={{ y: expanded !== null ? 50 : 0 }}
// //       transition={{ duration: 0.3 }}
// //       className="relative w-[790px] rounded-[16px] border border-[#F5F5F5] bg-white shadow-lg flex flex-col items-center gap-6 px-8 py-[32px] mb-[32px]"
// //         // ${expanded !== null ? 'pb-2' : 'pb-[42px]'}`}
// //     >
// //       <h2 className="text-[#252B37] text-center text-[18px] font-inter font-medium leading-[28px]">
// //         Hi there! I'm your AI sales assistant.
// //       </h2>
// //       <p className="text-[#717680] text-center font-normal text-sm leading-[20px] font-inter">
// //         Ask me about leads, emails, or sales goals—I'm here to help!
// //       </p>

// //       <div className="flex flex-wrap justify-center items-center content-center gap-3 self-stretch">
// //         {["Personalize an email", "Create an account profile", "Create a dynamic sequence"].map((text, index) => (
// //           <button
// //             key={index}
// //             className="rounded-[24px] text-[12px] font-normal leading-[18px] text-[#252B37] border border-gray-200 flex p-2 px-4 justify-center items-center gap-2
// //                   hover:bg-[rgba(32,124,151,0.20)] hover:border-[#0F3D4D] hover:text-[#207C97] active:bg-[#207C97] active:text-white"
// //             onClick={() => toggleExpand(index)}
// //           >
// //             {text}
// //           </button>
// //         ))}
// //       </div>

// //       <motion.div
// //         initial={{ height: 0, opacity: 0 }}
// //         animate={expanded !== null ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
// //         transition={{ duration: 0.3 }}
// //         className="w-full flex flex-col justify-between space-y-40 p-4 mt-4 overflow-hidden"
// //       >
// //         {expanded !== "Personalize an email" && (
// //           <>
// //           <p className="text-[#252B37] text-sm">
// //             This is the content for {["Personalize an email", "Create an account profile", "Create a dynamic sequence"][expanded]}.
// //           </p>
// //           {/* <div className="mt-0 flex w-full max-w-[726px] p-2 justify-between gap-2.5 rounded-[8px] border border-[#D5D7DA] bg-white">
// //           <p className="self-stretch text-gray-500 text-sm font-normal leading-5">Ask me to write an email, create account plan, or prep for a meeting.</p>
// //           <div className="rounded-[4px] bg-[#207C97] flex items-center gap-2 p-1">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 19" fill="none">
// //               <path d="M17 1.63184L8.75 9.88184M17 1.63184L11.75 16.6318L8.75 9.88184M17 1.63184L2 6.88184L8.75 9.88184" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// //             </svg>
// //           </div>
// //         </div>  */}
// //           </>
// //         )}
// //       </motion.div>
// //     </motion.div>
// //   );
// // };

// // export default Insights;





// // {/* <div className="mt-6 flex w-full max-w-[726px] p-2 justify-between gap-2.5 rounded-[8px] border border-[#D5D7DA] bg-white">
// //                       <p className="self-stretch text-gray-500 text-sm font-normal leading-5">Ask me to write an email, create account plan, or prep for a meeting.</p>
// //                       <div className="rounded-[4px] bg-[#207C97] flex items-center gap-2 p-1">
// //                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 19" fill="none">
// //                           <path d="M17 1.63184L8.75 9.88184M17 1.63184L11.75 16.6318L8.75 9.88184M17 1.63184L2 6.88184L8.75 9.88184" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// //                         </svg>
// //                       </div>
// //                     </div> */}





// import  { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const HorizontalScroll = () => {
//   const scrollRef = useRef(null);
//   const { scrollYProgress } = useScroll({ container: scrollRef });

//   const translateX = useTransform(scrollYProgress, [0, 1], [0, -1000]);

//   return (
//     <div ref={scrollRef} className="relative w-full h-screen overflow-x-hidden overflow-y-auto">
//       <motion.div
//         style={{ x: translateX }}
//         className="flex gap-6 w-[200vw] p-10"
//       >
//         {[...Array(5)].map((_, index) => (
//           <div
//             key={index}
//             className="w-[300px] h-[400px] bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg"
//           >
//             Div {index + 1}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default HorizontalScroll;


import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ss from "../assets/ss.mp4"

const tabs = [
  "Hyperpersonalized Outreach",
  "Omnichannel Sequencing",
  "Account Based Selling",
  "Sales Intelligence",
  "Lead Scoring",
];

const RightFit = () => {
  const [activeTab, setActiveTab] = useState(0);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef, // Track window scrolling
      offset: ["start start", "end start"],
    });

    const translateX = useTransform(scrollYProgress, [0, 1], [0, -5050]);
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = scrollYProgress.get();
        const newActiveTab = Math.min(
          tabs.length - 1,
          Math.floor(scrollPosition * tabs.length)
        );
        setActiveTab(newActiveTab);
      };
  
      const unsubscribe = scrollYProgress.onChange(handleScroll);
      return () => unsubscribe();
    }, [scrollYProgress]);

    return (
      <div className="flex flex-col items-start gap-10 py-10">
        <div className="w-full">
          <h2 className="ml-4 text-[30px] font-medium leading-[38px] text-[#252B37] mt-[16px]">
            Why Salesworx is the Right Fit for Your Team
          </h2>
          <p className="ml-4 text-[16px] font-normal leading-[24px] text-[#535862] mt-[64px]">
            Lorem ipsum dolor sit amet consectetur. Nec egestas consectetur enim ridiculus magna quis amet vitae.
            Eget donec tortor tincidunt molestie. Euismod risus tellus et vivamus dui tellus. Pellentesque non volutpat a ac sed scelerisque.
          </p>
        </div>

        <div className="sticky top-[80px] z-40 py-4 w-[1150px] flex flex-col items-center">
          <div className="relative flex justify-between space-x-14 w-full">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`relative z-10 px-4 py-2 font-medium text-sm transition-colors ${index <= activeTab ? "text-[#207C97]" : "text-gray-500"}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-[#207C97] mr-2"
            style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Nib (Triangle) */}
            <motion.div
              className="absolute right-0 top-1/2 w-[6px] h-[6px] bg-[#207C97] rounded-full shadow-md transform -translate-y-1/2 translate-x-1/2 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
        <div className="relative bg-white py-4 w-full h-[2100vh]" ref={targetRef} >
          <div className="sticky top-[160px] w-full overflow-hidden">
            <motion.div

              className="flex w-full snap-x snap-mandatory"
              style={{ x: translateX }}

            >
              {tabs.map((_, index) => (
                <div

                  key={index}
                  onChange={()=>{setActiveTab(index);}}
                  className="flex-none w-full  snap-center p-4"
                >
                  <Card className="w-full">
                    <CardContent className="p-4">
                      <div className="w-full flex justify-between gap-8 ">
                        <div className="w-[300px] flex flex-col justify-center items-start">
                          <h3 className="text-[#252B37] text-[24px] font-semibold leading-8">
                            Does your sales messages look robotic?
                          </h3>
                          <p className="text-[#535862] text-[14px] leading-6 mt-2">
                            Not anymore! With Salesworx, create personalized, human-like messages
                            tailored to your prospects’ needs using AI-powered customization.
                          </p>
                          <button className="mt-4 rounded-[36px] border border-[#207C97] bg-[#207C97] text-white text-sm font-medium py-2 px-4 relative group overflow-hidden">
                            <span className="relative z-10 group-hover:text-[#207C97] transition-colors duration-300"> Learn How to Personalize</span>
                            <span className="absolute inset-0 bg-white transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out origin-bottom rounded-full"></span>
                          </button>
                        </div>
                        <div className="w-[680px] h-[360px] flex justify-center border border-gray-300 rounded-md overflow-hidden ml-6">
                          {/* <video className="w-full h-[360px] object-cover"   autoplay> */}
                          <video
                            className="w-full h-[360px] object-cover"
                            src={ss}
                            autoPlay
                            muted
                            preload="auto"
                            loop>
                            <source src={ss} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  export default RightFit;