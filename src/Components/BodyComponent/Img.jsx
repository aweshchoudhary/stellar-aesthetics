import React from "react";

const Img = ({ src, alt, caption, className }) => {
  return (
    <figure>
      <img src={src} alt={alt || ""} className={className} />
      <figcaption className="hidden">{caption}</figcaption>
    </figure>
  );
};

export default Img;
