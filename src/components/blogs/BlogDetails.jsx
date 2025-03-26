// import React from "react";
// import background from "../../assets/background.png"

// const BlogDetails = () => {
//   return (
//     <section className="bg-gray-100 py-10 px-6 lg:px-20">
//       {/* Hero Section */}
//       <div className="bg-blue-100 rounded-xl overflow-hidden relative mb-8">
//         <div className="absolute inset-0 ">
//         <img
//               src={background}
//               alt="coverImage"
//               className="w-full h-full object-cover"
//             />
//         </div>
//         <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6">
//           <p className="text-white text-sm">19 Jan 2022 | 10 mins read</p>
//           <h1 className="text-white text-3xl font-bold mt-2">
//             5 Strategies to Generate High-Quality B2B Leads
//           </h1>
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-4 gap-8">
//         {/* Left Sidebar */}
//         <aside className="lg:col-span-1 bg-white rounded-xl shadow-md p-6">
//           <h3 className="text-lg font-bold mb-4">In this article</h3>
//           <ul className="space-y-3 text-gray-600">
//             <li className="border-l-2 border-blue-500 pl-3 text-blue-500">
//               Understanding Your Ideal Customer Profile (ICP)
//             </li>
//             <li>Leveraging Account-Based Marketing (ABM)</li>
//             <li>Using AI for Smarter Lead Scoring</li>
//             <li>Creating Value-Driven Content</li>
//             <li>Optimizing Your Outreach Channels</li>
//           </ul>
//         </aside>

//         {/* Main Content */}
//         <article className="lg:col-span-3">
//           {/* Stats and Share Section */}
//           <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-8">
//             <div className="flex space-x-4">
//               <p className="text-gray-600">
//                 <span className="font-bold">3.6K</span> ❤️
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-bold">59</span> 👁️
//               </p>
//             </div>
//             <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
//               <span>Share</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 12v.01M8 12v.01M12 12v.01M16 12v.01M20 12v.01M4 18v.01M8 18v.01M12 18v.01M16 18v.01M20 18v.01M4 6v.01M8 6v.01M12 6v.01M16 6v.01M20 6v.01"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Blog Content */}
//           <section className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">
//               Understanding Your Ideal Customer Profile (ICP)
//             </h2>
//             <p className="text-gray-600 mb-4">
//               "Before you start your lead generation journey, you must have a
//               clear picture of your ideal customer. This includes understanding
//               their pain points, industry, company size, and decision-making
//               process."
//             </p>
//             <ul className="list-disc pl-5 space-y-2 text-gray-600">
//               <li>
//                 Identify the industries and demographics that benefit the most
//                 from your product or service.
//               </li>
//               <li>
//                 Use tools like CRM analytics and customer interviews to define
//                 your ICP.
//               </li>
//               <li>
//                 Tailor your marketing campaigns based on these insights to
//                 attract the right audience.
//               </li>
//             </ul>
//             <p className="text-gray-600 mt-4">
//               Pro Tip: "The better you know your audience, the more precise and
//               impactful your outreach will be."
//             </p>
//           </section>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default BlogDetails;


import React, { useRef, useState } from "react";
import cloud from "../../assets/cloud.mp4";
import Section from "@/components/common/Section";
import BlogSlide from "@/carousels/BlogSlide";
import Footer from "@/components/common/Footer";
import twitter from "../../assets/twitter.png"
import linkedin2 from "../../assets/linkedin2.png"

const BlogDetails = () => {
  // Creating refs for each section
  const icpRef = useRef(null);
  const abmRef = useRef(null);
  const aiRef = useRef(null);
  const contentRef = useRef(null);
  const outreachRef = useRef(null);

  // Function to handle scrolling
  // const scrollToSection = (ref) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (ref, index) => {
    setActiveItem(index); // Set the clicked item as active
    scrollToSection(ref);

  };
  const scrollToSection = (ref) => {
    if (ref.current) {
      const offset = 100; // Navbar height adjust karne ke liye offset
      const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="w-[1000px] py-10">
        {/* Hero Section */}
        <div className="w-[1000px] h-[400px] rounded-xl overflow-hidden relative mb-8">
          <div className="absolute inset-0 ">
            {/* <img
              src={background}
              alt="coverImage"
              className="w-full h-full object-cover"
            /> */}
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              preload="auto"
              loop>
              <source src={cloud} type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-40 px-6">
            <p className="text-white text-sm">19 Jan 2022 | 10 mins read</p>
            <h1 className="text-white text-3xl text-center font-bold mt-2">
              5 Strategies to Generate High-Quality
            </h1>
            <h1 className="text-white text-3xl text-center font-bold mt-2">
              B2B Leads
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-4">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1 bg-white">
            <div className="bg-[#E9EAEB] h-[69px] w-full rounded-[10px] inline-flex flex-col items-start gap-2 p-2 mb-[40px]">
              <p class="text-[#252B37] text-base font-medium leading-6">Share with your community!</p>
              <div className="flex gap-2">
                <img src={twitter} alt="rocket" className="w-4 h-4" />
                <img src={linkedin2} alt="linkedin" className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-4">In this article</h3>
            <ul className="space-y-3 text-gray-600">
              <li
                className={`cursor-pointer border-l-2 pl-4 transition-colors ${activeItem === 1 ? "border-[#207C97] text-[#207C97]" : "border-transparent text-gray-700"
                  }`}
                onClick={() => handleClick(abmRef, 1)}
              >
                Leveraging Account-Based Marketing (ABM)
              </li>
              <li
                className={`cursor-pointer border-l-2 pl-4 transition-colors ${activeItem === 2 ? "border-[#207C97] text-[#207C97]" : "border-transparent text-gray-700"
                  }`}
                onClick={() => handleClick(abmRef, 2)}
              >
                Using AI for Smarter Lead Scoring
              </li>
              <li
                className={`cursor-pointer border-l-2 pl-4 transition-colors ${activeItem === 3 ? "border-[#207C97] text-[#207C97]" : "border-transparent text-gray-700"
                  }`}
                onClick={() => handleClick(abmRef, 3)}
              >
                Creating Value-Driven Content
              </li>
              <li
                className={`cursor-pointer border-l-2 pl-4 transition-colors ${activeItem === 4 ? "border-[#207C97] text-[#207C97]" : "border-transparent text-gray-700"
                  }`}
                onClick={() => handleClick(abmRef, 4)}
              >
                Optimizing Your Outreach Channels
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <article className="pl-8 lg:col-span-3 w-full">
            {/* Stats and Share Section */}
            <div className="flex items-center justify-between bg-white border-b-2 border-t-2 p-4 mb-8">
              <div className="flex space-x-4">
                {/* Likes Section */}
                <p className="text-gray-600 relative group">
                  <span className="font-bold">3.6K</span>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 text-sm text-gray-900 bg-white rounded-md shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 before:absolute before:content-[''] before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-white">
                    Likes
                  </span>
                </p>

                {/* Views Section */}
                <p className="text-gray-600 relative group">
                  <span className="font-bold">59</span>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 text-sm text-gray-900 bg-white rounded-md shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 before:absolute before:content-[''] before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-white">
                    Views
                  </span>
                </p>
              </div>

              <button className="flex justify-between items-center space-x-2 text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                  <path d="M10.833 13.6673C10.2775 13.6673 9.80523 13.4729 9.41634 13.084C9.02745 12.6951 8.83301 12.2229 8.83301 11.6673C8.83301 11.6007 8.84968 11.4451 8.88301 11.2007L4.19967 8.46732C4.0219 8.63398 3.81634 8.76454 3.58301 8.85898C3.34967 8.95343 3.09967 9.00065 2.83301 9.00065C2.27745 9.00065 1.80523 8.80621 1.41634 8.41732C1.02745 8.02843 0.833008 7.55621 0.833008 7.00065C0.833008 6.4451 1.02745 5.97287 1.41634 5.58398C1.80523 5.1951 2.27745 5.00065 2.83301 5.00065C3.09967 5.00065 3.34967 5.04787 3.58301 5.14232C3.81634 5.23676 4.0219 5.36732 4.19967 5.53398L8.88301 2.80065C8.86079 2.72287 8.8469 2.64787 8.84134 2.57565C8.83579 2.50343 8.83301 2.42287 8.83301 2.33398C8.83301 1.77843 9.02745 1.30621 9.41634 0.917318C9.80523 0.528429 10.2775 0.333984 10.833 0.333984C11.3886 0.333984 11.8608 0.528429 12.2497 0.917318C12.6386 1.30621 12.833 1.77843 12.833 2.33398C12.833 2.88954 12.6386 3.36176 12.2497 3.75065C11.8608 4.13954 11.3886 4.33398 10.833 4.33398C10.5663 4.33398 10.3163 4.28676 10.083 4.19232C9.84968 4.09787 9.64412 3.96732 9.46634 3.80065L4.78301 6.53398C4.80523 6.61176 4.81912 6.68676 4.82467 6.75898C4.83023 6.83121 4.83301 6.91176 4.83301 7.00065C4.83301 7.08954 4.83023 7.17009 4.82467 7.24232C4.81912 7.31454 4.80523 7.38954 4.78301 7.46732L9.46634 10.2007C9.64412 10.034 9.84968 9.90343 10.083 9.80898C10.3163 9.71454 10.5663 9.66732 10.833 9.66732C11.3886 9.66732 11.8608 9.86176 12.2497 10.2507C12.6386 10.6395 12.833 11.1118 12.833 11.6673C12.833 12.2229 12.6386 12.6951 12.2497 13.084C11.8608 13.4729 11.3886 13.6673 10.833 13.6673ZM10.833 12.334C11.0219 12.334 11.1802 12.2701 11.308 12.1423C11.4358 12.0145 11.4997 11.8562 11.4997 11.6673C11.4997 11.4784 11.4358 11.3201 11.308 11.1923C11.1802 11.0645 11.0219 11.0007 10.833 11.0007C10.6441 11.0007 10.4858 11.0645 10.358 11.1923C10.2302 11.3201 10.1663 11.4784 10.1663 11.6673C10.1663 11.8562 10.2302 12.0145 10.358 12.1423C10.4858 12.2701 10.6441 12.334 10.833 12.334ZM2.83301 7.66732C3.0219 7.66732 3.18023 7.60343 3.30801 7.47565C3.43579 7.34787 3.49967 7.18954 3.49967 7.00065C3.49967 6.81176 3.43579 6.65343 3.30801 6.52565C3.18023 6.39787 3.0219 6.33398 2.83301 6.33398C2.64412 6.33398 2.48579 6.39787 2.35801 6.52565C2.23023 6.65343 2.16634 6.81176 2.16634 7.00065C2.16634 7.18954 2.23023 7.34787 2.35801 7.47565C2.48579 7.60343 2.64412 7.66732 2.83301 7.66732ZM10.833 3.00065C11.0219 3.00065 11.1802 2.93676 11.308 2.80898C11.4358 2.68121 11.4997 2.52287 11.4997 2.33398C11.4997 2.1451 11.4358 1.98676 11.308 1.85898C11.1802 1.73121 11.0219 1.66732 10.833 1.66732C10.6441 1.66732 10.4858 1.73121 10.358 1.85898C10.2302 1.98676 10.1663 2.1451 10.1663 2.33398C10.1663 2.52287 10.2302 2.68121 10.358 2.80898C10.4858 2.93676 10.6441 3.00065 10.833 3.00065Z" fill="#3F454D" />
                </svg>
                <span>Share</span>
              </button>
            </div>

            {/* Blog Content */}
            {/* <section ref={icpRef} className="bg-white  p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Understanding Your Ideal Customer Profile (ICP)
              </h2>
              <p className="text-gray-600 mb-4">
                "Before you start your lead generation journey, you must have a
                clear picture of your ideal customer. This includes understanding
                their pain points, industry, company size, and decision-making
                process."
              </p>
            </section> */}

            <section ref={abmRef} className="bg-white p-6 mb-8">
              <h2 className="text-[#252B37] text-lg font-bold leading-[28px]">

                Leveraging Account-Based Marketing (ABM)
              </h2>
              <p className="text-[#414651] text-base font-normal leading-6">
                ABM focuses on targeting specific high-value accounts instead of a broad audience.
              </p>
            </section>

            <section ref={aiRef} className="bg-white p-6 mb-8">
              <h2 className="text-[#252B37] text-lg font-bold leading-[28px]">
                Using AI for Smarter Lead Scoring
              </h2>
              <p className="text-[#414651] text-base font-normal leading-6">
                AI can help analyze data and prioritize leads with higher chances of conversion.
              </p>
            </section>

            <section ref={contentRef} className="bg-white p-6 mb-8">
              <h2 className="text-[#252B37] text-lg font-bold leading-[28px]">
                Creating Value-Driven Content
              </h2>
              <p className="text-[#414651] text-base font-normal leading-6">
                "Before you start your lead generation journey, you must have a clear picture of your ideal customer. This includes understanding their pain points, industry, company size, and decision-making process."
                Key Points:
                Identify the industries and demographics that benefit the most from your product or service.
                Use tools like CRM analytics and customer interviews to define your ICP.
                Tailor your marketing campaigns based on these insights to attract the right audience.
                Pro Tip: “The better you know your audience, the more precise and impactful your outreach will be.”
              </p>
            </section>

            <section ref={outreachRef} className="bg-white p-6 mb-8">
              <h2 className="text-[#252B37] text-lg font-bold leading-[28px]">
                Optimizing Your Outreach Channels
              </h2>
              <p className="text-[#414651] text-base font-normal leading-6">
                Using the right outreach channels ensures higher engagement and conversion rates.
              </p>
            </section>
            <div className="h-[70px] w-full flex justify-center items-center justify-between text-white text-sm font-semibold leading-5 
            rounded-[10px] bg-[#207C97] p-4">
              <p>Like what you see? Share with a friend.</p>
              <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <g clip-path="url(#clip0_5717_4400)">
                    <path d="M21.2273 0H3.77273C1.96525 0 0.5 1.46525 0.5 3.27273V20.7273C0.5 22.5347 1.96525 24 3.77273 24H21.2273C23.0347 24 24.5 22.5347 24.5 20.7273V3.27273C24.5 1.46525 23.0347 0 21.2273 0Z" fill="white" />
                    <path d="M9.14535 6.54545C9.14535 6.95001 9.02539 7.34547 8.80063 7.68185C8.57587 8.01822 8.25642 8.28039 7.88266 8.43521C7.5089 8.59002 7.09763 8.63053 6.70085 8.55161C6.30407 8.47268 5.93961 8.27787 5.65354 7.99181C5.36748 7.70575 5.17267 7.34128 5.09375 6.9445C5.01482 6.54772 5.05533 6.13645 5.21015 5.76269C5.36496 5.38894 5.62713 5.06948 5.96351 4.84472C6.29988 4.61996 6.69535 4.5 7.0999 4.5C7.64239 4.5 8.16266 4.7155 8.54625 5.0991C8.92985 5.4827 9.14535 6.00297 9.14535 6.54545Z" fill="#207C97" />
                    <path d="M8.68179 9.95454V18.9914C8.68215 19.058 8.66933 19.1241 8.64406 19.1858C8.6188 19.2475 8.58159 19.3036 8.53458 19.3509C8.48757 19.3981 8.43167 19.4356 8.37011 19.4612C8.30856 19.4868 8.24255 19.5 8.17588 19.5H6.01997C5.9533 19.5002 5.88726 19.4872 5.82563 19.4617C5.76401 19.4363 5.70801 19.399 5.66087 19.3518C5.61373 19.3047 5.57637 19.2487 5.55094 19.1871C5.52552 19.1254 5.51252 19.0594 5.5127 18.9927V9.95454C5.5127 9.82 5.56614 9.69097 5.66127 9.59584C5.75641 9.50071 5.88543 9.44727 6.01997 9.44727H8.17588C8.31018 9.44763 8.43886 9.50123 8.53369 9.59632C8.62853 9.69142 8.68179 9.82024 8.68179 9.95454Z" fill="#207C97" />
                    <path d="M19.9507 14.6587V19.0332C19.9509 19.0945 19.939 19.1553 19.9156 19.2119C19.8922 19.2686 19.8579 19.3201 19.8145 19.3634C19.7712 19.4068 19.7197 19.4411 19.6631 19.4645C19.6064 19.4878 19.5457 19.4998 19.4844 19.4996H17.1662C17.1049 19.4998 17.0442 19.4878 16.9875 19.4645C16.9308 19.4411 16.8794 19.4068 16.836 19.3634C16.7927 19.3201 16.7583 19.2686 16.735 19.2119C16.7116 19.1553 16.6997 19.0945 16.6998 19.0332V14.7937C16.6998 14.161 16.8853 12.0228 15.0457 12.0228C13.6207 12.0228 13.3303 13.486 13.273 14.1432V19.0332C13.273 19.1558 13.2248 19.2734 13.1388 19.3606C13.0528 19.4479 12.936 19.4978 12.8135 19.4996H10.5744C10.5132 19.4996 10.4526 19.4875 10.3961 19.4641C10.3396 19.4406 10.2883 19.4062 10.2451 19.3629C10.2019 19.3196 10.1677 19.2682 10.1444 19.2116C10.1211 19.155 10.1092 19.0944 10.1094 19.0332V9.9146C10.1092 9.85342 10.1211 9.79281 10.1444 9.73624C10.1677 9.67966 10.2019 9.62824 10.2451 9.58492C10.2883 9.54159 10.3396 9.50722 10.3961 9.48376C10.4526 9.46031 10.5132 9.44824 10.5744 9.44824H12.8135C12.9372 9.44824 13.0558 9.49737 13.1432 9.58483C13.2307 9.67229 13.2798 9.79091 13.2798 9.9146V10.7028C13.8089 9.90915 14.593 9.29688 16.2662 9.29688C19.9726 9.29688 19.9507 12.7578 19.9507 14.6587Z" fill="#207C97" />
                  </g>
                  <defs>
                    <clipPath id="clip0_5717_4400">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <g clip-path="url(#clip0_5717_4397)">
                    <path d="M13.3025 11.5913L18.7033 19.3165H16.4868L12.0796 13.0127V13.0123L11.4325 12.087L6.28418 4.72266H8.50071L12.6554 10.6659L13.3025 11.5913Z" fill="white" />
                    <path d="M21.9067 0H3.09325C1.66108 0 0.5 1.16108 0.5 2.59325V21.4067C0.5 22.8389 1.66108 24 3.09325 24H21.9067C23.3389 24 24.5 22.8389 24.5 21.4067V2.59325C24.5 1.16108 23.3389 0 21.9067 0ZM15.808 20.3525L11.3481 13.8617L5.76435 20.3525H4.32122L10.7073 12.9295L4.32122 3.63521H9.19203L13.4152 9.78152L18.7026 3.63521H20.1458L14.0562 10.7139H14.0558L20.6788 20.3525H15.808Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_5717_4397">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="space-y-[148px] mt-[188px]">
        <BlogSlide text={"Related Articles"} goto={"blogsection"} classname={"start"} />
        <Section text={"Start Your Free Trial Today!"} text2={"Transform your sales process with AI-powered automation and insights."} buttonText={true} />
        <Footer />
      </div>
    </div>
  );
};

export default BlogDetails;

