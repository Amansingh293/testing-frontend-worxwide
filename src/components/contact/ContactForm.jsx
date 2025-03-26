import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";
import Rectangle from "../../assets/Rectangle.png"
import Salesworx from "../../assets/Salesworx.gif"

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
  const [current, setCurrent] = useState(0)
  // const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

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
;

const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };


  return (
    <div className="relative bg-white w-[1200px] py-10 px-6 lg:px-20">
      <div className="absolute top-[300px] -left-[100px] w-[140px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] "></div>
      <div className="absolute top-[100px] right-[0px] w-[100px] h-[160px]  rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] z-10"></div>
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
              <span className="text-[48px] font-medium leading-[60px] tracking-[-0.96px] text-gray-900">Sales</span>
              <span className="flex flex-col">
                
                <img src={Salesworx} alt="Salesworx" className="w-[60px] h-[59px] " />
              </span>
              <span className="text-[48px] font-medium leading-[60px] tracking-[-0.96px] text-gray-900">Together</span>
            </div>

            <p className="text-base font-normal leading-6 text-gray-600 mt-4">
              Have questions or ready to get started? Reach out to our team—we’re here to help you every step of the way.
            </p>
          </div>

          {/* Carousel/Testimonials */}
          <div className="bg-blue-50 w-[480px] h-[250px] rounded-[14px]">
          <Carousel setApi={(api) => (carouselRef.current = api)} className="w-full">
        <CarouselContent className="flex  h-full">
          {testimonials.map((testimonial, idx) => (
            <CarouselItem key={idx} className="sm:basis-1/1 basis-full flex justify-center overflow-hidden">
              <Card
                className="realtive w-[480px] h-[250px] text-white rounded-lg shadow-lg flex flex-col items-center relative  bg-[#207C97] overflow-hidden"
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
                  className="absolute bottom-[70px] left-[70px] w-[70px] h-[70px] rounded-full mb-4 "
                />
                

                <div className="absolute top-[20px] right-0 z-10 w-[300px] flex flex-col text-left p-2">
                  <div>start</div>
                  <p className="mb-4 stretch text-white text-[14px] font-normal leading-[24px] font-inter">{testimonial.testimonial}</p>
                  <h3 className="text-white text-[18px] font-bold leading-[28px] font-inter">{testimonial.name}</h3>
                  <p className="text-xs">{testimonial.role}</p>
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
              index === currentSlide ? "bg-black scale-125" : "bg-gray-300"
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
          <h2 className="text-[24px] font-semibold leading-[32px] text-[#252B37] mb-[30px]">Send us a message</h2>
          <form className=" relative p-2 space-y-4">
            {/* <div className="absolute -top-[100px] right-[0px] w-[200px] h-[260px]  rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div> */}
            {/* Name Field */}
            <div>
              <label className="block text-[#252B37] text-sm font-medium leading-5">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="flex items-center gap-2 px-4 py-3 self-stretch mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                className="flex items-center gap-2 px-4 py-3 self-stretch mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <div className="flex items-center gap-2 px-4 py-3 self-stretch mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <select
                  className="border-r-0 rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>US</option>
                  <option>IN</option>
                  <option>UK</option>
                </select>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="flex-1 block w-full border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
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
                className="flex items-center gap-2 px-4 py-3 self-stretch mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            {/* <button
              type="submit"
              className="flex p-[12px_16px] justify-center items-center gap-1 self-stretch w-full rounded-[36px] border border-[#207C97] bg-[#717680] text-white font-inter text-sm font-medium leading-[20px] hover:bg-white hover:text-[#207C97] "
            >
              Send Message <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M2 8.98756L14.0265 8.98756L9.35539 4.43159L10.8231 3L18 10L10.8231 17L9.35539 15.5684L14.0265 11.0124L2 11.0124L2 8.98756Z" fill="#207C97"/>
</svg>
            </button> */}


            <button
        onClick={handleClick}
        className={`group relative mt-4 w-full rounded-[36px] border border-[#207C97] 
                   text-white flex p-[12px_16px] justify-center items-center gap-1 self-stretch font-inter text-sm font-medium leading-[20px] 
                   overflow-hidden transition-colors duration-300 
                   ${isClicked ? "bg-[#ADD8E6] border-[#87CEEB]" : "bg-[#717680]"}`}
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
  )
}

export default ContactForm;