import Section from "../Components/Main/Section";
import Heading from "../Components/Main/Heading";
import LinkBtn from "../Components/Main/LinkBtn";
import { Content } from "../Pages/WhyChooseUs";
import { Link } from "react-router-dom";

const CourseCard = ({ w, img, link }) => {
  return (
    <div className={"relative p-2 " + w}>
      <Link className="w-full h-full" to={link}>
        <img src={img} alt="" className=" object-contain w-full" />
      </Link>
    </div>
  );
};

const Courses = () => {
  return (
    <>
      <section
        className={
          "md:h-[500px] relative h-[400px] w-full flex items-center justify-center"
        }
      >
        <div className="w-full h-full absolute inset-0 -z-10 bg-black">
          <video
            src="https://stellaraesthetics.in/wp-content/uploads/2021/12/stellar-courses-1mbps.mp4"
            className="w-full h-full object-cover opacity-60"
            autoPlay
            muted
          ></video>
        </div>
        <div className="text-white text-center md:w-1/2">
          <h2 className="lg:text-5xl text-3xl font-bold text-white">
            Join Our Internationally Certified Courses
          </h2>
          <p className="md:text-lg">
            The career of your dreams is one click away.
          </p>
          <div className="btns flex items-center gap-5 justify-center my-5">
            <LinkBtn
              label={"Get Certified"}
              others={{ to: "#getcertified" }}
              varaint="filled"
              white={true}
            />
            <LinkBtn label={"Why Us?"} varaint="outlined" white={true} />
          </div>
        </div>
      </section>
      <Section>
        <div id="getcertified"></div>
        <Heading
          text1={"Get Internationally"}
          brNone={true}
          text2={" Certified"}
        />
        <h3 className=" mt-5 text-lg">
          <strong>Our Courses</strong>, Click To Know More
        </h3>
        <div className="flex items-start flex-wrap md:my-10 my-5">
          <div className="md:w-1/2 w-full">
            <h2 className="md:text-3xl text-2xl font-bold">
              <em>International Fellowships</em>
            </h2>

            <ul className="md:text-xl my-5">
              <li>Fellowship In Clincial Cosmetology</li>
              <li>Fellowship In Trichology</li>
            </ul>
            <ul>
              <h2 className="md:text-2xl text-lg font-medium mb-4">
                Extremely Insightful. Exceptionally Personal.
              </h2>
              <li>Complete Hands-On All Procedures (Basic to Advance)</li>
              <li>Lifetime Business Mentorship</li>
              <li>Lifetime Trainer Mentorship</li>
              <li> Complete Practice Set-Up</li>
              <li> Patient Acquisition Strategies</li>
              <li>Study Material</li>
              <li>International Placement Assistance</li>
              <li> Product & Dealer Guide</li>
            </ul>
            <div className="buttons flex items-center gap-5 my-4">
              <LinkBtn
                label={"Book Call"}
                others={{ to: "" }}
                icon="ic:baseline-call"
                varaint={"filled"}
              />
              <LinkBtn
                label={"Whatsapp Us"}
                others={{ to: "" }}
                icon="ic:baseline-whatsapp"
                varaint={"outlined"}
              />
            </div>
          </div>
          <CourseCard
            w={"md:w-[25%] sm:w-1/2 w-full"}
            img={
              "https://stellaraesthetics.in/wp-content/uploads/2022/11/image-113-1.jpg.webp"
            }
            link={"/courses/fellowship-in-clinical-cosmetology"}
          />
          <CourseCard
            w={"md:w-[25%] sm:w-1/2 w-full"}
            img={
              "https://stellaraesthetics.in/wp-content/uploads/2022/11/35.jpg.webp"
            }
            link={"/courses/fellowship-in-tricology"}
          />
        </div>
        <div className="flex flex-wrap md:my-10 my-5">
          <div className="md:w-[40%] grow-0 w-full">
            <h2 className="md:text-3xl text-2xl font-bold">
              <em>International Certifications</em>
            </h2>

            <ul className="md:text-xl my-5">
              <li>Certification In Facial Cosmetics</li>
              <li>Certification In Hair Restoration</li>
              <li>Certification In Micro Pigmentation & Micro Blading</li>
            </ul>
            <ul>
              <h2 className="md:text-2xl text-lg font-medium mb-4">
                Level Up Your Practice.
              </h2>
              <li>Complete Hands-On</li>
              <li>Business Mentorship</li>
              <li>Trainer Mentorship</li>
              <li>Complete Practice Set-Up</li>
              <li>Study Material</li>
              <li>Product & Dealer Guide</li>
            </ul>
            <div className="buttons flex items-center gap-5 my-4">
              <LinkBtn
                label={"Book Call"}
                others={{ to: "" }}
                icon="ic:baseline-call"
                varaint={"filled"}
              />
              <LinkBtn
                label={"Whatsapp Us"}
                others={{ to: "" }}
                icon="ic:baseline-whatsapp"
                varaint={"outlined"}
              />
            </div>
          </div>
          <CourseCard
            w={"md:w-[20%] sm:w-[33%] w-full"}
            img={
              "https://stellaraesthetics.in/wp-content/uploads/2022/11/image-110.jpg.webp"
            }
            link={"/courses/certification-in-facial-cosmetics"}
          />
          <CourseCard
            w={"md:w-[20%] sm:w-[33%] w-full"}
            img={
              "https://stellaraesthetics.in/wp-content/uploads/2022/11/image-116.png.webp"
            }
            link={"/courses/certification-in-hair-restoration"}
          />
          <CourseCard
            w={"md:w-[20%] sm:w-[33%] w-full"}
            img={
              "https://stellaraesthetics.in/wp-content/uploads/2022/11/image-114-1.png.webp"
            }
            link={"/courses/certification-in-micro-pigmentation-micro-blading"}
          />
        </div>
      </Section>
      <section>
        <Content />
      </section>
    </>
  );
};

export default Courses;
