import React from "react";
import Heading from "../Components/BodyComponent/Heading";
import Section from "../Components/BodyComponent/Section";
import Card from "../Components/Card";
import PageHeader from "../Components/PageHeader";

const Doctors = () => {
  return (
    <>
      <PageHeader>Doctors</PageHeader>
      <Section>
        <Heading text1={"Doctors"} className={"mb-10"} />
        <div className="flex flex-wrap">
          <Card />
          <Card />
          <Card />
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
    </>
  );
};

export default Doctors;
