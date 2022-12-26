import React from "react";
import Heading from "../Components/BodyComponent/Heading";
import Section from "../Components/BodyComponent/Section";
import LinkBtn from "../Components/LinkBtn";

const Procedure = () => {
  return (
    <>
      <section className="hero-slider relative flex items-center justify-center md:min-h-[500px] w-full">
        <div className="bg h-full w-full absolute inset-0 -z-10 bg-primary">
          <img
            src={
              "https://stellaraesthetics.in/wp-content/uploads/2022/11/group-image.jpg.webp"
            }
            className="opacity-20 blur w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="content lg:px-10 px-4 py-14 text-center  text-white">
            <h2 className="md:text-7xl sm:text-5xl text-3xl font-semibold mb-3">
              Be YOUR BEST Version
            </h2>
            <p className="text-lg">
              With Stellar Aesthetics’ Facial Cosmetic Procedures you can bring
              out your true beauty, for the world to see.
            </p>
            <div>
              <div className="flex gap-5 justify-center mt-4">
                <LinkBtn varaint={"filled"} white={true} label={"Book Call"} />
                <LinkBtn
                  varaint={"outlined"}
                  white={true}
                  label={"Whatsapp Us"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section>
        <Heading text1={"Face"} text2="Procedures" brNone={true} />
        <div className="mt-5">
          <ul>
            <li>
              Face Consultation Anti-Aging Treatment Fine Lines & Wrinkles Face
              Lifting Liquid Face Lift Thread Face Lift Vampire Face Lift Brow
              Lift Neck Lifting HIFU Jaw Line Contouring Chin Enhancement Chin
              Lipolysis Chin Implant Rhinoplasty Liquid Rhinoplasty Dermal
              Fillers Fat Grafting Nano-Fat Grafting Facial Scar Treatment
              Revision Facial Surgery Cleft Lip Repair Cleft Palate Repair
              Facial Feminisation
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Procedure;
