import React from "react";
import "./styles.css";

const DropEffect = ({ icon , className}) => {
  return (
    <div className={"flex relative justify-center items-center "+className}>
      <div className="circle first"></div>
      <div className="circle second"></div>
      <div className="absolute z-10 flex justify-center items-center">
        {icon}
      </div>
    </div>
  );
};

export default DropEffect;
