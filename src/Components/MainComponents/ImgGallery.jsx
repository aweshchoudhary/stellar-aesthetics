import React from "react";

const ImgGallery = ({ img }) => {
  return (
    <div className="gallery w-full">
      <img src={img} className="img-responsive md:h-auto h-full" alt="" />
    </div>
  );
};

export default ImgGallery;
