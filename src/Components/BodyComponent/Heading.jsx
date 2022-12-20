import React from "react";

const Heading = ({ text1, text2, className, brNone }) => {
  return (
    <h2
      className={`lg:text-5xl md:text-4xl text-2xl font-medium capitalize lg:w-[70%] ${className}`}
    >
      {text1} {!brNone && <br />}
      <span className="capitalize text-primary sm:font-normal font-bold">
        {text2}
      </span>
    </h2>
  );
};

export default Heading;
