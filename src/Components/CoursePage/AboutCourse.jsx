import React from "react";
import Heading from "../Heading";
import ReadMore from "../ReadMore";

const AboutCourse = () => {
  return (
    <section className="about-course px-10 py-14">
      <Heading
        text1={"About Fellowship In"}
        text2={"Clincal Cosmetology."}
        className="mb-20"
      />
      <div className="flex">
        <div className="w-1/3 shrink-0">
          <img
            src="https://stellaraesthetics.in/wp-content/uploads/2022/11/DSC01691.jpg.webp"
            alt=""
          />
        </div>
        <div className="pl-10">
          <h2 className="text-4xl font-medium mb-4">
            Why It Is Right For You.
          </h2>
          <div className="flex items-center gap-5 my-10">
            <div className="flex shrink-0">
              <img
                src="https://stellaraesthetics.in/wp-content/uploads/2022/11/6-300x300.png.webp"
                alt=""
                className="w-[150px]"
              />
              <img
                src="https://stellaraesthetics.in/wp-content/uploads/2022/11/1-300x300.png.webp"
                alt=""
                className="w-[150px]"
              />
            </div>
            <h4 className="text-3xl font-medium">
              Get International Fellowship In Clinical Cosmetology
            </h4>
          </div>
          <ReadMore>
            An International Education UK Board Certified, 3-month comprehensive
            fellowship program conceptualized for aestheticians & doctors to
            build an 8-figure practice and be recognized as an expert in the
            field of clinical cosmetology. Our fellows are amongst the most
            successful cosmetology practitioners in the country and abroad.
            <br />
            <br />
            The fellowship is tailor-fit with the prime objective of achieving a
            successful practice. It is designed keeping in mind the business,
            professional and practical approach toward cosmetology giving you
            have the ultimate edge over any competition, present or future. The
            exhaustive Hands-on format, a large variety of patients, multiple
            mentoring sessions, strategic business development, and patient
            acquisition and retention strategies empower the fellows to have a
            stellar cosmetology practice.
            <br />
            <br />
            Module 1 & 2 begins with us giving you the building blocks to
            immediately start your cosmetology practice. You will be trained on
            real-time patients and learn to formulate your own treatment plans
            and perform hands-on for all procedures on those patients. During
            the program, you will find an extensive display of innovative
            products & equipment of all the major brands complete with product
            guides and dealer guides that are up-to-date with market trends,
            economically viable, and safe for the patients. With the
            ever-updated list of cosmetology procedures, you will be trained
            with the latest advances in cosmetology with the best and most
            renowned names in the industry.
            <br />
            <br />
            Module 3 will be completely dedicated to getting one-on-one business
            mentoring & patient acquisition sessions in all aspects of the
            practice. This will help you in understanding your roads blocks and
            stabilizing your practice.
            <br />
            <br />
            Being a fellow gives you an added privilege to join us again for
            Module 4. Here you will perform Hands-on training for your
            identified areas of weakness. With this complete program, we ensure
            that your practice is a roaring success. And we secure your journey
            with our lifetime mentor-ship and support.
          </ReadMore>

          <div className="mt-10">
            <img
              src="https://stellaraesthetics.in/wp-content/uploads/2022/11/11-1.png.webp"
              alt=""
              className="w-[200px] mb-4"
            />
            <p>
              <strong>Dr. Sapnna Vaderra</strong>
            </p>
            <p className="text-body">
              Facial Plastic & Facial Cosmetic Surgeon <br /> Course Director:
              Stellar Aesthetics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
