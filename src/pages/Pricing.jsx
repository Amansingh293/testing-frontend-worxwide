import { useState } from "react";
import FAQ from "../components/common/Faq";
import Footer from "../components/common/Footer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SalesGrowthSection from "@/components/pricing/Sales";
import Section from "@/components/common/Section";
import Testimonials from "@/carousels/Testimonials";

import SavingsWithSalesworx from "@/components/pricingPageComponents/SavingsWithSalesworx";
import StartEmail from "@/components/pricingPageComponents/StartEmail";
import StoppingSales from "@/components/pricingPageComponents/StoppingSales";
import CostToInclude from "@/components/pricingPageComponents/CostToInclude";
import TeamSection from "@/components/common/TeamSection";

const Pricing = () => {
  return (
    <>
      <CostToInclude />
      <div className=" flex flex-col w-4/5 items-center mx-auto gap-32 mt-5">
        {/* Top Heading */}

        {/* Pricing Section */}

        <SavingsWithSalesworx />

        <StartEmail />

        <SalesGrowthSection />

        <StoppingSales />

        <Testimonials
          buttonClasses={"-ml-[70px]"}
          heading={
            "Discover How Our Tool is Helping Teams Save Time and Boost Performance"
          }
          headingWidth={"w-[666px]"}
        />

        <FAQ />

        <TeamSection
          title="AI SDR in Action: Book a Free Demo"
          description="Transform your sales process with AI-powered SDR"
          buttonText="Book a Demo"
          onButtonClick={"handleClick"}
        />
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
