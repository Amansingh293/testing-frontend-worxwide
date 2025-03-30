import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { memo, useEffect, useState } from "react";
import Rectangle from "@/assets/Rectangle.png";
const testimonials = [
  {
    name: "Anita Desai",
    role: "Sales Manager at Innovatech Solutions",
    heading: "2x More Deals with Less Effort",
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

const Testimonials = memo(
  ({ buttonClasses, heading, headingWidth, customClass ,cardMargin}) => {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!api) {
        return;
      }

      setCurrent(api.selectedScrollSnap());

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div
        className={
          "flex flex-col items-center text-center w-full p-6 " + customClass
        }
      >
        <h2
          className={
            "mb-[64px] text-[#000] text-center text-[30px] font-inter font-medium leading-[38px] " +
            headingWidth
          }
        >
          {heading}
        </h2>
        <Carousel setApi={setApi} className="w-screen">
          <CarouselContent
            className={
              "flex h-full gap-x-2 w-[85%] " +
              (cardMargin != null ? cardMargin : "ml-32")
            }
          >
            {testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={idx}
                className=" basis-auto flex justify-center overflow-hidden"
              >
                <Card
                  className="font-inter p-0 relative w-[720px] h-[415px] text-white rounded-[12px] shadow-lg flex justify-center gap-20 items-center bg-cover bg-[#207C97] overflow-hidden"
                  style={{
                    backgroundImage: `url(${Rectangle})`,
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="bottom-[140px] left-[90px] w-32 h-32 rounded-full mb-4 ml-16"
                  />

                  <div className="top-[100px] gap-9 right-8 z-10 w-[400px] flex flex-col text-left p-2">
                    <h1 className="font-bold text-[20px] leading-[30px] italic">
                      2x More Deals with Less Effort.
                    </h1>
                    <p className="mb-4 stretch text-white text-[16px] font-normal leading-[24px]">
                      {testimonial.testimonial}
                    </p>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-[18px] font-bold leading-[28px]">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs leading-[20px] font-normal">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div
          className={`flex justify-between gap-4 w-full mt-4  ${buttonClasses}`}
        >
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={`transition-colors ${
                current === 0
                  ? "text-gray-400"
                  : "text-[#252B37] hover:text-[#207C97]"
              }`}
            >
              <path
                d="M15.8335 9.99935H4.16683M4.16683 9.99935L10.0002 4.16602M4.16683 9.99935L10.0002 15.8327"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <button
              onClick={() => api?.scrollTo(current - 1)}
              disabled={current === 0}
              className={`px-4 py-2 transition-colors ${
                current === 0
                  ? "text-gray-400"
                  : "text-[#252B37] hover:text-[#207C97]"
              }`}
            >
              Previous
            </button>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={() => api?.scrollTo(current + 1)}
              disabled={current === testimonials.length - 1}
              className={`px-4 py-2 transition-colors ${
                current === testimonials.length - 1
                  ? "text-gray-400"
                  : "text-[#252B37] hover:text-[#207C97]"
              }`}
            >
              Next
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={`transition-colors ${
                current === testimonials.length - 1
                  ? "text-gray-400"
                  : "text-[#252B37] hover:text-[#207C97]"
              }`}
            >
              <path
                d="M4.1665 9.99935H15.8332M15.8332 9.99935L9.99984 4.16602M15.8332 9.99935L9.99984 15.8327"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);

export default Testimonials;
