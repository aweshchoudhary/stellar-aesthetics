import React from "react";
import Card from "../Card";
import Heading from "../BodyComponent/Heading";
import Section from "../BodyComponent/Section";

const CourseGlimpses = () => {
  return (
    <Section className="glimpses">
      <Heading
        text1={"Jam-Packed With"}
        text2={"Knowledge, Experience And Goodies"}
      />
      <h2 className="md:text-4xl sm:text-2xl text-xl mt-10 font-medium">
        Glimpses Of The Program
      </h2>
      <div className="flex flex-wrap my-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
};

export default CourseGlimpses;
