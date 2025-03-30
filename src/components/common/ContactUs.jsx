import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import upperleftfirst from "@/assets/upperleftfirst.png";
import upperleftsecond from "@/assets/upperleftsecond.png";
import bottomrightfirst from "@/assets/bottomrightfirst.png";
import bottomrightsecond from "@/assets/bottomrightsecond.png";
import avatar from "@/assets/Avatar.png";
import avatar1 from "@/assets/Avatar1.png";
import avatar2 from "@/assets/Avatar2.png";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan anytime in the settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel anytime, and your subscription will not renew.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add custom information to your invoices in the billing section.",
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or annually, depending on the plan you choose.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can update your email address in the account settings.",
  },
];

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-16 bg-white rounded-[32px] font-inter  pb-12">
      <div className="py-[48px]    relative">
        <div className=" py-12 flex flex-col gap-5 items-center">
          <h2 className="mb-2 text-[#252B37] text-center text-[30px] font-inter font-medium leading-[38px]">
            Frequently asked questions
          </h2>
          <p className="mb-[64px] text-center text-[16px] font-inter font-normal leading-[24px]">
            Everything you need to know about the product and billing.
          </p>
          <Accordion type="multiple" className="space-y-4 w-[668px]">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="">
                <AccordionTrigger
                  onClick={() => handleToggle(index)}
                  className="flex justify-between !no-underline items-center w-full pt-6 pb-3 text-left text-gray-800 font-medium after:hidden relative" // <-- Hides default arrow
                >
                  <span className="no-underline font-semibold">
                    {faq.question}
                  </span>
                  <span className="ml-auto absolute right-0 z-20 bg-white text-xl">
                    {openIndex === index ? (
                      <span className="text-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M8 12.8906H16M22 12.8906C22 18.4135 17.5228 22.8906 12 22.8906C6.47715 22.8906 2 18.4135 2 12.8906C2 7.36778 6.47715 2.89062 12 2.89062C17.5228 2.89062 22 7.36778 22 12.8906Z"
                            stroke="#207C97"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M12 8.89062V16.8906M8 12.8906H16M22 12.8906C22 18.4135 17.5228 22.8906 12 22.8906C6.47715 22.8906 2 18.4135 2 12.8906C2 7.36778 6.47715 2.89062 12 2.89062C17.5228 2.89062 22 7.36778 22 12.8906Z"
                            stroke="#207C97"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-4 text-[14px] font-inter font-normal leading-[24px] text-[#535862]">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <img
          src={upperleftfirst}
          alt="upperleftfirst"
          className="absolute left-[33px] top-0 "
        />
        <img
          src={upperleftsecond}
          alt="upperleftsecond"
          className="absolute top-[75px]"
        />
        <img
          src={bottomrightfirst}
          alt="bottomrightfirst"
          className="absolute bottom-0 right-[65px] "
        />
        <img
          src={bottomrightsecond}
          alt="bottomrightsecond"
          className="absolute bottom-[91px] right-0"
        />
      </div>

      <div className="flex p-8 flex-col gap-8 items-center">
        <div className="relative">
          <img src={avatar} alt="avatar" className="relative z-10" />
          <img
            src={avatar1}
            alt="avatar1"
            className="absolute top-2 right-10 "
          />
          <img src={avatar2} alt="avatar2" className="absolute top-2 left-10" />
        </div>

        <div className="flex flex-col gap-3 items-center">
          <p className="text-[#252B37] text-[20px] leading-[30px]">
            Still have questions?
          </p>
          <p className="text-[#535862] leading-[24px] text-[16px]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <div className="flex justify-center">
          <CustomButton
            variant="secondary"
            text={"Get in touch"}
            onClick={() => navigate("/login")}
            customClass={"rounded-[6px]"}
          />{" "}
        </div>
      </div>
    </div>
  );
}
