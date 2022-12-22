import React from "react";
import Section from "../BodyComponent/Section";
import LinkBtn from "../LinkBtn";

const ContactCard = () => {
  return (
    <section className="bg-primary lg:h-[400px] text-white flex justify-between lg:p-0 lg:py-0 lg:px-0 px-2">
      <div className="lg:w-[60%] lg:py-14 md:py-10 px-5 sm:px-10">
        <h2 className="lg:text-6xl sm:text-5xl text-3xl font-medium">
          Get Course Content,
        </h2>
        <h3 className="lg:text-4xl sm:text-3xl text-2xl">Reserve Your Seat</h3>
        <p className="mt-5 font-light">
          Book call or Whatsapp us to reserve your seat, Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.{" "}
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
      <div className="w-[40%] lg:flex hidden ml-10 h-full overflow-hidden items-center justify-end pr-10">
        <div className="flex flex-wrap justify-end items-center gap-5 -rotate-12 opacity-50">
          <img
            className="w-[150px] shrink-0"
            src="/assets/img/course-cover.png"
            alt=""
          />
          <div>
            <img
              className="w-[150px] shrink-0 mb-5"
              src="/assets/img/course-cover.png"
              alt=""
            />
            <img
              className="w-[150px] shrink-0"
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
