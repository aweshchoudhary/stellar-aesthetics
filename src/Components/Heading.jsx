import React from "react";

const Heading = ({ text1, text2 }) => {
  return (
    <h2 className="text-5xl font-medium capitalize">
      {text1} <span className="capitalize text-primary">{text2}</span>
    </h2>
  );
};

export default Heading;
