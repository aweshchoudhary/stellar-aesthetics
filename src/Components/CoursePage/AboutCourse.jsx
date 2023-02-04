import useData from "../../Hooks/useContext";
import parser from "html-react-parser";
import { lazy } from "react";

const Section = lazy(() => import("../Main/Section"));
const Heading = lazy(() => import("../Main/Heading"));
const Img = lazy(() => import("../Main/Img"));
const ReadMore = lazy(() => import("../Main/ReadMore"));

const AboutCourse = () => {
  const { coursePage } = useData();
  return (
    <Section className="about-course">
      <Heading
        text1={
          coursePage.attributes.type === "fellowships"
            ? "About Fellowship In"
            : "About Certification In"
        }
        text2={coursePage.attributes.title}
        className="md:mb-20 mb-10"
      />
      <div className="md:flex">
        <div className="md:w-1/3 shrink-0">
          <Img
            src={
              "/assets/img/" +
              coursePage.attributes.courseAboutImg.data.attributes.name
            }
            caption={"Participant getting certificate"}
          />
        </div>
        <div className="md:pl-10 md:pt-0 pt-10">
          <h3 className="md:text-4xl text-2xl font-semibold mb-4">
            Why It Is Right For You.
          </h3>
          <div className="md:flex items-center gap-5 sm:my-10 my-5">
            <div className="md:flex hidden shrink-0">
              <Img
                src={
                  "https://stellaraesthetics.in/wp-content/uploads/2022/11/6-300x300.png.webp"
                }
                caption="Award"
                className={"w-[100px]"}
              />
              <Img
                src={
                  "https://stellaraesthetics.in/wp-content/uploads/2022/11/1-300x300.png.webp"
                }
                caption="Award"
                className={"w-[100px]"}
              />
            </div>
            <h3 className="sm:text-3xl text-lg font-medium">
              Get International Fellowship In Clinical Cosmetology
            </h3>
          </div>
          <ReadMore>{parser(coursePage.attributes.courseAbout)}</ReadMore>

          <div className="mt-10">
            <Img
              className="w-[200px] mb-4"
              src={
                "https://stellaraesthetics.in/wp-content/uploads/2022/11/11-1.png.webp"
              }
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
    </Section>
  );
};

export default AboutCourse;
