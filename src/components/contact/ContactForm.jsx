import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";
import Rectangle from "../../assets/Rectangle.png";
import Salesworx from "../../assets/Salesworx.gif";
import CustomButtonCorrect from "../common/CustomButtonCorrect";

const ContactForm = () => {
  const testimonials = [
    {
      name: "Anita Desai",
      role: "Sales Manager at Innovatech Solutions",
      testimonial:
        "Salesworx has completely transformed how we handle leads. The AI assistant's insights have helped us prioritize high-value prospects, resulting in a 35% increase in conversion rates in just 2 months!",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      name: "David Smith",
      role: "Marketing Director at TechNova",
      testimonial:
        "Follow-ups used to take forever. Now, Salesworx automates it all, helping us close more deals in half the time. Our team loves the simplicity of the tool!",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Emma Johnson",
      role: "Head of Sales at StartupX",
      testimonial:
        "The automation features in Salesworx have streamlined our workflow, making sales tracking more efficient and effective.",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  ];

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  // const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testimonials.length;

  const carouselRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextSlide = (currentSlide + 1) % totalSlides;
        setCurrentSlide(nextSlide);
        carouselRef.current.scrollTo(nextSlide); // Move to the next slide
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <div className="relative w-[1200px] py-10 mx-auto">
      <div className="absolute top-[300px] xl:-left-[200px] 2xl:-left-[300px] w-[140px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] "></div>
      <div className="absolute top-[100px] xl:-right-[200px] 2xl:-right-[300px] w-[100px] h-[160px]  rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] z-10"></div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-6 p-4">
          {/* Title & Description */}
          <div>
            <h2 className="text-[48px] font-medium leading-[60px] tracking-[-0.96px] text-gray-900">
              Let's Transform Your
            </h2>
            <div className="flex">
              <span className="text-[48px] font-medium leading-[60px] tracking-[-0.96px] text-gray-900">
                Sales
              </span>
              <span className="flex flex-col">
                <img
                  src={Salesworx}
                  alt="Salesworx"
                  className="w-[60px] h-[59px] "
                />
              </span>
              <span className="text-[48px] font-medium leading-[60px] tracking-[-0.96px] text-gray-900">
                Together
              </span>
            </div>

            <p className="text-base font-normal leading-6 text-gray-600 mt-4">
              Have questions or ready to get started? Reach out to our
              team—we’re here to help you every step of the way.
            </p>
          </div>

          {/* Carousel/Testimonials */}
          <div className="bg-blue-50 w-[486px] h-[270px] rounded-[14px]">
            <Carousel
              setApi={(api) => (carouselRef.current = api)}
              className="w-full"
            >
              <CarouselContent className="flex  h-full">
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem
                    key={idx}
                    className="sm:basis-1/1 basis-full flex justify-center overflow-hidden"
                  >
                    <Card
                      className="relative w-[486px] h-[270px] text-white rounded-lg shadow-lg flex flex-col items-end   bg-[#207C97] overflow-hidden"
                      style={{
                        backgroundImage: `url(${Rectangle})`,
                        backgroundSize: "100% 100%", // Force stretch
                        // backgroundPosition: "center",
                        // backgroundRepeat: "no-repeat",
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="absolute bottom-[82px] left-[60px] w-[70px] h-[70px] rounded-full mb-4 "
                      />

                      <div className="my-auto z-10 w-[300px] flex flex-col text-left p-2 gap-2 text-[14px]">
                        <div className="flex gap-1 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M12.4625 13.3924C12.6803 14.1094 11.8634 14.6933 11.2555 14.2552L8.1207 11.9962C7.85115 11.802 7.48836 11.799 7.21565 11.9888L4.03916 14.1993C3.42394 14.6274 2.61668 14.0297 2.84664 13.3163L4.03161 9.64023C4.13368 9.32357 4.0245 8.97698 3.75936 8.776L0.676038 6.43879C0.0790733 5.98628 0.397231 5.03438 1.14631 5.03176L5.00936 5.01829C5.3419 5.01713 5.63743 4.80605 5.74641 4.49187L7.0135 0.838872C7.25901 0.131094 8.26274 0.139024 8.49703 0.850593L9.70562 4.5213C9.80947 4.83671 10.101 5.05232 10.433 5.05927L14.3003 5.14021C15.0489 5.15588 15.3506 6.11261 14.7464 6.5549L11.6269 8.83833C11.3585 9.03481 11.2435 9.37946 11.3402 9.69775L12.4625 13.3924Z"
                              fill="#FFC100"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M12.4625 13.3924C12.6803 14.1094 11.8634 14.6933 11.2555 14.2552L8.1207 11.9962C7.85115 11.802 7.48836 11.799 7.21565 11.9888L4.03916 14.1993C3.42394 14.6274 2.61668 14.0297 2.84664 13.3163L4.03161 9.64023C4.13368 9.32357 4.0245 8.97698 3.75936 8.776L0.676038 6.43879C0.0790733 5.98628 0.397231 5.03438 1.14631 5.03176L5.00936 5.01829C5.3419 5.01713 5.63743 4.80605 5.74641 4.49187L7.0135 0.838872C7.25901 0.131094 8.26274 0.139024 8.49703 0.850593L9.70562 4.5213C9.80947 4.83671 10.101 5.05232 10.433 5.05927L14.3003 5.14021C15.0489 5.15588 15.3506 6.11261 14.7464 6.5549L11.6269 8.83833C11.3585 9.03481 11.2435 9.37946 11.3402 9.69775L12.4625 13.3924Z"
                              fill="#FFC100"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M12.4625 13.3924C12.6803 14.1094 11.8634 14.6933 11.2555 14.2552L8.1207 11.9962C7.85115 11.802 7.48836 11.799 7.21565 11.9888L4.03916 14.1993C3.42394 14.6274 2.61668 14.0297 2.84664 13.3163L4.03161 9.64023C4.13368 9.32357 4.0245 8.97698 3.75936 8.776L0.676038 6.43879C0.0790733 5.98628 0.397231 5.03438 1.14631 5.03176L5.00936 5.01829C5.3419 5.01713 5.63743 4.80605 5.74641 4.49187L7.0135 0.838872C7.25901 0.131094 8.26274 0.139024 8.49703 0.850593L9.70562 4.5213C9.80947 4.83671 10.101 5.05232 10.433 5.05927L14.3003 5.14021C15.0489 5.15588 15.3506 6.11261 14.7464 6.5549L11.6269 8.83833C11.3585 9.03481 11.2435 9.37946 11.3402 9.69775L12.4625 13.3924Z"
                              fill="#FFC100"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M12.4625 13.3924C12.6803 14.1094 11.8634 14.6933 11.2555 14.2552L8.1207 11.9962C7.85115 11.802 7.48836 11.799 7.21565 11.9888L4.03916 14.1993C3.42394 14.6274 2.61668 14.0297 2.84664 13.3163L4.03161 9.64023C4.13368 9.32357 4.0245 8.97698 3.75936 8.776L0.676038 6.43879C0.0790733 5.98628 0.397231 5.03438 1.14631 5.03176L5.00936 5.01829C5.3419 5.01713 5.63743 4.80605 5.74641 4.49187L7.0135 0.838872C7.25901 0.131094 8.26274 0.139024 8.49703 0.850593L9.70562 4.5213C9.80947 4.83671 10.101 5.05232 10.433 5.05927L14.3003 5.14021C15.0489 5.15588 15.3506 6.11261 14.7464 6.5549L11.6269 8.83833C11.3585 9.03481 11.2435 9.37946 11.3402 9.69775L12.4625 13.3924Z"
                              fill="#FFC100"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M12.4625 13.3924C12.6803 14.1094 11.8634 14.6933 11.2555 14.2552L8.1207 11.9962C7.85115 11.802 7.48836 11.799 7.21565 11.9888L4.03916 14.1993C3.42394 14.6274 2.61668 14.0297 2.84664 13.3163L4.03161 9.64023C4.13368 9.32357 4.0245 8.97698 3.75936 8.776L0.676038 6.43879C0.0790733 5.98628 0.397231 5.03438 1.14631 5.03176L5.00936 5.01829C5.3419 5.01713 5.63743 4.80605 5.74641 4.49187L7.0135 0.838872C7.25901 0.131094 8.26274 0.139024 8.49703 0.850593L9.70562 4.5213C9.80947 4.83671 10.101 5.05232 10.433 5.05927L14.3003 5.14021C15.0489 5.15588 15.3506 6.11261 14.7464 6.5549L11.6269 8.83833C11.3585 9.03481 11.2435 9.37946 11.3402 9.69775L12.4625 13.3924Z"
                              fill="#FFC100"
                            />
                          </svg>
                        </div>
                        <p className="mb-4 stretch text-white text-[14px] font-normal leading-[24px] font-inter">
                          {testimonial.testimonial}
                        </p>
                        <h3 className="text-white text-[12px] font-bold leading-[28px] font-inter">
                          {testimonial.name}
                        </h3>
                        <p className="text-[10px]">{testimonial.role}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Previous & Next Buttons */}
              {/* <CarouselPrevious onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)} />
        <CarouselNext onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)} /> */}

              {/* Dot Pagination */}
              {/* <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div> */}

              {/* Pagination Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-black scale-125"
                        : "bg-gray-300"
                    }`}
                  ></span>
                  // <button onClick={() => api?.scrollTo(current - 1)} className=" px-4 py-2 ">Previous</button>
                ))}
              </div>

              {/* <div className="flex justify-between gap-4 w-full mt-4">
          
          <button onClick={() => api?.scrollTo(current - 1)} className=" px-4 py-2 ">Previous</button>
          
          <button onClick={() => api?.scrollTo(current + 1)} className="px-4 py-2">Next</button>
          
        </div> */}
            </Carousel>
          </div>
          {/* <div>pagination</div> */}
        </div>

        {/* Right Section */}
        <div className="mt-8">
          <h2 className="text-[24px] font-semibold leading-[32px] text-[#252B37] mb-[30px]">
            Send us a message
          </h2>
          <form className=" relative space-y-4 p-6 rounded-[16px] bg-white">
            {/* <div className="absolute -top-[100px] right-[0px] w-[200px] h-[260px]  rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div> */}
            {/* Name Field */}
            <div>
              <label className="block text-[#252B37] text-sm font-medium leading-5">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="flex items-center gap-2 px-4 py-3 self-stretch mt-1 placeholder:text-[14px] w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex items-center gap-2 px-4 py-3 self-stretch mt-1 placeholder:text-[14px] w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <div className="flex items-center gap-2 px-4 py-3 self-stretch mt-1  w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <select className="border-r-0 rounded-l-md placeholder:text-[14px] border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                  <option>US</option>
                  <option>IN</option>
                  <option>UK</option>
                </select>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="flex-1 block w-full placeholder:text-[14px] border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How can we help?
              </label>
              <textarea
                placeholder="Tell us a little about the project..."
                className="flex items-center gap-2 placeholder:text-[14px] px-4 py-3 resize-none self-stretch mt-1 h-[128px] w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              onClick={handleClick}
              className={`group relative mt-4 w-full rounded-[36px] border border-[#207C97] 
                   text-white flex p-[12px_16px] justify-center items-center gap-1 self-stretch font-inter text-sm font-medium leading-[20px] 
                   overflow-hidden transition-colors duration-300 
                   ${
                     isClicked
                       ? "bg-[#ADD8E6] border-[#87CEEB]"
                       : "bg-[#717680]"
                   }`}
            >
              <div className="flex gap-1 items-center relative z-10">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#207C97]">
                  Get Started Today
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
