import Accordion from "../Accordion/Accordion";
import faqs from "../../data/faq.json";
import { lazy } from "react";

const Section = lazy(() => import("../Main/Section"));
const Heading = lazy(() => import("../Main/Heading"));

const FAQ = () => {
  return (
    <Section>
      <Heading
        text1={"Frequently Asked"}
        className="mb-10"
        text2="Questions"
        brNone={true}
      />
      {faqs &&
        faqs.map((item, key) => {
          return (
            <Accordion key={key} heading={item.attributes.title}>
              {item.attributes.description}
            </Accordion>
          );
        })}
    </Section>
  );
};

export default FAQ;
