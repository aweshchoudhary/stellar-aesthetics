import React from "react";
import Section from "../Components/BodyComponent/Section";

const Procedures = () => {
  return (
    <>
      <Section className={"h-[500px] bg-gray-200"}>procedures sliders</Section>
      <Section className={"whitespace-pre"}>
        <ul>
          <li className="list-disc ml-10 text-xl my-3">Face Consultation</li>
          <li className="list-disc ml-10 text-xl my-3">Anti-Aging Treatment</li>
          <li className="list-disc ml-10 text-xl my-3">
            Fine Lines &amp; Wrinkles
          </li>
          <li className="list-disc ml-10 text-xl my-3">Face Lifting</li>
          <li className="list-disc ml-10 text-xl my-3">Liquid Face Lift</li>
          <li className="list-disc ml-10 text-xl my-3">Thread Face Lift</li>
          <li className="list-disc ml-10 text-xl my-3">Vampire Face Lift</li>
          <li className="list-disc ml-10 text-xl my-3">Brow Lift</li>
          <li className="list-disc ml-10 text-xl my-3">Neck Lifting</li>
          <li className="list-disc ml-10 text-xl my-3">HIFU</li>
          <li className="list-disc ml-10 text-xl my-3">Jaw Line Contouring</li>
          <li className="list-disc ml-10 text-xl my-3">Chin Enhancement</li>
        </ul>
      </Section>
    </>
  );
};

export default Procedures;
