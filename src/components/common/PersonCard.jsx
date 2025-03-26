import React from "react";
import person from "@/assets/Person.png";

const PersonCard = ({ className }) => {
  return (
    <img
      src={person}
      alt="person"
      className={"" + className}
    />
  );
};

export default PersonCard;
