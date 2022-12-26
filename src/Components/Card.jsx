import React from "react";
import { BASE_URL } from "../config";
import parser from "html-react-parser";

const Card = ({ horizontal, img, title, title2, subtitle }) => {
  return (
    <>
      {horizontal ? (
        <div className="lg:w-1/3 sm:w-1/2 w-full">
          <div className="card sm:m-4 mb-4 sm:h-[500px] h-[400px] shrink-0">
            <div className="img sm:h-[400px] h-[300px] w-full bg-gray-200">
              {img && <img src={BASE_URL + img} alt="" />}
            </div>
            <div className="caption mt-3">
              <h5 className="text-lg">{title}</h5>
              {subtitle && <p className="text-body">{parser(subtitle)}</p>}
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:w-1/3 sm:w-1/2 w-full">
          <div className="card sm:m-4 mb-4 sm:h-[350px] h-[300px] shrink-0">
            <div className="img sm:h-[260px] h-[200px] w-full bg-gray-200">
              {img && (
                <img
                  src={BASE_URL + img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="caption mt-3">
              <h5 className="text-md font-medium">{title}</h5>
              {title2 && <h5 className="text-md font-medium">{title2}</h5>}
              {subtitle && <p className="text-body">{parser(subtitle)}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
