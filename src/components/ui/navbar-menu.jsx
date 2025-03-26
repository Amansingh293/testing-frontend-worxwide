import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// MenuItem Component
export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} 
    // onMouseLeave={() => setActive(null)}
    className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`relative flex cursor-pointer text-black-500 transition-colors duration-300
          hover:text-[#207C97] focus:text-[#207C97] active:text-[#207C97]`}
      >
        {item}
        <span className={`absolute left-0 -bottom-2 w-0 h-0.5 bg-[#207C97] transition-all duration-300
          ${active === item ? "w-full" : "group-hover:w-full group-focus:w-full group-active:w-full"}`}
        ></span>
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none" className="transition-transform duration-100 mt-2 ml-2"
        animate={{ rotate: active ? 180 : 0 }}>
  <path d="M10.757 0.295078L6.16699 4.87508L1.57699 0.295079L0.166992 1.70508L6.16699 7.70508L12.167 1.70508L10.757 0.295078Z" fill="#535862"/>
</motion.svg>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4 flex">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};


// Menu Component
export const Menu = ({ setActive, children }) => {
  return (
    <div
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:border-white/[0.2] bg-white shadow-input flex items-center justify-between space-x-8 px-8 py-4"
    >
      {children}
    </div>
  );
};

// ProductItem Component
export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        style={{ width: "440px", height: "140px" }}
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// HoveredLink Component
export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="relative text-black-500 group transition-colors duration-300 hover:text-[#207C97] focus:text-[#207C97] active:text-[#207C97]"
    >
      {children}
      <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-[#207C97] transition-all duration-300 
                      group-hover:w-full group-focus:w-full group-active:w-full"></span></Link>
  );
};
