import React from "react";
import { Heading, Section } from "../Main";
import Accordion from "../Accordion/Accordion";
import useFetch from "../../Hooks/useFetch";

const FAQ = () => {
  const { data, loading } = useFetch("/faqs?populate=*");
  return (
    <Section>
      <Heading
        text1={"Frequently Asked"}
        className="mb-10"
        text2="Questions"
        brNone={true}
      />
      {data &&
        !loading &&
        data.map((item) => {
          return (
            <Accordion heading={item.attributes.title}>
              {item.attributes.description}
            </Accordion>
          );
        })}
    </Section>
  );
};

export default FAQ;
