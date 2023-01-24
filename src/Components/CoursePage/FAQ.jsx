import { Heading, Section } from "../Main";
import Accordion from "../Accordion/Accordion";
import faqs from "../../data/faq.json";

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
        faqs.map((item) => {
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
