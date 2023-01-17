import React from "react";
import { BASE_URL } from "../../config";
import parser from "html-react-parser";
import Img from "./Img";

const Card = ({
  horizontal,
  img,
  title,
  title2,
  subtitle,
  externalImg,
  containerCss,
}) => {
  const containerStyle = "lg:w-1/3 sm:w-1/2 w-full ";
  const cardStyle = "card sm:m-4 mb-4 shrink-0 ";
  return (
    <>
      {horizontal ? (
        <div className={containerCss ? containerCss : containerStyle}>
          <div className={cardStyle + "md:h-[600px] sm:h-[500px]"}>
            <div className="img md:h-[510px] sm:h-[400px] w-full bg-gray-200">
              {img && (
                <Img
                  src={externalImg ? img : BASE_URL + img}
                  imgClass="w-full h-full object-cover"
                  className={"w-full h-full"}
                />
              )}
            </div>
            <div className="caption mt-3">
              <h5 className="text-lg">{title}</h5>
              {subtitle && <p className="text-body">{parser(subtitle)}</p>}
            </div>
          </div>
        </div>
      ) : (
        <div className={containerCss ? containerCss : containerStyle}>
          <div className={cardStyle + "md:h-[380px] sm:h-[450px] h-[300px]"}>
            <div className="img md:h-[300px] sm:h-[350px] h-[200px] w-full bg-gray-200">
              {img && (
                <Img
                  src={externalImg ? img : BASE_URL + img}
                  imgClass="w-full h-full object-cover"
                  className={"w-full h-full"}
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
