


// import { useEffect, useRef, useState } from "react";
// // import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// import ss from "../assets/ss.mp4"

// const tabs = [
//     "Hyperpersonalized Outreach",
//     "Omnichannel Sequencing",
//     "Account Based Selling",
//     "Sales Intelligence",
//     "Lead Scoring",
// ];

// const RightFit = () => {
//     const [activeTab, setActiveTab] = useState(0);
//     const scrollContainerRef = useRef(null);
//     const isScrolling = useRef(false);


//     useEffect(() => {
//         const handleScroll = (event) => {
//             if (isScrolling.current) return;
//             event.preventDefault(); 

//             isScrolling.current = true;

//             setTimeout(() => {
//                 setActiveTab((prev) => {
//                     let newTab = prev;
//                     if (event.deltaY > 0 && prev < tabs.length - 1) {
//                         newTab = prev + 1;
//                     } else if (event.deltaY < 0 && prev > 0) {
//                         newTab = prev - 1;
//                     }


//                     // if (newTab === tabs.length - 1) {
//                     //     document.body.style.overflow = "auto"; 
//                     // } else {
//                     //     document.body.style.overflow = "hidden"; 
//                     // }

//                     return newTab;
//                 });

//                 isScrolling.current = false;
//             }, 800);
//         };

//         const scrollContainer = scrollContainerRef.current;
//         if (scrollContainer) {
//             scrollContainer.addEventListener("wheel", handleScroll, { passive: false });
//         }

//         return () => {
//             if (scrollContainer) {
//                 scrollContainer.removeEventListener("wheel", handleScroll);
//             }
//             document.body.style.overflow = "auto"; // Cleanup
//         };
//     }, [tabs.length]);

//     useEffect(() => {
//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.scrollTo({
//                 left: activeTab * scrollContainerRef.current.clientWidth,
//                 behavior: "smooth",
//             });
//         }
//     }, [activeTab]);
//     return (
//         <div className="flex flex-col items-start gap-[64px] self-stretch py-[48px] ">
//             <div className="w-full flex flex-col items-start gap-6">
//                 <h2 className="ml-2 text-[30px] font-medium leading-[38px] text-[#252B37]">
//                     Why Salesworx is the Right Fit for Your Team
//                 </h2>
//                 <p className="ml-2 text-[16px] font-normal leading-[24px] text-[#535862]">
//                     Lorem ipsum dolor sit amet consectetur. Nec egestas consectetur enim ridiculus magna quis amet vitae.
//                     Eget donec tortor tincidunt molestie. Euismod risus tellus et vivamus dui tellus. Pellentesque non volutpat a ac sed scelerisque.
//                 </p>
//             </div>

//             <div className="mt-[64px] h-16 w-full relative flex flex-col justify-center items-center">
//                 <div className="flex justify-between space-x-14 w-full relative ">
//                     {tabs.map((tab, index) => (
//                         <button
//                             key={index}
//                             className={`relative z-10 px-4 py-2 font-medium text-sm transition-colors ${index <= activeTab ? "text-[#207C97]"  : "text-gray-500"}`}
//                             onClick={() => setActiveTab(index)}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>

//                 <div className="absolute bottom-0 left-3 w-full h-[1px] border-b border-b-[#818181]">
//                     <div
//                         className="border border-[#207C97] transition-all duration-300 relative"
//                         style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
//                     >
//                         <div
//                             className="w-[6px] h-[6px] bg-[#207C97] rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2"
//                         ></div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-6xl overflow-hidden relative">
//                 <div ref={scrollContainerRef} className="flex w-full overflow-x-scroll no-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//                     {tabs.map((_, index) => (
//                         <div key={index} className="flex-none w-full snap-center p-4">
//                             <Card className="w-full">
//                                 <CardContent className="p-4">
//                                     <div className="w-full flex justify-between gap-8 p-6">
//                                         <div className="w-[300px] flex flex-col justify-center items-start">
//                                             <h3 className="stretch text-[#252B37] text-[24px] font-inter font-semibold leading-8">
//                                                 Does your sales messages look robotic?
//                                             </h3>
//                                             <p className="stretch text-[#535862] text-[14px] font-inter font-normal leading-6 mt-2">
//                                                 Not anymore! With Salesworx, create personalized, human-like messages
//                                                 tailored to your prospects’ needs using AI-powered customization.
//                                             </p>
//                                             <button className="relative mt-4 rounded-[36px] border border-[#207C97] bg-[#207C97] text-white text-sm font-medium leading-[20px] py-2 px-4 overflow-hidden group">
//                                                 <span className="relative z-10 group-hover:text-[#207C97] transition-colors duration-300"> Learn How to Personalize</span>
//                                                 <span className="absolute rounded-full inset-0 bg-white transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out origin-bottom"></span>
//                                             </button>

//                                         </div>
//                                         <div className="w-[680px] h-[300px] flex justify-center border border-gray-300 rounded-md overflow-hidden ml-6">
//                                             <video
//                                                 className="w-full h-[300px] object-cover"
//                                                 controls
//                                                 autoPlay
//                                                 muted
//                                                 loop
//                                             >
//                                                 <source src={ss} type="video/mp4" />
//                                                 Your browser does not support the video tag.
//                                             </video>
//                                         </div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RightFit;


// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import ss from "../assets/ss.mp4"

// const tabs = [
//     "Hyperpersonalized Outreach",
//     "Omnichannel Sequencing",
//     "Account Based Selling",
//     "Sales Intelligence",
//     "Lead Scoring",
// ];

// const RightFit = () => {
//     const [activeTab, setActiveTab] = useState(0);
//     const scrollContainerRef = useRef(null);
//     const isScrolling = useRef(false);

//     // useEffect(() => {
//     //     const handleWheel = (event) => {
//     //         if (isScrolling.current) return;
//     //         event.preventDefault();

//     //         isScrolling.current = true;

//     //         setTimeout(() => {
//     //             setActiveTab((prev) => {
//     //                 let newTab = prev;
//     //                 if (event.deltaY > 0 && prev < tabs.length - 1) {
//     //                     newTab = prev + 1;
//     //                 } else if (event.deltaY < 0 && prev > 0) {
//     //                     newTab = prev - 1;
//     //                 }
//     //                 return newTab;
//     //             });

//     //             isScrolling.current = false;
//     //         }, 700);
//     //     };

//     //     // window.addEventListener("wheel", handleWheel, { passive: false });

//     //     // return () => {
//     //     //     window.removeEventListener("wheel", handleWheel);
//     //     // };
//     //     const scrollContainer = scrollContainerRef.current;
//     // if (scrollContainer) {
//     //     scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
//     // }

//     // return () => {
//     //     if (scrollContainer) {
//     //         scrollContainer.removeEventListener("wheel", handleWheel);
//     //     }
//     // };
//     // }, []);



//     useEffect(() => {
//         const handleWheel = (event) => {
//             if (isScrolling.current || !scrollContainerRef.current.contains(event.target)) return;
//             event.preventDefault();
//             isScrolling.current = true;

//             setTimeout(() => {
//                 setActiveTab((prev) => {
//                     let newTab = prev;
//                     if (event.deltaY > 0 && prev < tabs.length - 1) {
//                         newTab = prev + 1;
//                     } else if (event.deltaY < 0 && prev > 0) {
//                         newTab = prev - 1;
//                     }
//                     return newTab;
//                 });
//                 isScrolling.current = false;
//             }, 500);
//         };

//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.addEventListener("wheel", handleWheel, { passive: false });
//         }
//         return () => {
//             if (scrollContainerRef.current) {
//                 scrollContainerRef.current.removeEventListener("wheel", handleWheel);
//             }
//         };
//     }, []);

//     return (
//         <div className="h-[350vh] flex flex-col items-start gap-10 py-10">
//             <motion.div className="w-full">
//                 <h2 className="ml-4 text-[30px] font-medium leading-[38px] text-[#252B37] mt-[16px]">
//                     Why Salesworx is the Right Fit for Your Team
//                 </h2>
//                 <p className="ml-4 text-[16px] font-normal leading-[24px] text-[#535862] mt-[64px]">
//                     Lorem ipsum dolor sit amet consectetur. Nec egestas consectetur enim ridiculus magna quis amet vitae.
//                     Eget donec tortor tincidunt molestie. Euismod risus tellus et vivamus dui tellus. Pellentesque non volutpat a ac sed scelerisque.
//                 </p>
//             </motion.div>

//             <div className="sticky top-[80px] z-40 py-4 w-[1150px] flex flex-col items-center">
//                 <div className="relative flex justify-between space-x-14 w-full">
//                     {tabs.map((tab, index) => (
//                         <button
//                             key={index}
//                             className={`relative z-10 px-4 py-2 font-medium text-sm transition-colors ${index <= activeTab ? "text-[#207C97]" : "text-gray-500"}`}
//                             onClick={() => setActiveTab(index)}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>
//                 <motion.div
//                     className="absolute bottom-0 left-0 h-[2px] bg-[#207C97] mr-2"
//                     style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
//                     initial={{ width: 0 }}
//                     animate={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                 >
//                     {/* Nib (Triangle) */}
//                     <motion.div
//                         className="absolute right-0 top-1/2 w-[6px] h-[6px] bg-[#207C97] rounded-full shadow-md transform -translate-y-1/2 translate-x-1/2 "
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     />
//                 </motion.div>
//                 {/* <div className="absolute bottom-0 left-4 w-[1150px] h-[1px] border-b border-b-[#818181] mr-2">
//                     <div
//                         className="border border-[#207C97] transition-all duration-300 relative"
//                         style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
//                     >
//                         <div
//                             className="w-[6px] h-[6px] bg-[#207C97] rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2"
//                         ></div>
//                     </div>
//                 </div> */}
//             </div>
//             <div className="sticky top-[160px] z-40 bg-white py-4 w-full" ref={scrollContainerRef}>
//                 <div className="relative max-w-6xl  overflow-hidden">
//                     <motion.div

//                         className="flex w-full snap-x snap-mandatory"
//                         animate={{ x: -activeTab * 100 + "%" }}
//                         transition={{ duration: 0.6, ease: "linear" }}
                        
//                     >
//                         {tabs.map((_, index) => (
//                             <motion.div

//                                 key={index}
//                                 className="flex-none w-full  snap-center p-4"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: index === activeTab ? 1 : 0.5, y: index === activeTab ? 0 : 20 }}
//                                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                             >
//                                 <Card className="w-full">
//                                     <CardContent className="p-4">
//                                         <div className="w-full flex justify-between gap-8 ">
//                                             <div className="w-[300px] flex flex-col justify-center items-start">
//                                                 <h3 className="text-[#252B37] text-[24px] font-semibold leading-8">
//                                                     Does your sales messages look robotic?
//                                                 </h3>
//                                                 <p className="text-[#535862] text-[14px] leading-6 mt-2">
//                                                     Not anymore! With Salesworx, create personalized, human-like messages
//                                                     tailored to your prospects’ needs using AI-powered customization.
//                                                 </p>
//                                                 <button className="mt-4 rounded-[36px] border border-[#207C97] bg-[#207C97] text-white text-sm font-medium py-2 px-4 relative group overflow-hidden">
//                                                     <span className="relative z-10 group-hover:text-[#207C97] transition-colors duration-300"> Learn How to Personalize</span>
//                                                     <span className="absolute inset-0 bg-white transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out origin-bottom rounded-full"></span>
//                                                 </button>
//                                             </div>
//                                             <div className="w-[680px] h-[360px] flex justify-center border border-gray-300 rounded-md overflow-hidden ml-6">
//                                                 {/* <video className="w-full h-[360px] object-cover"   autoplay> */}
//                                                 <video
//                                                     className="w-full h-[360px] object-cover"
//                                                     src={ss}
//                                                     autoPlay
//                                                     muted
//                                                     preload="auto"
//                                                     loop>
//                                                     <source src={ss} type="video/mp4" />
//                                                     Your browser does not support the video tag.
//                                                 </video>
//                                             </div>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RightFit;




import { useEffect, useRef, useState } from "react";
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

    const translateX = useTransform(scrollYProgress, [0, 1], [0, -5600]);
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
          <p className="ml-4 text-[16px] font-normal leading-[24px] text-[#535862] mt-[16px]">
            Lorem ipsum dolor sit amet consectetur. Nec egestas consectetur enim ridiculus magna quis amet vitae.
            Eget donec tortor tincidunt molestie. Euismod risus tellus et vivamus dui tellus. Pellentesque non volutpat a ac sed scelerisque.
          </p>
        </div>
        <div className="mb-2 relative bg-white py-4 w-full h-[800vh]" ref={targetRef} >
        <div className="sticky top-[80px] z-30 py-4 w-[1150px] flex flex-col items-center mb-[48px]">
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
          <div className="sticky top-[170px] z-40 bg-white w-full overflow-hidden">
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