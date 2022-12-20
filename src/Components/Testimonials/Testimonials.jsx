import React from "react";
import Heading from "../BodyComponent/Heading";
import Section from "../BodyComponent/Section";

const Testimonials = () => {
  return (
    <Section className="testimonails">
      <Heading text1={"They Loved It."} text2={"So Will You."} brNone={true} />
      <h2 className="text-4xl font-medium mt-5">Testimonials</h2>
    </Section>
  );
};

export default Testimonials;
