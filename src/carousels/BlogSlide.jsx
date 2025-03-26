import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { memo, useEffect, useState } from "react";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Frame4 from "../assets/Frame4.png";
import Frame5 from "../assets/Frame5.png";
import Frame6 from "../assets/Frame6.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "5 Strategies to Generate High-Quality B2B Leads",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
    link: "/blog/1",
    image: Frame1,
  },
  {
    title: "5 Key Strategies for Attracting Premium B2B Leads",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
    link: "/blog/2",
    image: Frame2,
  },
  {
    title: "5 Strategies to Generate High-Quality B2B Leads",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
    link: "/blog/1",
    image: Frame3,
  },
  {
    title: "5 Strategies to Generate High-Quality B2B Leads",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
    link: "/blog/1",
    image: Frame4,
  },
  {
    title: "5 Strategies to Generate High-Quality B2B Leads",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
    link: "/blog/1",
    image: Frame5,
  },
  {
    title: "5 Key Strategies for Attracting Premium B2B Leads",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
    link: "/blog/2",
    image: Frame6,
  },
];

const BlogSlide = memo(({ text, goto, classname, buttonClass }) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const handleClick = () => {
    if (location.pathname === "/") {
      // If on HomePage -> Go to Blog Detail Page
      navigate(`/blogdetail`);
    } else if (location.pathname === "/blogdetail") {
      // If on Blog Detail Page -> Go to Blog Section
      navigate("/blog");
    } else {
      navigate("/whitepaper");
    }
  };
  return (
    <div
      className={`flex flex-col items-${classname} text-center w-full p-6 mx-auto`}
    >
      <h2
        className={`mb-[64px] text-[#252B37] text-left text-[30px] font-inter font-medium leading-[38px]`}
      >
        {text}
      </h2>
      <Carousel setApi={setApi} className="w-screen ">
        <CarouselContent className="flex ml-28 h-full">
          {blogs.map((blog, idx) => (
            <CarouselItem
              key={idx}
              className="sm:basis-2/5 basis-full flex justify-center h-fit"
            >
              <Card
                onClick={handleClick}
                className="mt-5 mb-5 mr-3  w-auto  p-2 bg-white flex flex-col items-start cursor-pointer rounded-[10px] hover:shadow-[0_6px_16px_0_rgba(0,0,0,0.15)] transition duration-300 overflow-visible"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full object-cover p-2 "
                />
                <div className="flex flex-col items-start gap-2 mt-2 p-2">
                  <p className="mt-2 stretch text-[#252B37] text-left font-inter text-[16px] font-semibold leading-[20px]">
                    {blog.title}
                  </p>
                  <p className="text-[#535862] font-inter text-[14px] font-normal leading-[20px]">
                    Design Systems
                  </p>
                  <a
                    href={blog.link}
                    className="mt-2 text-brand font-inter text-[14px] text-base font-medium leading-6"
                  >
                    Explore our blog →
                  </a>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation buttons positioned below the testimonials */}
      </Carousel>
      <div
        className={
          "flex justify-between gap-4 w-full mt-4 -ml-20 " + buttonClass
        }
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
            disabled={current === blogs.length - 1}
            className={`px-4 py-2 transition-colors ${
              current === blogs.length - 1
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
              current === blogs.length - 1
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
});

export default BlogSlide;
