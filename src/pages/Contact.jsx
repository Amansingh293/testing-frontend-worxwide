import ContactForm from "../components/contact/ContactForm";
import Reachout from "../components/contact/Reachout";
import FAQ from "../components/common/Faq";
import Section from "../components/common/Section";
import Footer from "../components/common/Footer";
import TeamSection from "@/components/common/TeamSection";

const Contact = () => {
  return (
    <>
      <div className=" space-y-16 md:space-y-24 lg:space-y-32 xl:mx-36 2xl:mx-80">
        <ContactForm />
        <Reachout />
        <FAQ />
        <TeamSection
          title="Want to see Salesworx in action?"
          description="Schedule a demo today and discover the future of sales automation!"
          buttonText="Book a demo"
          onButtonClick={() => console.log("Free Trial Started")}
        />

        {/* <CallToAction /> */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
