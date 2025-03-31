import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frame3.png";
import Frame4 from "../../assets/Frame4.png";
import Frame5 from "../../assets/Frame5.png";
import Frame6 from "../../assets/Frame6.png";
import Footer from "@/components/common/Footer";
import CustomButtonCorrect from "../common/CustomButtonCorrect";
import TeamSection from "../common/TeamSection";
import { fetchBlogs } from "@/services/blogApis";
import { toast } from "sonner";
const API_BASE_URL = import.meta.env.VITE_STRAPI_BASE_URL;

const BlogSection = () => {
  const blogs = [
    {
      title: "5 Strategies to Generate High-Quality B2B Leads",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      description:
        "Discover effective strategies to generate high-quality B2B leads and close deals faster.",
      link: "/blog/1",
      image: Frame1,
    },
    {
      title: "5 Key Strategies for Attracting Premium B2B Leads",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      description:
        "Learn how to attract premium B2B leads and maximize your conversion rates.",
      link: "/blog/2",
      image: Frame2,
    },
    {
      title: "Effective Sales Automation Tactics",
      author: "Phoenix Baker",
      date: "20 Feb 2022",
      description:
        "Boost your sales with proven automation tactics and AI-powered insights.",
      link: "/blog/3",
      image: Frame3,
    },
    {
      title: "Mastering Account-Based Selling",
      author: "Phoenix Baker",
      date: "25 Mar 2022",
      description:
        "Explore the benefits of account-based selling and how to implement it.",
      link: "/blog/4",
      image: Frame4,
    },
    {
      title: "Email Campaigns that Convert",
      author: "Phoenix Baker",
      date: "15 Apr 2022",
      description:
        "Learn how to create engaging email campaigns that drive conversions.",
      link: "/blog/5",
      image: Frame5,
    },
    {
      title: "Data-Driven Lead Generation",
      author: "Phoenix Baker",
      date: "10 May 2022",
      description:
        "Use data and insights to generate high-quality leads effectively.",
      link: "/blog/6",
      image: Frame6,
    },
  ]; 
  const navigate = useNavigate();

  const [blogsData, setBlogsData] = useState();

  const getBlogsSales = async () => {
    try {
      const response = await fetchBlogs();

      if (response?.data != undefined) {
        setBlogsData(response?.data);
      } else {
        toast.error("Something went wrong ! Please try again later !");
      }
      console.log(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlogsSales();
  }, []);

  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Sales Strategies and Insights | Blog</title>
        <meta
          name="description"
          content="Explore expert sales strategies, lead generation tips, and automation tactics to close deals faster."
        />
        <meta
          property="og:title"
          content="Sales Strategies and Insights | Blog"
        />
        <meta
          property="og:description"
          content="Explore expert sales strategies, lead generation tips, and automation tactics to close deals faster."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      {/* ✅ Blog Section */}
      <section className="py-12 px-6 lg:px-20 max-w-6xl mx-auto bg-white font-inter">
        <header className="text-center mb-20">
          <h1 className="text-3xl font-bold text-gray-800">
            Insights to Elevate Your Sales Game
          </h1>
          <p className="text-gray-600 mt-4 mb-4">
            Discover strategies, trends, and success stories to help you close
            deals faster and smarter.
          </p>
          <CustomButtonCorrect
            text="Get started for free"
            onClick={() => navigate("/login")}
          />
        </header>

        {/* ✅ Blog Filters */}
        <div className="mb-8 space-x-4 flex-wrap">
          <h2 className="px-4 py-2 mb-4 font-bold">Blog Categories</h2>
          {[
            "All",
            "Recents",
            "Sales Automation",
            "Lead Generation",
            "Email Campaigns",
            "Account-Based Selling",
          ].map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full border ${
                filter === "All"
                  ? "bg-[#207C97] text-white"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              } transition duration-300`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ✅ Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {blogsData?.map((blog, index) => {
            return (
              <Link to={`/blogdetail/${blog?.slug}`} key={index}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition duration-300 p-3 relative z-0">
                  <img
                    src={`${API_BASE_URL}${blog?.thumbnail?.url}`}
                    alt={blog.title}
                    className="h-[290px] w-[528px] object-cover overflow-hidden  rounded-lg"
                    loading="lazy"
                  />
                  <h1 className="absolute top-20 text-[18px] font-semibold leading-[28px] left-14 z-10 text-white w-40">
                    {blog.title}
                  </h1>
                  <div className="mt-5 flex flex-col w-full gap-1">
                    <p className="text-brand font-inter text-base font-medium leading-6">
                      {blog?.author?.name} • {blog?.author?.publishedAt}
                    </p>
                    <p className="mt-3 text-[#535862] font-inter text-[16px] font-normal leading-6">
                      {blog?.seoMetaDescription}
                    </p>
                    <p className="mt-4">
                      <span className="text-brand font-inter text-sm font-medium leading-5 flex items-center gap-2">
                        Explore our blog{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                            fill="#207C97"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ✅ CTA Section */}
      <div className="mt-36 w-[1000px] mx-auto">
        <TeamSection
          title="Start Your Free Trial Today!"
          description="Transform your sales process with AI-powered automation and insights."
          buttonText="Try for Free"
          onButtonClick={() => navigate("/login")}
        />
      </div>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default BlogSection;
