import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frame3.png";
import Frame4 from "../../assets/Frame4.png";
import Frame5 from "../../assets/Frame5.png";
import Frame6 from "../../assets/Frame6.png";

import Footer from "@/components/common/Footer";
import Section from "@/components/common/Section";
import TeamSection from "../common/TeamSection";
import CustomButtonCorrect from "../common/CustomButtonCorrect";
import { fetchWhitePapers } from "@/services/whitepaperApis";
import { formatDate } from "@/utils";
const API_BASE_URL = import.meta.env.VITE_STRAPI_BASE_URL;

const WhitepapperSection = () => {
  const [whitepapersData, setWhitepapersData] = useState([]);
  const navigate = useNavigate();

  const getWhitepapers = async () => {
    try {
      const response = await fetchWhitePapers();

      if (response?.data != undefined) {
        setWhitepapersData(response?.data);
        console.log(whitepapersData);
      } else {
        toast.error("Something went wrong ! Please try again later !");
      }
      console.log(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWhitepapers();
  }, []);

  return (
    <>
      {/* ✅ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Unlock Insights That Transform Your Business",
          author: {
            "@type": "Person",
            name: "Phoenix Baker",
          },
          datePublished: "2022-01-19",
          dateModified: "2022-01-19",
          publisher: {
            "@type": "Organization",
            name: "YourCompany",
          },
        })}
      </script>

      <section className="py-12 px-6 lg:px-20 max-w-6xl mx-auto ">
        <header className="text-center mb-20">
          <h1 className="text-3xl font-bold text-gray-800">
            Unlock Insights That Transform Your Business
          </h1>
          <p className="text-gray-600 mt-4 mb-4">
            Explore our in-depth whitepapers to uncover cutting-edge strategies
            and actionable insights tailored for your success.
          </p>
          <CustomButtonCorrect
            text="Get started for free"
            onClick={() => navigate("/login")}
          />
        </header>

        {/* ✅ whitepaper Filter Buttons */}
        <div className="mb-8 flex-wrap space-x-4">
          <h2 className="px-4 py-2 mb-4 font-bold">Whitepapers</h2>
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
              aria-label={`Filter by ${filter}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ✅ whitepaper Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {whitepapersData?.map((whitepaper, index) => (
            <Link to={`/Whitepaperdetail/${whitepaper?.slug}`} key={index}>
              <article
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
                aria-label={`Read more about ${whitepaper.title}`}
              >
                <img
                  src={`${API_BASE_URL}${whitepaper?.thumbnailImage?.url}`}
                  alt={whitepaper.title}
                  className="w-full h-58 object-cover p-2"
                  loading="lazy"
                />
                <div className="mt-2 p-6">
                  <p className="text-brand font-inter text-base font-medium leading-6">
                    {whitepaper.author?.name} •{" "}
                    {formatDate(whitepaper.publishedAt)}
                  </p>
                  {/* <h3 className="mt-2 text-xl font-semibold text-gray-800">
                    {whitepaper.title}
                  </h3> */}
                  <p className="mt-2 text-[#535862] font-inter text-[16px] font-normal leading-6">
                    {whitepaper.seoDescription}
                  </p>
                  <p className="mt-4">
                    <Link
                      to={whitepaper.link}
                      className="text-brand font-inter text-[14px] font-medium leading-6"
                      aria-label={`Read more about ${whitepaper.title}`}
                    >
                      Explore our Blog →
                    </Link>
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ CTA Section */}
      <div className="mt-36 w-[1000px] mx-auto">
        <TeamSection
          title="Start Your Free Trial Today!"
          description="Transform your sales process with AI-powered automation and insights."
          buttonText="Try for Free"
          onButtonClick={() => console.log("CTA Button Clicked")}
        />
      </div>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default WhitepapperSection;
