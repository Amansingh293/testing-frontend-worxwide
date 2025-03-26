import React from "react";

const CallToAction = () => {
  
  return (
    <div className="bg-white">
      {/* Call-to-Action Section */}
      <section className="rounded-[20px] bg-[#207C97] w-[1100px] h-[280px] flex-shrink-0 mx-auto md:w-[90%] lg:w-[80%] py-12 md:py-16 px-6 relative"
    //   "bg-teal-600 text-white py-12 md:py-16 px-6 rounded-lg max-w-6xl mx-auto relative"
      >
        <div className="text-center">
          <h2 className="text-white text-center font-inter text-[30px] font-medium leading-[38px] sm:text-[32px]">
            Want to see Salesworx in action?
          </h2>
          <p className="text-white text-center font-inter text-[16px] font-normal leading-[24px]">
            Schedule a demo today and discover the future of sales automation!
          </p>
          <button className="mt-6 bg-white text-teal-600 font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
            Book a demo →
          </button>
        </div>
        {/* <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-teal-300 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-teal-300 opacity-20"></div> */}
         {/* Top-left Decorative Circle */}
  {/* <div className="absolute -top-12 -left-12 w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-teal-300 opacity-20"></div> */}

{/* Bottom-right Decorative Circle */}
{/* <div className="absolute -bottom-12 -right-12 w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-teal-300 opacity-20"></div> */}
{/* Top-left Decorative Circle */}
<div className="absolute -top-14 -left-14 w-48 h-48 md:w-40 md:h-40 rounded-full border-8 border-white opacity-20"></div>

{/* Bottom-right Decorative Circle */}
<div className="absolute -bottom-14 -right-14 w-48 h-48 md:w-40 md:h-40 rounded-full border-8 border-white"></div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-12 px-6 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 border-b-2">
          {/* Column 1 */}
          <div>
            <p className="text-gray-600">
              <strong>Salesworx</strong>, crafted by Worxwide Consulting, empowers modern sales teams.
            </p>
            <a
              href="#"
              className="text-teal-600 hover:underline block mt-4"
            >
              Learn more about Worxwide Consulting.
            </a>
            <div className="mt-6">
              <p className="text-gray-600">Subscribe to the get latest updates</p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none w-full"
                />
                <button className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-800">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-800">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Hyperpersonalized Outreach
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Omnichannel Sequencing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Sales Intelligence
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Account Based Selling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Lead Scoring
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-800 ">Help</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© Copyright 2024, All Rights Reserved by Salesworx.ai</p>
        </div>
      </footer>
    </div>
  );
};

export default CallToAction;
