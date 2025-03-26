import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BiLoaderCircle className="loader-spin text-7xl text-[#207C97] font-bold inline-block" />
      </div>
  );
};

export default Loader;
