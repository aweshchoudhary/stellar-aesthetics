import React from "react";
import LinkBtn from "../LinkBtn";

const ContactCard = () => {
  return (
    <section className="bg-primary text-white p-10 flex items-center justify-between">
      <div className="w-1/2">
        <h2 className="text-5xl font-medium">Get Course Content,</h2>
        <h3 className="text-4xl">Reserve Your Seat</h3>
        <p className="mt-5">
          Book call or Whatsapp us to reserve your seat, Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.{" "}
        </p>
        <div className="flex gap-3 mt-5">
          <LinkBtn varaint={"outlined"} label={"Whatsapp Us"} white={true} />
          <LinkBtn varaint={"filled"} label={"Call Us"} white={true} />
        </div>
        <p></p>
      </div>
      <div></div>
    </section>
  );
};

export default ContactCard;
