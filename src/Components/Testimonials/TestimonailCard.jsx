import { Icon } from "@iconify/react";
import React from "react";
import { BASE_URL } from "../../config";
import ReadMore from "../ReadMore";

const TestimonailCard = ({ data }) => {
  return (
    <>
      {data && (
        <div className="md:flex md:w-[80%] md:-[400px] gap-5 mx-auto">
          <div className="md:w-[30%] h-full shrink-0">
            <img
              src={BASE_URL + data.attributes.img.data.attributes.url}
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="md:w-[70%] h-full shrink-0">
            <header className="border-b md:pb-3 md:mb-3 py-3 md:flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-medium">
                  {data.attributes.customerName},
                </h3>
                <h3 className="text-lg text-body">
                  {data.attributes.customerDetails}
                </h3>
              </div>
              <div className="flex text-yellow-500">
                <Icon className="text-3xl" icon="ic:round-star-rate" />
                <Icon className="text-3xl" icon="ic:round-star-rate" />
                <Icon className="text-3xl" icon="ic:round-star-rate" />
                <Icon className="text-3xl" icon="ic:round-star-rate" />
                <Icon className="text-3xl" icon="ic:round-star-rate" />
              </div>
            </header>
            <div className="pt-4">
              <h3 className=" text-2xl mb-5 font-bold">
                <Icon
                  className="inline text-4xl"
                  icon="mingcute:quote-left-fill"
                />
                {data.attributes.quoteHeading}
                <Icon
                  className="inline text-4xl"
                  icon="mingcute:quote-right-fill"
                />
              </h3>

              <ReadMore>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.attributes.quoteDescription,
                  }}
                ></p>
              </ReadMore>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonailCard;
