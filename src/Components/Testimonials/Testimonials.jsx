import React from "react";
import Heading from "../BodyComponent/Heading";
import Section from "../BodyComponent/Section";
import TestimonailCard from "./TestimonailCard";
import { Icon } from "@iconify/react";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    autoplay: true,
  };

  function slide(dir) {
    if (dir === "prev") {
      document.querySelector(".slick-prev").click();
    } else {
      document.querySelector(".slick-next").click();
    }
  }
  return (
    <Section className="testimonails">
      <Heading text1={"They Loved It."} text2={"So Will You."} brNone={true} />
      <h2 className="text-4xl font-medium mt-5">Testimonials</h2>
      <div className="my-10">
        <div className="btns mb-5">
          <button onClick={() => slide("prev")}>
            <Icon
              className="text-5xl text-body text-h-primary transition-all"
              icon="material-symbols:arrow-circle-left-rounded"
            />
          </button>
          <button onClick={() => slide("next")}>
            <Icon
              className="text-5xl text-body text-h-primary transition-all"
              icon="material-symbols:arrow-circle-right-rounded"
            />
          </button>
        </div>
        <Slider {...settings}>
          <div>
            <TestimonailCard />
          </div>
          <div>
            <TestimonailCard />
          </div>
          <div>
            <TestimonailCard />
          </div>
          <div>
            <TestimonailCard />
          </div>
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonials;
