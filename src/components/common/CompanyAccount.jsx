import React from "react";
import companyAccount from "@/assets/companyAccount.png";

const CompanyAccount = ({ className }) => {
  return (
    <img
      src={companyAccount}
      alt="companyAccount"
      className={"w-[450px] h-[398.52px] " + className}
    />
  );
};

export default CompanyAccount;
