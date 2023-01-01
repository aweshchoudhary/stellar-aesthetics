import { Icon } from "@iconify/react";
import { BASE_URL } from "../../config";
import ReadMore from "../Main/ReadMore";
import parser from "html-react-parser";
import Img from "../Main/Img";

const TestimonailCard = ({ data }) => {
  return (
    <>
      {data && (
        <div className="md:flex md:w-[80%] md:h-[400px] gap-5 mx-auto">
          <div className="md:w-[30%] md:h-full h-[400px] shrink-0 bg-gray-50">
            <Img
              className={"w-full h-full"}
              src={BASE_URL + data.attributes.img.data.attributes.url}
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
              <h3 className=" md:text-2xl text-xl mb-5 font-bold">
                <Icon
                  className="inline md:text-4xl text-2xl"
                  icon="mingcute:quote-left-fill"
                />
                {data.attributes.quoteHeading}
                <Icon
                  className="inline md:text-4xl text-2xl"
                  icon="mingcute:quote-right-fill"
                />
              </h3>

              <ReadMore>{parser(data.attributes.quoteDescription)}</ReadMore>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonailCard;
