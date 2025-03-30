import React, { useState, useRef, useEffect } from "react";
import svg from "../../assets/svg.svg";
import svg2 from "../../assets/svg2.svg";
import svg3 from "../../assets/svg3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swiper1 from "../../assets/swiper1.png";
import swiper2 from "../../assets/swiper2.png";
import swiper3 from "../../assets/swiper3.png";
import swiper4 from "../../assets/swiper4.png";
import Lock from "../../assets/Lock.png";
import BlogSlide from "@/carousels/BlogSlide";
import Section from "@/components/common/Section";
import Footer from "@/components/common/Footer";
import { Link, useParams } from "react-router-dom";
import CustomButton from "../CustomButton";
import TeamSection from "../common/TeamSection";
import { fetchWhitepaperBySlug } from "@/services/whitepaperApis";
import { useFormik } from "formik";
import { toast } from "sonner";

const images = [swiper1, swiper1, swiper1, swiper1];

const WhitepaperDetail = () => {
  const [allowDownload, setAllowDownload] = useState(false);
  const { slug } = useParams();
  const formRef = useRef();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentdiv, setCurrentdiv] = useState("form");
  const [allow, setAllow] = useState(false);
  const [whitepaperData, setWhitepaperData] = useState();

  const [isClick, setIsClick] = useState(false);

  const handleClicked = () => {
    setIsClick(true);
    setTimeout(() => setIsClick(false), 3000);
  };

  const keyPoints = [
    {
      icon: svg2, // Replace with actual icons
      title: "Growth Strategies",
      description: "Data-driven insights to scale your business.",
    },
    {
      icon: svg3,
      title: "Actionable Case Studies",
      description: "Real-world examples with practical tips.",
    },
    {
      icon: svg2,
      title: "Future Trends",
      description: "Data-driven insights to scale your business.",
    },
  ];

  const [shake, setShake] = useState(false);
  const [border, setBorder] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 1000); // Reset shake effect after 500ms
    setBorder(true);
    setAllow(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      designation: "",
      email: "",
      number: "",
    },

    onSubmit: (values) => {
      setAllowDownload(true);
    },
  });
  const getWhitepaperBySlug = async () => {
    try {
      const response = await fetchWhitepaperBySlug(slug);

      if (response?.data != undefined) {
        setWhitepaperData(response?.data?.[0]);
      } else {
        toast.error("Something went wrong ! Please try again later !");
      }
      console.log(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName); // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    formik.setFieldValue({
      name: "",
      designation: "",
      email: "",
      number: "",
    });
  };

  useEffect(() => {
    const handleDownload = () => {
      const fileUrl = whitepaperData?.whitepaperfile?.url; // Replace with your actual file URL
      const fileName = "whitepaperData.pdf";
      downloadFile(fileUrl, fileName);
      setAllowDownload(false);
    };

    if (allowDownload) {
      handleDownload();
    }
  }, [allowDownload]);

  useEffect(() => {
    getWhitepaperBySlug();
  }, []);

  return (
    <>
      <div className=" xl:mx-20 2xl:mx-44">
        {/* <div className="flex flex-col lg:flex-row items-stretch w-full h-[700px] bg-gray-50 p-8 gap-4"> */}
        <div className="flex flex-wrap lg:flex-nowrap items-stretch w-full min-h-[500px] bg-gray-50 p-8 gap-[62px]">
          {/* Left Section: Image Slider */}
          <div className="flex flex-col justify-between items-center overflow-hidden w-full lg:w-1/2 rounded-[8px] bg-[#EDEDED] pt-[80px]">
            <div className="relative w-[631px] h-[580px]">
              <Swiper
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                loop={false}
                slidesPerView={2}
                spaceBetween={-30}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className=" p-6"
              >
                <SwiperSlide key={0}>
                  <img
                    src={swiper1}
                    alt="slide_image"
                    className="h-full w-full object-fill"
                  />
                </SwiperSlide>
                <SwiperSlide key={1}>
                  <img
                    src={swiper2}
                    alt="slide_image"
                    className="h-full w-full "
                  />
                </SwiperSlide>
                <SwiperSlide key={2}>
                  <img
                    src={swiper3}
                    alt="slide_image"
                    className="h-full w-full "
                  />
                </SwiperSlide>
                <SwiperSlide key={3}>
                  <img
                    src={swiper4}
                    alt="slide_image"
                    className="h-full w-full "
                  />
                </SwiperSlide>
                <SwiperSlide key={4}>
                  <div className="relative h-full">
                    <img
                      src={swiper3}
                      alt="slide_image"
                      className="h-full w-full "
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
                      <div className="relative text-center text-white px-6">
                        {/* Lock Icon */}
                        <div className="flex justify-center mb-4">
                          <img src={Lock} alt="lock" className="w-14 h-14" />
                        </div>

                        {/* Text Content */}
                        <h2 className="text-[16px] font-semibold leading-[24px]">
                          Want to explore the rest?
                        </h2>
                        <p className="text-[14px] leading-[20px] mt-2">
                          Click Below to download the full whitepaper and unlock
                          exclusive insights.
                        </p>

                        {/* Button */}
                        <button
                          onClick={handleClick}
                          className="mt-4 px-3 py-2 text-[14px]  text-white font-normal leading-[20px] rounded-lg shadow-md hover:bg-gray-200 hover:text-black transition"
                        >
                          Click Here →
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="mt-[24px] realtive flex justify-between overflow-hidden">
                <div
                  ref={prevRef}
                  className="flex justify-center items-center gap-1 absolute left-[130px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15.8335 9.99935H4.16683M4.16683 9.99935L10.0002 4.16602M4.16683 9.99935L10.0002 15.8327"
                      stroke="#252B37"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <button
                    ref={prevRef}
                    className={`px-4 py-2 transition-colors ${
                      nextRef.current === 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-[#252B37] hover:text-[#207C97]"
                    }`}
                    disabled={prevRef.current === 0}
                  >
                    Previous{" "}
                  </button>
                </div>
                <div
                  ref={nextRef}
                  className="flex justify-center items-center gap-1 absolute right-[130px]"
                >
                  <button
                    className={`px-4 py-2 transition-colors ${
                      prevRef.current === 4
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-[#252B37] hover:text-[#207C97]"
                    }`}
                    disabled={nextRef.current === 4}
                  >
                    Next
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.1665 9.99935H15.8332M15.8332 9.99935L9.99984 4.16602M15.8332 9.99935L9.99984 15.8327"
                      stroke="#252B37"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="flex flex-col w-full lg:w-1/2 p-4 " ref={formRef}>
            <h4 className="text-sm text-brand font-medium mb-2">Whitepaper</h4>
            <h2 className="text-2xl font-semibold text-gray-900 leading-8 mb-4">
              How is Salesforce Revolutionising the Manufacturing & Industrial
              Engineering Sector
            </h2>
            <p className="text-base text-gray-600 mb-6">
              Explore emerging sales trends and technologies reshaping the
              industry. Learn how to stay ahead in a competitive market.
            </p>
            <div
              onClick={() => setBorder(false)}
              className={`mt-6 ${shake ? "animate-shake" : ""} 
            ${border ? "border bg-white rounded-[24px] p-6" : ""} ${
                shake
                  ? "border-2 border-gray-500  bg-white rounded-[24px] p-6"
                  : " bg-white rounded-[24px] p-6"
              }`}
            >
              <h1 className="text-[24px] font-semibold leading-[32px] text-[#252B37] font-inter mb-8">
                Get Full Access
              </h1>
              {currentdiv === "form" && (
                <form
                  onSubmit={(e) => {
                    formik.handleSubmit();
                  }}
                  className="space-y-5"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-brand focus:outline-none placeholder:text-[14px]"
                    required={true}
                    value={formik.name}
                    name="name"
                    onChange={formik.handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Your Designation"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-brand focus:outline-none placeholder:text-[14px]"
                    required={true}
                    name="designation"
                    value={formik.designation}
                    onChange={formik.handleChange}
                  />
                  <input
                    type="email"
                    placeholder="Your Work Email"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-brand focus:outline-none placeholder:text-[14px]"
                    required={true}
                    value={formik.email}
                    name="email"
                    onChange={formik.handleChange}
                  />
                  <div className="flex items-center border border-gray-300 rounded-md p-3">
                    <select
                      name={formik.number}
                      className="bg-transparent focus:outline-none"
                      onChange={formik.handleChange}
                    >
                      <option value="US">US +1</option>
                      <option value="IN">IN +91</option>
                      {/* Add more options */}
                    </select>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="flex-grow focus:outline-none placeholder:text-[14px]"
                      required={true}
                    />
                  </div>

                  <button
                    onClick={() => {
                      if (!allowDownload) {
                        toast.warning(
                          "Please Enter required details to download !"
                        );
                      } else {
                        setAllowDownload(true);
                      }
                    }}
                    className={`group relative mt-4 w-full rounded-[36px] border border-[#207C97] 
                   text-white text-sm font-medium leading-[20px] flex p-[12px_16px] justify-center items-center gap-1 self-stretch font-inter 
                   overflow-hidden transition-colors duration-300 
                   ${
                     isClick ? "bg-[#ADD8E6] border-[#87CEEB]" : "bg-[#717680]"
                   }`}
                  >
                    <div className="flex gap-1 items-center relative z-10">
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#207C97]">
                        Download Full Whitepaper{" "}
                      </span>

                      {/* SVG with Hover Effects */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        className="transition-transform duration-300 group-hover:-rotate-[50deg] relative z-10"
                      >
                        <path
                          d="M2.5 8.98756L14.5265 8.98756L9.85539 4.43159L11.3231 3L18.5 10L11.3231 17L9.85539 15.5684L14.5265 11.0124L2.5 11.0124L2.5 8.98756Z"
                          className="fill-white transition-colors duration-700 group-hover:fill-[#717680]"
                        />
                      </svg>
                    </div>

                    {/* Background Hover Effect */}
                    <span
                      className="absolute rounded-full inset-0 bg-white
                     transform scale-0 group-hover:scale-100 
                     transition-transform duration-500 ease-out origin-bottom z-0"
                    ></span>
                  </button>
                </form>
              )}
              {allow === true && currentdiv === "tick" && (
                // <div className="h-40 space-y-6">
                <div className="flex flex-col items-center justify-center bg-white">
                  {/* Green Check Icon */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
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
                  </div>

                  {/* Success Message */}
                  <h2 className="mt-4 text-xl font-semibold text-gray-900">
                    Message Sent Successfully!
                  </h2>

                  {/* Description */}
                  <p className="mt-2 text-center text-gray-600 max-w-md">
                    Thank you for reaching out to us. We’ve received your
                    message and will get back to you shortly. Have a great day!
                  </p>

                  {/* Explore Services Button */}
                  <Link to="/whitepaper">
                    <button className="mt-6 flex items-center text-gray-900 font-medium hover:text-black transition-all">
                      Explore Our Services
                      {/* <ArrowRightIcon className="w-5 h-5 ml-2" /> */}
                    </button>
                  </Link>

                  {/* Underline Effect */}
                  <div className="w-32 border-t border-gray-900 mt-1"></div>
                </div>
                // </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 mt-[188px] mx-8 2xl:mx-24">
          {/* Header Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#252B37] font-poppins text-[36px] font-medium leading-[48px] mb-[16px]">
              How Salesforce is Revolutionizing the Manufacturing & Industrial
              Engineering Sector
            </h2>
            <p className="text-[#414651] font-inter text-[16px] font-normal leading-[24px]">
              Salesforce is revolutionizing the manufacturing sector by offering
              innovative solutions that enhance operational efficiency and drive
              growth. By consolidating data from various sources, Salesforce
              enables real-time data integration, allowing businesses to make
              faster, data-driven decisions that improve both operations and
              customer service.
            </p>
            <p className="text-[#414651] font-inter text-[16px] font-normal leading-[24px]">
              Moreover, Salesforce leverages predictive analytics and AI-driven
              insights to help manufacturers proactively address potential
              issues, schedule maintenance before breakdowns occur, and minimize
              costly downtime.
            </p>
          </div>

          {/* Key Points Section */}
          <div className="flex justify-between items-center mt-12 w-full max-w-6xl mx-auto">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className={`flex flex-col items-start text-center p-8 w-1/3 ${
                  index < keyPoints?.length - 1 ? "border-r-[1px]" : ""
                }`}
              >
                <img
                  src={point.icon}
                  alt={point.title}
                  className="w-16 h-16 mb-4"
                />
                <h4 className="text-lg font-medium text-gray-900">
                  {point.title}
                </h4>
                <p className="text-gray-600 mt-2 text-start">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              formRef.current.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => setShake(true), 700);
              setTimeout(() => setShake(false), 2000);
            }}
            className={`group relative mt-8 rounded-[36px] border border-[#207C97] w-fit
                   text-white text-sm font-medium leading-[20px] flex p-[12px_16px] justify-center items-center gap-1 self-stretch font-inter 
                   overflow-hidden transition-colors duration-300 2xl:ml-[90px]
                   ${
                     isClick ? "bg-[#ADD8E6] border-[#87CEEB]" : "bg-[#207C97]"
                   }`}
          >
            <div className="flex gap-1 items-center relative z-10">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#207C97]">
                Download Full Whitepaper{" "}
              </span>

              {/* SVG with Hover Effects */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                className="transition-transform duration-300 group-hover:-rotate-[50deg] relative z-10"
              >
                <path
                  d="M2.5 8.98756L14.5265 8.98756L9.85539 4.43159L11.3231 3L18.5 10L11.3231 17L9.85539 15.5684L14.5265 11.0124L2.5 11.0124L2.5 8.98756Z"
                  className="fill-white transition-colors duration-700 group-hover:fill-[#207C97]"
                />
              </svg>
            </div>

            {/* Background Hover Effect */}
            <span
              className="absolute rounded-full inset-0 bg-white
                     transform scale-0 group-hover:scale-100 
                     transition-transform duration-500 ease-out origin-bottom z-0"
            ></span>
          </button>
        </div>

        <div className="space-y-[188px] mt-36 2xl:ml-12">
          <BlogSlide
            headingLeftMargin={true}
            marginLeftCardNo={true}
            buttonClass={"xl:ml-4"}
            text={"Related Articles"}
            goto={"whitepappersection"}
            classname={"start"}
          />
        </div>
        <div className="mt-36 w-[1000px] mx-auto">
          <TeamSection
            title="Start Your Free Trial Today!"
            description="Transform your sales process with AI-powered automation and insights."
            buttonText="Try for Free"
            onButtonClick={() => console.log("Free Trial Started")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhitepaperDetail;
