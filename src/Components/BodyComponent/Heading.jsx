import React from "react";

const Heading = ({ text1, text2, className, brNone, white }) => {
  return (
    <h2
      className={`${
        white && "text-white "
      }lg:text-5xl md:text-4xl text-2xl font-medium capitalize lg:w-[70%] ${className}`}
    >
      {text1} {!brNone && <br />}
      <span className={`capitalize ${white ? "text-white" : "text-primary"}`}>
        <strong>{text2}</strong>
      </span>
    </h2>
  );
};

export default Heading;
