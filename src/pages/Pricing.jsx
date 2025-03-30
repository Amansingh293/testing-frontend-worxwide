import { motion } from "framer-motion";
import FAQ from "../components/common/Faq";
import Footer from "../components/common/Footer";
import SalesGrowthSection from "@/components/pricing/SalesGrowthSection";
import SavingsWithSalesworx from "@/components/pricingPageComponents/SavingsWithSalesworx";
import StartEmail from "@/components/pricingPageComponents/StartEmail";
import StoppingSales from "@/components/pricingPageComponents/StoppingSales";
import CostToInclude from "@/components/pricingPageComponents/CostToInclude";
import Testimonials from "@/carousels/Testimonials";
import TeamSection from "@/components/common/TeamSection";

const Pricing = () => {
  return (
    <>
      <CostToInclude />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col w-4/5 items-center mx-auto gap-32 mt-5 max-w-[1200px]"
      >
        {/* Top Heading */}

        {/* Pricing Section */}
        <SavingsWithSalesworx />

        <StartEmail />

        <SalesGrowthSection />

        <StoppingSales />

        <Testimonials
          buttonClasses={"xl:-ml-[70px] "}
          heading={
            "Discover How Our Tool is Helping Teams Save Time and Boost Performance"
          }
          headingWidth={"w-[666px]"}
          cardMargin={"xl:ml-32 2xl:ml-[310px]"}
        />

        <FAQ />

        <TeamSection
          title="AI SDR in Action: Book a Free Demo"
          description="Transform your sales process with AI-powered SDR"
          buttonText="Book a Demo"
          onButtonClick={"handleClick"}
        />
      </motion.div>
      <Footer />
    </>
  );
};

export default Pricing;
