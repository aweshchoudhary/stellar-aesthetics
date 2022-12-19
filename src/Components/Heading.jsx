import React from "react";

const Heading = ({ text1, text2, className, brNone }) => {
  return (
    <h2 className={`text-5xl font-medium capitalize w-[70%] ${className}`}>
      {text1} {!brNone && <br />}
      <span className="capitalize text-primary">{text2}</span>
    </h2>
  );
};

export default Heading;
