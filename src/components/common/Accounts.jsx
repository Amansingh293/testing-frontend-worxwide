import React from "react";
import accounts from "@/assets/Accounts.png";

const Accounts = ({className}) => {
  return (
    <img
      src={accounts}
      alt="accounts"
      className={" " + className}
    />
  );
};

export default Accounts;
