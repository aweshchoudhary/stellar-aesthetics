import React from "react";
import LinkBtn from "../LinkBtn";

const ContactCard = () => {
  return (
    <section className=" bg-primary h-[400px] text-white flex justify-between">
      <div className="w-[60%] py-14 px-10">
        <h2 className="text-6xl font-medium">Get Course Content,</h2>
        <h3 className="text-4xl">Reserve Your Seat</h3>
        <p className="mt-5 font-light">
          Book call or Whatsapp us to reserve your seat, Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.{" "}
        </p>
        <div className="flex gap-3 mt-5">
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
      <div className="w-[40%] ml-10 h-full overflow-hidden flex items-center justify-end pr-10">
        <div className="flex flex-wrap justify-end items-center gap-5 -rotate-12 opacity-50">
          <img
            className="w-[220px] shrink-0"
            src="/assets/img/course-cover.png"
            alt=""
          />
          <div>
            <img
              className="w-[220px] shrink-0 mb-5"
              src="/assets/img/course-cover.png"
              alt=""
            />
            <img
              className="w-[220px] shrink-0"
              src="/assets/img/course-cover.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
