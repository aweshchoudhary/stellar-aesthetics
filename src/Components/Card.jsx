import React from "react";

const Card = ({ horizontal }) => {
  return (
    <>
      {horizontal ? (
        <div className="w-1/3">
          <div className="card m-4 h-[500px] shrink-0">
            <div className="img h-[400px] w-full bg-gray-200">
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
        <div className="w-1/3">
          <div className="card m-4 h-[350px] shrink-0">
            <div className="img h-[260px] w-full bg-gray-200">
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
