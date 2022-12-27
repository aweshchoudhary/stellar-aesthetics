import React from "react";

const Img = ({ src, alt, caption, className, imgClass }) => {
  return (
    <figure className={className}>
      <img
        loading="lazy"
        src={src}
        alt={alt || ""}
        className={imgClass || "w-full h-full object-cover"}
      />
      <figcaption className="hidden">{caption}</figcaption>
    </figure>
  );
};

export default Img;
