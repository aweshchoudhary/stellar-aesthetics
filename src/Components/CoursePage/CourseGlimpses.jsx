import React from "react";
import Card from "../Card";
import Heading from "../Heading";

const CourseGlimpses = () => {
  return (
    <section className="glimpses py-14 px-10">
      <Heading
        text1={"Jam-Packed With"}
        text2={"Knowledge, Experience And Goodies"}
      />
      <h2 className="text-4xl mt-10 font-medium">Glimpses Of The Program</h2>
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
    </section>
  );
};

export default CourseGlimpses;
