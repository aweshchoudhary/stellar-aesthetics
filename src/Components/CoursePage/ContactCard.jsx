import React, { useEffect, useState } from "react";
import LinkBtn from "../LinkBtn";
import api from "../../Api/api";
import { BASE_URL } from "../../config";
import useFetch from "../../Hooks/useFetch";

const ContactCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = [71, 72, 73, 74];
    setLoading("loading...");
    const controller = new AbortController();
    query.forEach((e) => {
      api
        .get("/upload/files/" + e, { signal: controller.signal })
        .then((res) => {
          setLoading(false);
          // res.data.content && setData(res.data.content);
          res.data &&
            setData((prev) => {
              return [...prev, res.data.url];
            });
        })
        .catch((err) => {
          setLoading(false);
          setError("An error occurred. Awkward..");
        });
    });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <section className="bg-primary lg:h-[400px] text-white flex justify-between md:py-0 py-10">
      <div className="lg:w-[55%] lg:py-14 md:py-10 px-5 sm:px-10">
        <h2 className="lg:text-6xl sm:text-5xl text-3xl font-medium">
          Get Course Content,
        </h2>
        <h3 className="lg:text-4xl sm:text-3xl text-2xl">Reserve Your Seat</h3>
        <p className="mt-5 font-light">
          Book call or Whatsapp us to reserve your seat.
        </p>
        <div className="flex sm:gap-3 gap-2 mt-5">
          <LinkBtn
            varaint={"filled"}
            icon="ic:baseline-whatsapp"
            label={"Whatsapp Us"}
            white={true}
          />
          <LinkBtn
            icon="material-symbols:call-sharp"
            varaint={"outlined"}
            label={"Call Us"}
            white={true}
          />
        </div>
        <p className="text-sm mt-4 font-light">*Terms & Conditions Apply</p>
      </div>
      <div className="w-[45%] lg:flex hidden ml-10 h-full overflow-hidden items-center justify-end pr-10">
        <div className="flex items-center flex-wrap justify-center gap-5 -rotate-12 opacity-50">
          {data &&
            data.map((item, i) => {
              return (
                <img
                  key={i}
                  className="w-[200px] shrink-0"
                  src={BASE_URL + item}
                  alt=""
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
