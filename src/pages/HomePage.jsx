import { Helmet } from "react-helmet";
import HeroSection from "../components/heroSectionComponents/HeroSection";
import IntegrateTools from "@/carousels/IntegrateTools";
import Testimonials from "@/carousels/Testimonials";
import SuccessStory from "@/carousels/SuccessStory";
import BlogSlide from "@/carousels/BlogSlide";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import SalesIntelligence from "@/components/featureSection/SalesIntelligence";
import { lazy, Suspense, useEffect } from "react";
import FutureSection from "@/components/futureSectionComponents/FutureSection";
import JoinPartnerProgram from "@/components/JoinPartnerProgram";
import TrialSection from "@/components/TrialSection";
import ChatbotExanding from "@/components/PersonalizeEmailChatbot";
import Loader from "@/components/common/Loader";

const CalendlyHomePage = lazy(() => import("@/components/CalendlyHomePage"));

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* ✅ SEO Metadata */}
      {/* <Helmet>
        Primary Meta Tags
        <title>Boost Your Sales with AI-Driven Insights | YourCompany</title>
        <meta
          name="description"
          content="Discover how AI-driven sales insights can elevate your business. Learn from satisfied customers, explore success stories, and start your free trial today."
        />
        <meta
          name="keywords"
          content="AI Sales, Sales Intelligence, CRM, AI SDR, Business Insights"
        />
        <meta name="author" content="YourCompany" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourcompany.com" />
        <meta
          property="og:title"
          content="Boost Your Sales with AI-Driven Insights | YourCompany"
        />
        <meta
          property="og:description"
          content="Discover how AI-driven sales insights can elevate your business."
        />
        <meta property="og:image" content="/assets/hero-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourcompany.com" />
        <meta
          property="twitter:title"
          content="Boost Your Sales with AI-Driven Insights | YourCompany"
        />
        <meta
          property="twitter:description"
          content="Discover how AI-driven sales insights can elevate your business."
        />
        <meta property="twitter:image" content="/assets/hero-image.jpg" />

        <link rel="canonical" href="https://yourcompany.com" />
      </Helmet> */}

      {/* ✅ Schema Markup for SEO */}
      {/* <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Boost Your Sales with AI-Driven Insights",
          "author": {
            "@type": "Person",
            "name": "Phoenix Baker",
          },
          "datePublished": "2022-01-19",
          "dateModified": "2022-01-19",
          "publisher": {
            "@type": "Organization",
            "name": "YourCompany",
          },
        })}
      </script> */}

      {/* ✅ Page Content */}
      <HeroSection />
      <div className="space-y-[150px] w-full xl:px-32 2xl:px-80 mt-36">
        <SalesIntelligence />
        <FutureSection />
        <IntegrateTools />
        <Testimonials
          buttonClasses="xl:-ml-12 2xl:-ml-4"
          heading="Hear from Our Satisfied Customers"
          cardMargin={"xl:ml-32 2xl:ml-[310px]"}
          />
        <SuccessStory className="-ml-[390px] -mr-[170px]" />
        <Suspense fallback={<Loader />}>
          <CalendlyHomePage />
        </Suspense>
        <TrialSection
          text="Free Trial: Transform Your Sales Pipeline with AI SDRs"
          text2="A limited-time trial to let potential customers experience the product firsthand."
        />
        <BlogSlide
          text="Insights to Elevate Your Sales Game"
          goto="blogdetail"
          classname="center"
          buttonClass="xl:-ml-14"
          customMarginCard={"2xl:ml-72"}
          />
        <ContactUs />
        <JoinPartnerProgram />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
