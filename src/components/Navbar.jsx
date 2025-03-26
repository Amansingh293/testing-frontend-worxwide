import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookDemo from "./BookDemo";
import SvgLogo from "./SvgLogo";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Videoplayer from "../assets/Videoplayer.png"

const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <nav
      className="w-full bg-white sticky top-0 z-50 transition-all duration-300">

      <Menu setActive={setActive}>
        <div className="container mx-auto px-4 flex items-center justify-between md:flex space-x-6">

          <Link to="/"><div className="">
            <SvgLogo /></div></Link>
          <div className="flex items-center justify-between gap-[34px]">
            <HoveredLink to="/features">Features</HoveredLink>
            <HoveredLink to="/pricing">Pricing</HoveredLink>
            <MenuItem setActive={setActive} active={active} item="Insights">
              {/* Dropdown or additional content for "Insights" */}
              <div className="flex">
                <div className="w-[250px] h-[250px] p-4">
                  {/* <h4 className="text-sm font-medium text-gray-800 mb-3">Explore</h4> */}
                  <ul className="space-y-6">
                    <li className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5V19.5Z" stroke="#207C97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div className="flex flex-col gap-4">
                        <Link
                          to="/blog"
                          className="text-[#181D27] font-inter text-[16px] font-semibold leading-[24px] hover:text-blue-500"
                        >
                          Blog
                        </Link>
                        <p className="text-[#717680] font-inter text-[14px] font-normal leading-[20px]">The latest industry news, updates and info.</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 40" fill="none">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#207C97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div className="flex flex-col gap-4">
                        <Link
                          to="/whitepaper"
                          className="text-[#181D27] font-inter text-[16px] font-semibold leading-[24px] hover:text-blue-500"
                        >
                          Whitepaper
                        </Link>
                        <p className="text-[#717680] font-inter text-[14px] font-normal leading-[20px]">Learn how our customers are making big changes.</p>
                      </div>
                    </li>
                  </ul>
                </div>


                <div className="w-[300px] flex flex-col justify-center">
                  <img
                    src={Videoplayer}
                    className="w-[240px] h-[136x] rounded-[6px] shadow"
                  // autoPlay
                  // loop
                  // muted
                  />
                  <h1 className="mt-[16px] text-[#252B37] font-inter text-[16px] font-semibold leading-[24px] text-left">How to get started</h1>
                  <p className="text-[#414651] font-inter text-[14px] font-normal leading-[20px]">Jump right in — get an overview of the basics and get started on building straight away.</p>
                </div>
              </div>
            </MenuItem>

            {/* <MenuItem setActive={setActive} active={active} item="Products">
              <div className="space-y-2 w-full">
                <ProductItem
                  title="Product 1"
                  description="Description of product 1."
                  href="/product1"
                  src="https://via.placeholder.com/140x70"
                />
                <ProductItem
                  title="Product 2"
                  description="Description of product 2."
                  href="/product2"
                  src="https://via.placeholder.com/140x70"
                />
              </div>
            </MenuItem> */}
            <HoveredLink to="/contact">Contact Us</HoveredLink>
          </div>
          {/* <li className="group">
            <Link
              to="contact"
              className="relative hover:text-blue-500"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li> */}
          {/* </ul> */}
          <div className="flex justify-end gap-4">
            <Link to="login"><button className="rounded-[36px] text-[#293056] text-sm font-medium leading-[20px] font-inter hover:bg-gray-100 px-[12px] py-[14px]">Get Started</button></Link>
            <BookDemo />
          </div>
        </div>
      </Menu>
    </nav>
  );
};

export default Navbar;

