import { Icon } from "@iconify/react";
import React from "react";

const TestimonailCard = () => {
  return (
    <div className="flex w-[80%] gap-5 mx-auto">
      <div className="w-[30%] shrink-0">
        <img
          src="https://stellaraesthetics.in/wp-content/uploads/2022/11/3.jpg.webp"
          alt=""
          className=" w-full object-contain"
        />
      </div>
      <div className="w-[70%] shrink-0">
        <header className="border-b pb-3 mb-3 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-medium">Dr. Nilesh Dusane,</h3>
            <h3 className="text-lg text-body">Dermatologist, Jalgaon</h3>
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
          <h3 className=" text-3xl mb-5 font-bold">
            <Icon className="inline text-4xl" icon="mingcute:quote-left-fill" />
            You get the BEST ATTENTION throughout
            <Icon
              className="inline text-4xl"
              icon="mingcute:quote-right-fill"
            />
          </h3>

          <p>
            I was looking for an opportunity to learn from Dr. Sapnna Vaderra &
            Stellar Aesthetics for a long time & when I came to know about the
            course, I immediately joined it and it was the best decision for me.
          </p>
          <br />
          <p>
            Here I learned a holistic way of patient management starting from
            the time the patient walks into the clinic, material procurement,
            business guidance and of course Hands-on for all procedures. You get
            the best attention throughout. High recommended.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonailCard;
