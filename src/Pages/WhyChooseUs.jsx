import React from "react";
import Heading from "../Components/Main/Heading";
import Section from "../Components/Main/Section";
import PageHeader from "../Components/Main/PageHeader";

export const Content = () => {
  return (
    <Section>
      <Heading
        text1={"Why Choose"}
        text2={"Stellar Aesthetics."}
        brNone={true}
      />
      <h3 className="md:text-3xl text-xl mt-10 text-primary">
        It’s THE ULTIMATE SUCCESS PACKAGE for your{" "}
        <strong>Successful Cosmetology Practice.</strong>
      </h3>
      <div>
        <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
          Big Names. Train Under Absolute Experts.
        </h3>
        <p>
          Every one of our Trainers are Renowned, running a Big Practice and are
          Well-Known Experts in their fields. To be the best, learn from the
          best. Internationally Certified. Internationally Eligible Be a UK
          BOARD CERTIFIED FELLOW OR TRAINEE with our International Board (UK)
          Certified Programs. <br /> <br /> International recognition of your
          name immediately adds value to your practice and gives you an edge
          over your competitors. We bring Exclusive and preferential PLACEMENTS,
          CAREER AND BUSINESS OPPORTUNITIES (National and International), just
          for you.
        </p>
      </div>
      <div>
        <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
          Big Names. Train Under Absolute Experts.
        </h3>
        <p>
          Every one of our Trainers are Renowned, running a Big Practice and are
          Well-Known Experts in their fields. To be the best, learn from the
          best. Internationally Certified. Internationally Eligible Be a UK
          BOARD CERTIFIED FELLOW OR TRAINEE with our International Board (UK)
          Certified Programs. <br /> <br /> International recognition of your
          name immediately adds value to your practice and gives you an edge
          over your competitors. We bring Exclusive and preferential PLACEMENTS,
          CAREER AND BUSINESS OPPORTUNITIES (National and International), just
          for you.
        </p>
      </div>

      <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
        Even more reasons to love <strong>Stellar Aesthetics</strong>
      </h3>
      <div>
        <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
          Big Names. Train Under Absolute Experts.
        </h3>
        <p>
          Every one of our Trainers are Renowned, running a Big Practice and are
          Well-Known Experts in their fields. To be the best, learn from the
          best. Internationally Certified. Internationally Eligible Be a UK
          BOARD CERTIFIED FELLOW OR TRAINEE with our International Board (UK)
          Certified Programs. <br /> <br /> International recognition of your
          name immediately adds value to your practice and gives you an edge
          over your competitors. We bring Exclusive and preferential PLACEMENTS,
          CAREER AND BUSINESS OPPORTUNITIES (National and International), just
          for you.
        </p>
      </div>
      <div>
        <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
          Big Names. Train Under Absolute Experts.
        </h3>
        <p>
          Every one of our Trainers are Renowned, running a Big Practice and are
          Well-Known Experts in their fields. To be the best, learn from the
          best. Internationally Certified. Internationally Eligible Be a UK
          BOARD CERTIFIED FELLOW OR TRAINEE with our International Board (UK)
          Certified Programs. <br /> <br /> International recognition of your
          name immediately adds value to your practice and gives you an edge
          over your competitors. We bring Exclusive and preferential PLACEMENTS,
          CAREER AND BUSINESS OPPORTUNITIES (National and International), just
          for you.
        </p>
      </div>
      <div>
        <img
          src="https://stellaraesthetics.in/wp-content/uploads/2021/12/Slide12.jpg.webp"
          className="w-full mt-10"
          alt=""
        />
      </div>
    </Section>
  );
};

const WhyChooseUs = () => {
  return (
    <>
      <PageHeader>Why Choose Us</PageHeader>
      <Content />
    </>
  );
};

export default WhyChooseUs;
