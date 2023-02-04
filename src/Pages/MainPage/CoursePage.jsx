import { useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import useData from "../../Hooks/useContext";
import Bar from "../../Components/Loader/Bar";
import { Helmet } from "react-helmet";
import courses from "../../data/courses.json";
import parser from "html-react-parser";

// Course Page Components Import
import AboutCourse from "../../Components/CoursePage/AboutCourse";
import ContactCard from "../../Components/CoursePage/ContactCard";
import CourseDirector from "../../Components/CoursePage/CourseDirector";
import CourseGlimpses from "../../Components/CoursePage/CourseGlimpses";
import CourseHero from "../../Components/CoursePage/CourseHero";
import CourseRoadMap from "../../Components/CoursePage/CourseRoadMap";
import Testimonials from "../../Components/Testimonials/Testimonials";
import FAQ from "../../Components/CoursePage/FAQ";

const CoursePage = () => {
  const { name } = useParams();
  const { setCoursePage, coursePage } = useData();
  const loading = useRef(false);

  // UseEffect Clean Up
  const isMounted = useRef(false);

  // Function To Change The Primary Colors
  useEffect(() => {
    const changePrimaryColor = () => {
      coursePage?.attributes?.primaryColor &&
        document.documentElement.style.setProperty(
          "--primary",
          coursePage.attributes.primaryColor
        );
    };
    isMounted && changePrimaryColor();
    return () => {
      isMounted.current = true;
    };
  }, [coursePage]);

  const getCourse = useMemo(
    () =>
      courses.filter((item) => {
        return item.attributes.slug === name;
      }),
    [name]
  );

  useEffect(() => {
    if (getCourse) setCoursePage(...getCourse);
  }, [getCourse, setCoursePage]);

  return (
    <>
      {coursePage?.attributes && !loading.current ? (
        <>
          <Helmet>
            <title>{` ${
              coursePage.attributes.type === "fellowships"
                ? "FELLOWSHIP IN "
                : "CERTIFICATION IN "
            } ${coursePage.attributes.title.toUpperCase()} `}</title>
            {coursePage.meta && parser(coursePage.meta)}
            <meta
              property="og:image"
              content={
                "https://stellaraesthetics.in/assets/img/" +
                coursePage.attributes.courseHeaderImg.data.attributes.name
              }
            />
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          </Helmet>
          <CourseHero />
          <CourseDirector />
          <ContactCard />
          <AboutCourse />
          <ContactCard />
          <CourseRoadMap />
          <ContactCard />
          <CourseGlimpses items={coursePage.attributes.glimpse} />
          <ContactCard />
          <Testimonials />
          <ContactCard />
          <FAQ />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What makes Stellar Aesthetics unique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The teaching method at Stellar Aesthetics is more practical and patient based. You get to learn everything on Patients with FULL HANDS-ON EXPERIENCE. &nbsp;Complementary mini Cosmetic Armamentarium for you with the cosmetics products with which you can right away start with your Facial Cosmetic practice. Apart from this, if you enrol for this course, you are enrolling for yourself a Life-time mentor to guide you with all the problems you might face in your initial days of Facial Cosmetic Practice.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the dates for the Courses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kindly get in touch with us on +917999506817 or connect on WhatsApp to know more about the upcoming batches.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the course Venue?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The course will be conducted in Mumbai, India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it a Virtual Event or a Live Training Workshop?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It’s a live training event to be held in Mumbai with Live Lectures, Demonstration and Hands-On training on patients.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I get myself enrolled for the course?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can call us on +917999506817 or even WhatsApp us and our Team will assist you.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I get Hands-On?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "At Stellar Aesthetics Facial Cosmetic Course, you get Hands-On for all the procedures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "On what all procedures do I get Hands-On?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hands-On training will be available for all the participants for procedures including Botulinum toxins, Dermal fillers, Threads, LASERs including Fractional CO2, Q Switch LASER, Diode LASER, Pigment LASERs, MicroRF, Face Lifting devices, Chemical Peels and Hair Rejuvenation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is the Chief Mentor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Chief Mentor for the course is Dr. Sapnna Vaderra.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it a Certificate Course?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We have Certification as well as Fellowship Program. Get in touch with us on +917999506817 or connect with us on WhatsApp (link) to get details about the program.",
                  },
                },
                {
                  "@type": "Question",
                  name: "If I have any questions, who do I contact?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we understand you may have some questions and we are happy to assist you. You can email us at hello@stellaraesthetics.in and our team will respond to you within 24 hours. You can call us on +917999506817 or even WhatsApp us for any information.",
                  },
                },
              ],
            })}
          </script>
        </>
      ) : (
        <Bar />
      )}
    </>
  );
};

export default CoursePage;
