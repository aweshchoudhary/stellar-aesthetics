import React from "react";

const Card = ({ horizontal }) => {
  return (
    <>
      {horizontal ? (
        <div className="lg:w-1/3 sm:w-1/2">
          <div className="card sm:m-4 mb-4 sm:h-[500px] h-[400px] shrink-0">
            <div className="img sm:h-[400px] h-[300px] w-full bg-gray-200">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="caption mt-3">
              <h5 className="text-lg">Award by IHPA 2019</h5>
              <p className="text-body">
                Excellence In Facial Cosmetics by IIHPA 2019
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:w-1/3 sm:w-1/2 ">
          <div className="card sm:m-4 mb-4 sm:h-[350px] h-[300px] shrink-0">
            <div className="img sm:h-[260px] h-[200px] w-full bg-gray-200">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="caption mt-3">
              <h5 className="text-lg">Award by IHPA 2019</h5>
              <p className="text-body">
                Excellence In Facial Cosmetics by IIHPA 2019
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
