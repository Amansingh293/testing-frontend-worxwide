// import React from "react";

// const IntegrateTools = () => {
//   return (
//     <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 md:p-12 rounded-lg shadow-lg overflow-hidden">
//       <div className="md:w-1/2 text-center md:text-left">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
//           Integrate with Your <span className="mx-1">🚀</span> Favorite Tools
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Want to add contacts to your favorite CRM? Maybe you want to send
//           your form submissions to your email marketing tools? Well that’s all
//           possible with formcarry and easy to setup too.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
//           Get Started
//         </button>
//       </div>
//       <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
//         <div className="relative w-48 h-84 flex flex-col items-center">
//           <div className="w-[400px] h-[230px] bg-white flex flex-col items-center justify-center mb-4  overflow-hidden shadow-lg">
//             <img src="/outlook.png" alt="Outlook" className="h-6" />
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2" />
//           </div>
//           <div className="ml-140 -bottom-0 w-[400px] h-[230px] bg-white flex flex-col items-center justify-center  overflow-hidden shadow-lg mt-4">
//             <img src="/zoho.png" alt="Zoho" className="h-6" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntegrateTools;

// import React, { useEffect, useRef } from "react";

// const IntegrateTools = () => {
//   const carouselRefs = [useRef(null), useRef(null)];

//   useEffect(() => {
//     const speeds = [0.85, 1]; // Different speeds for each div

//     carouselRefs.forEach((ref, index) => {
//       const container = ref.current;
//       const images = container.querySelectorAll("img");
//       let position = 90;
//       const speed = speeds[index];

//       const moveImages = () => {
//         images.forEach((img) => {
//           img.style.transform = `translateY(${position}px)`;
//         });
//         position -= speed;
//         if (position <= -100) {
//           position = 100;
//         }
//         requestAnimationFrame(moveImages);
//       };

//       moveImages();
//     });
//   }, []);

//   return (
//     <div className="flex flex-col h-[458px] md:flex-row items-center justify-between rounded-lg shadow-lg p-6 overflow-hidden">
//       <div className="md:w-1/2 text-center md:text-left">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
//           Integrate with Your <span className="mx-1">🚀</span> Favorite Tools
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Want to add contacts to your favorite CRM? Maybe you want to send
//           your form submissions to your email marketing tools? Well that’s all
//           possible with formcarry and easy to setup too.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
//           Get Started
//         </button>
//       </div>
//       <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center overflow-hidden">
//         <div className="relative w-48  flex flex-col items-center">
//           <div ref={carouselRefs[0]} className="ml-10 h-[290px] w-[180px] bg-white flex flex-col items-center justify-center mb-4 rotate-[15deg] overflow-hidden shadow-lg border border-gray-300">
//             <div
//             // className="-rotate-[15deg]"
//             >
//             <img src="/outlook.png" alt="Outlook" className="h-6 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-4 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-4 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-4 border-b-2 border-gray-300"/>
//               </div>
//           </div>
//           <div ref={carouselRefs[1]} className="ml-60 -bottom-0 h-[290px] w-[180px] bg-white flex flex-col items-center justify-center rotate-[15deg] overflow-hidden shadow-lg mt-4 border border-gray-300">
//             <img src="/zoho.png" alt="Zoho" className="h-6 border-b-2 border-gray-300" />
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300" />
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntegrateTools;

// import React, { useEffect, useRef } from "react";

// const IntegrateTools = () => {
//   const carouselRefs = [useRef(null), useRef(null)];

//   useEffect(() => {
//     const speeds = [0.85, 1]; // Different speeds for each div

//     carouselRefs.forEach((ref, index) => {
//       const container = ref.current;
//       if (!container) return;
//       const images = container.querySelectorAll("img");
//       let position = 90;
//       const speed = speeds[index];

//       const moveImages = () => {
//         images.forEach((img) => {
//           img.style.transform = `translateY(${position}px)`;
//         });
//         position -= speed;
//         if (position <= -100) {
//           position = 100;
//         }
//         requestAnimationFrame(moveImages);
//       };

//       moveImages();
//     });
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row h-auto md:h-[358px] items-center justify-between rounded-lg shadow-lg overflow-hidden">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 text-center md:text-left p-6">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
//           Integrate with Your <span className="mx-1">🚀</span> Favorite Tools
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Want to add contacts to your favorite CRM? Maybe you want to send
//           your form submissions to your email marketing tools? Well that’s all
//           possible with formcarry and easy to setup too.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
//           Get Started
//         </button>
//       </div>

//       {/* Right Section */}
//       <div className="realtive w-full md:w-1/2 mt-6 md:mt-0 flex justify-center overflow-hidden">
//         <div className="relative h-full flex flex-col md:flex-row items-center">
//           {/* First Scrolling Div */}
//           <div
//             ref={carouselRefs[0]}
//             className="-top-0 h-[190px] w-[180px] bg-white flex flex-col items-center justify-center mb-4 rotate-[15deg] overflow-hidden shadow-lg border border-gray-300"
//           >
//             <img src="/outlook.png" alt="Outlook" className="h-6 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-4 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-4 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-4 border-b-2 border-gray-300"/>
//           </div>

//           {/* Second Scrolling Div */}
//           <div
//             ref={carouselRefs[1]}
//             className="top-10 h-[190px] w-[180px] bg-white flex flex-col items-center justify-center rotate-[15deg] overflow-hidden shadow-lg mt-4 border border-gray-300"
//           >
//             <img src="/zoho.png" alt="Zoho" className="h-6 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntegrateTools;

// import React, { useEffect, useRef } from "react";

// const IntegrateTools = () => {
//   const carouselRefs = [useRef(null), useRef(null)];

// //   useEffect(() => {
// //     const speeds = [0.85, 1]; // Different speeds for each div

// //     carouselRefs.forEach((ref, index) => {
// //       const container = ref.current;
// //       if (!container) return;
// //       const images = container.querySelectorAll("img");
// //       let position = 90;
// //       const speed = speeds[index];

// //       const moveImages = () => {
// //         images.forEach((img) => {
// //           img.style.transform = `translateX(${position}px,${position}px)`;
// //         });
// //         position -= speed;
// //         if (position <= -100) {
// //           position = 100;
// //         }
// //         requestAnimationFrame(moveImages);
// //       };

// //       moveImages();
// //     });
// //   }, []);

// useEffect(() => {
//     const speeds = [0.85, 1];
//     carouselRefs.forEach((ref, index) => {
//       const container = ref.current;
//       if (!container) return;
//       const images = container.querySelectorAll("img");
//       let position = -90;
//       const speed = speeds[index];
//       const moveImages = () => {
//         images.forEach((img) => {
//           img.style.transform = `translate(${position}px, ${-position*1.5}px)`;
//         });
//         position += speed;
//         if (position >= 100) {
//           position = -100;
//         }
//         requestAnimationFrame(moveImages);
//       };
//       moveImages();
//     });
//   }, []);

//   const images = [
//     "/zoho.png", "/linkedin.png", "/linkedin.png", "/linkedin.png", "/linkedin.png"
//   ];

//   return (
//     <div className="mt-[190px] max-w-5xl flex flex-col md:flex-row h-auto md:h-[300px] items-center justify-between rounded-lg shadow-lg p-6">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 text-center md:text-left">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
//           Integrate with Your <span className="mx-1">🚀</span> Favorite Tools
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Want to add contacts to your favorite CRM? Maybe you want to send
//           your form submissions to your email marketing tools? Well that’s all
//           possible with formcarry and easy to setup too.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
//           Get Started
//         </button>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-end p-6">
//         <div className="relative grid grid-rows-2 gap-4 items-center ">
//           {/* First Scrolling Div */}
//           <div ref={carouselRefs[0]}
//           className="h-[290px] w-[132px] bg-white flex flex-col items-center justify-center shadow-lg outline outline-2 outline-gray-300 [clip-path:polygon(44%_0,100%_0,56%_100%,0%_100%)]">
//             {images.map((src, i) => (
//                 <img key={i} src={src} alt="Icon" className="h-6 mt-2 border-b-2 border-gray-300" />
//               ))}
//           </div>

//           {/* Second Scrolling Div */}
//           <div
//             ref={carouselRefs[1]}
//             className="ml-10 h-[264px] w-[130px] bg-white flex flex-col items-center justify-center rotate-[18deg] overflow-hidden shadow-lg border border-gray-300"
//           >
//             <img src="/zoho.png" alt="Zoho" className="h-6 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntegrateTools;

// import React, { useEffect, useRef } from "react";

// const IntegrateTools = () => {
//   const carouselRefs = [useRef(null), useRef(null)];

//   useEffect(() => {
//     const speeds = [0.85, 1];
//     carouselRefs.forEach((ref, index) => {
//       const container = ref.current;
//       if (!container) return;
//       const images = container.querySelectorAll("img");
//       let position = -90;
//       const speed = speeds[index];
//       const moveImages = () => {
//         images.forEach((img) => {
//           img.style.transform = `translate(${position}px, ${-position * 1.5}px)`;
//         });
//         position += speed;
//         if (position >= 100) {
//           position = -100;
//         }
//         requestAnimationFrame(moveImages);
//       };
//       moveImages();
//     });
//   }, []);

//   const images = [
//     "/zoho.png", "/linkedin.png", "/linkedin.png", "/linkedin.png", "/linkedin.png"
//   ];

//   return (
//     <div className="mt-[190px] max-w-5xl flex flex-col md:flex-row h-auto md:h-[300px] items-center justify-between rounded-lg shadow-lg p-6">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 text-center md:text-left">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
//           Integrate with Your <span className="mx-1">🚀</span> Favorite Tools
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Want to add contacts to your favorite CRM? Maybe you want to send
//           your form submissions to your email marketing tools? Well that's all
//           possible with formcarry and easy to setup too.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
//           Get Started
//         </button>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-end p-6">
//         <div className="relative grid grid-rows-2 gap-4 items-center ">
//           {/* First Scrolling Div */}
//           <div ref={carouselRefs[0]}
//               className="h-[290px] w-[132px] bg-white flex flex-col items-center justify-center shadow-lg outline outline-2 outline-gray-300 [clip-path:polygon(66%_0,100%_45%,34%_94%,0_48%)]">
//              <div className="rotate-[19deg]">
//              {images.map((src, i) => (
//                 <img key={i} src={src} alt="Icon" className={`h-6 mt-2 border-b-2 border-gray-300 mr-${i*12}`} />
//               ))}
//              </div>
//           </div>

//           {/* Second Scrolling Div */}
//           <div
//             ref={carouselRefs[1]}
//             className="ml-10 h-[264px] w-[130px] bg-white flex flex-col items-center justify-center rotate-[18deg] overflow-hidden shadow-lg border border-gray-300"
//           >
//             <img src="/zoho.png" alt="Zoho" className="h-6 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300"/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntegrateTools;

// import React, { useEffect, useRef } from "react";

// const IntegrateTools = () => {
//   const carouselRefs = [useRef(null), useRef(null)];

// useEffect(() => {
//   const speeds = [0.85, 1];
//   carouselRefs.forEach((ref, index) => {
//     const container = ref.current;
//     if (!container) return;
//     const images = container.querySelectorAll("img");
//     let position = -90;
//     const speed = speeds[index];
//     const moveImages = () => {
//       images.forEach((img) => {
//         // Apply movement with a less steep effect
//         img.style.transform = `translate(${position * 0.1}px, ${-position * 1.5}px) rotate(${index === 0 ? -30 : 0}deg)`;
//       });
//       position += speed;
//       if (position >= 100) {
//         position = -100;
//       }
//       requestAnimationFrame(moveImages);
//     };
//     moveImages();
//   });
// }, []);

//   const images = [
//     "/zoho.png", "/linkedin.png", "/linkedin.png", "/linkedin.png", "/linkedin.png"
//   ];

//   return (
//     <div className="mt-[190px] max-w-5xl flex flex-col md:flex-row h-[200px] items-center justify-between rounded-lg shadow-lg p-6">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 text-center md:text-left">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
//           Integrate with Your <span className="mx-1">🚀</span> Favorite Tools
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Want to add contacts to your favorite CRM? Maybe you want to send
//           your form submissions to your email marketing tools? Well that's all
//           possible with formcarry and easy to setup too.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
//           Get Started
//         </button>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-end p-6 overflow-hidden">
//         <div className="relative grid grid-rows-2 gap-4 items-center overflow-hidden">
//           {/* First Scrolling Div */}
//           <div
//             ref={carouselRefs[0]}
//             className="h-[190px] w-[132px] bg-white  flex flex-col items-center justify-center shadow-lg  rotate-[30deg] border-[1px] border-gray-600 overflow-hidden"
//             style={{ clipPath: 'polygon(0 25%, 75% 1%, 100% 68%, 21% 87%)' }}
//             >
//             {images.map((src, i) => (
//               <img
//                 key={i}
//                 src={"https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_c5c2ab01abd3fa49b574f6fb2c081a45/worxwide-consulting.jpg"}

//                 alt="Icon"
//                 className={`h-12 w-20 mt-2 mb-2 border-b-[1px] border-gray-300 mr-${i * 2} `} // No rotation class, handled via inline styles
//               />
//             ))}
//           </div>

//           {/* Second Scrolling Div */}
//           <div
//             ref={carouselRefs[1]}
//             className="ml-10 h-[264px] w-[130px] bg-white flex flex-col items-center justify-center rotate-[18deg] overflow-hidden shadow-lg border border-gray-300"
//           >
//             <img src="/zoho.png" alt="Zoho" className="h-6 border-b-2 border-gray-300" />
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300" />
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300" />
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300" />
//             <img src="/linkedin.png" alt="LinkedIn" className="h-6 mt-2 border-b-2 border-gray-300" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntegrateTools;

// import React, { useEffect, useRef } from "react";
// import zoho from "../assets/zoho.png"
// import mail from "../assets/mail.svg"
// import linkedin from "../assets/linkedin.svg"
// import salesforce from "../assets/salesforce.png"
// import dive from "../assets/dive.png"
// import glowstar from "../assets/glowstar.gif"
// import { Link } from "react-router-dom";

// const IntegrateTools = () => {
//   const carouselRefs = [useRef(null), useRef(null)];

//   useEffect(() => {
//     const speeds = [0.2, 0.5]; // Slower speed
//     const directions = [-1, 1]; // First moves up (-1), second moves down (1)
//     const rotations = [-30, -30]; // First rotates -30deg, second rotates 12deg

//     carouselRefs.forEach((ref, index) => {
//       const container = ref.current;
//       if (!container) return;

//       const images = container.querySelectorAll("img");
//       let position = 0;
//       const speed = speeds[index] * directions[index];

//       const moveImages = () => {
//         images.forEach((img) => {
//           img.style.transform = `translateY(${position}px) rotate(${rotations[index]}deg)`;
//         });

//         position += speed;
//         if (position >= 50 || position <= -50) { // Adjust range for a smooth effect
//           position = 0;
//         }
//         requestAnimationFrame(moveImages);
//       };

//       moveImages();
//     });
//   }, []);

//   const images = [
//     zoho, dive, mail, salesforce, dive, zoho, linkedin, mail,
//   ];

//   return (
//     <div className="mx-auto relative h-[558px] rounded-[32px] bg-[#f3f8f8] p-5 shadow-sm flex flex-col md:flex-row items-center justify-between p-6 overflow-hidden"
//     // style={{ background: "rgba(32, 124, 151, 0.02)" }}
//     >
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 text-center md:text-left " >
//         <div className="flex">
//           <h2 className="text-[30px] font-medium leading-[38px] text-[#252B37] ">Integrate with Your </h2>
//           <img src={glowstar} alt="glowstar" className="w-12 h-12" />
//           <h2 className="text-[30px] font-medium leading-[38px] text-[#252B37]">Favorite Tools</h2>
//         </div>
//         <p className="text-[#535862] text-[16px] font-inter font-normal leading-[24px]">
//           Want to add contacts to your favorite CRM? Maybe you want to send
//           your form submissions to your email marketing tools? Well that's all
//           possible with formcarry and easy to setup too.
//         </p>
//         {/* <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
//           Get Started
//         </button> */}

//         <Link to="/login"><button class="relative mt-4 rounded-[36px] border border-[#207C97] bg-[#207C97] text-white text-sm font-medium leading-[20px] py-2 px-4 overflow-hidden group">
//           <span class="relative z-10 group-hover:text-[#207C97] transition-colors duration-300"> Get Started</span>
//           <span class="absolute rounded-full inset-0 bg-white transform scale-0 group-hover:scale-100 transition-all duration-300 ease-out origin-bottom"></span>
//         </button></Link>

//       </div>

//       {/* Right Section */}
//       {/* <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-start p-6 overflow-hidden"> */}
//       <div className="grid grid-rows-2 gap-4 items-center overflow-hidden">

//         <div
//           ref={carouselRefs[0]}
//           className="absolute bottom-[10rem] right-[256px] w-[180px] h-[463px] bg-white rotate-[26deg] flex flex-col items-center justify-center shadow-xl overflow-hidden"
//           style={{ clipPath: 'polygon(-236% -12%, 346% -9%, 109% 64%, -2% 87%)' }}
//         // polygon(13% -174%, 470% 10%, 100% 65%, 10% 87%)      right: 256px;
//         // polygon(-236% -12%, 346% -9%, 101% 64%, -2% 87%)       bottom: 4rem;

//         >
//           {images.map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt="Icon"
//               className="h-20 w-20  p-4  border-b-[1px] border-gray-300"
//             />
//           ))}

//         </div>
//         <div
//           ref={carouselRefs[1]}
//           className="absolute top-[176px] right-[181px] w-[180px] h-[463px] bg-white rotate-[30deg] flex flex-col items-center justify-center shadow-lg  overflow-hidden"
//           style={{ clipPath: 'polygon(1% 27%, 102% 4%, 307% 150%, -70% 86%)' }}
//         // polygon(1% 27%, 102% 4%, 307% 150%, -70% 86%)
//         // right: 197px; 97

//         >
//           {/* {images.map((src, i) => (
//             <img
//               key={i}
//               src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_c5c2ab01abd3fa49b574f6fb2c081a45/worxwide-consulting.jpg"
//               alt="Icon"
//               className="h-12 w-20 mt-2 mb-2 border-b-[1px] border-gray-300"
//             />
//           ))} */}
//           {images.map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt="Icon"
//               className="h-20 w-20  p-4  border-b-[1px] border-gray-300"
//             />
//           ))}
//         </div>
//       </div>

//       {/* </div> */}
//     </div>
//   );
// };

// export default IntegrateTools;

import React from "react";
import { Link } from "react-router-dom";
import zoho from "../assets/zoho.png";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.png";
import salesforce from "../assets/salesforce.png";
import dive from "../assets/dive.png";
import glowstar from "../assets/glowstar.gif";
import outlook from "../assets/outlook.png";
import CustomButton from "@/components/CustomButton";

// Image array duplicated for seamless looping
const images = [
  zoho,
  dive,
  mail,
  salesforce,
  linkedin,
  outlook,
  zoho,
  dive,
  mail,
  salesforce,
  linkedin,
  outlook,
  zoho,
  dive,
  mail,
  salesforce,
  linkedin,
  outlook,
  zoho,
  dive,
  mail,
  salesforce,
  linkedin,
  outlook,
  zoho,
  dive,
  mail,
  salesforce,
  linkedin,
  outlook,
  zoho,
  dive,
  mail,
  salesforce,
  linkedin,
  outlook,
  zoho,
  dive,
  mail,
  salesforce,
  linkedin,
  outlook,
  zoho,
  dive,
  mail,
  salesforce,
  linkedin,
  outlook,
  zoho,
  dive,
  mail,
  salesforce,
  linkedin,
  outlook,
];

const IntegrateTools = () => {
  return (
    <div className="mx-auto relative h-[558px] rounded-[32px] bg-white shadow-sm flex flex-col md:flex-row items-center justify-between p-9 overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="flex">
          <h2 className="text-[30px] font-medium leading-[38px] text-[#252B37]">
            Integrate with Your{" "}
          </h2>
          <img src={glowstar} alt="glowstar" className="w-12 h-12" />
          <h2 className="text-[30px] font-medium leading-[38px] text-[#252B37]">
            Favorite Tools
          </h2>
        </div>
        <p className="text-[#535862] text-[16px] font-inter font-normal leading-[24px]">
          Want to add contacts to your favorite CRM? Maybe you want to send your
          form submissions to your email marketing tools? Well, that's all
          possible with formcarry and easy to set up too.
        </p>

        <Link to="/login">
            <CustomButton
              variant="secondary"
              text={"Get Started"}
              onClick={"onButtonClick"}
              customClass={"mt-3"}
            />{" "}
        </Link>
      </div>

      {/* Right Section - Scrolling Images */}
      <div className="grid grid-rows-2 gap-4 items-center overflow-hidden">
        {/* First Column of Scrolling Icons */}
        <div
          className="absolute bottom-[154px] right-[246px] w-[180px] h-[493px] bg-white rotate-[28deg] flex flex-col items-center justify-center shadow-md overflow-hidden z-20"
          style={{
            clipPath: "polygon(-236% -12%, 346% -9%, 109% 64%, -2% 87%)",
          }}
        >
          <div className="scroll-container reverse pr-8">
            {images.concat(images).map((src, i) => (
              <div className="w-full flex justify-center items-center border-b-[1px] rotate-[-30deg] h-[90px]  border-b-[#ECECEC]">
                <img
                  key={i}
                  src={src}
                  alt="Icon"
                  className="scrolling-image !pl-8"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bg-[#BEBEBE0D] bottom-[158px] right-[196px] w-[180px] h-[483px]  rotate-[28deg] flex flex-col items-center justify-center overflow-hidden z-10"
          style={{
            clipPath: "polygon(-236% -12%, 346% -9%, 109% 64%, -2% 87%)",
          }}
        ></div>

        {/* Second Column of Scrolling Icons */}
        <div
          className="absolute top-[173px] right-[171px] w-[180px] h-[463px] bg-white rotate-[28deg] flex flex-col items-center shadow-md justify-center  overflow-hidden z-20"
          style={{ clipPath: "polygon(1% 27%, 102% 4%, 307% 150%, -70% 86%)" }}
        >
          <div className="scroll-container  pr-7">
            {images.concat(images).map((src, i) => (
              <div className="w-full flex justify-center items-center border-b-[1px] rotate-[-30deg]  h-[90px] border-b-[#ECECEC]">
                <img
                  key={i}
                  src={src}
                  alt="Icon"
                  className="scrolling-image marker !pl-8 "
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bg-[#BEBEBE0D] top-[140px] right-[109px] w-[180px] h-[463px]  rotate-[28deg] flex flex-col items-center justify-center  overflow-hidden z-10"
          style={{ clipPath: "polygon(1% 27%, 102% 4%, 307% 150%, -70% 86%)" }}
        ></div>
      </div>
    </div>
  );
};

export default IntegrateTools;
