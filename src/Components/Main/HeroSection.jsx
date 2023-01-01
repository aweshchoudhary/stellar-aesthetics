import Section from "./Section";
import LinkBtn from "./LinkBtn";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Section className="md:h-[600px] sm:h-[400px] h-[400px] lg:px-0 lg:py-0 w-full bg-black relative">
      <video
        className="w-full h-full object-cover opacity-80"
        autoPlay
        muted={true}
        src="https://stellaraesthetics.in/wp-content/uploads/2022/01/stellar-hero-bg-1mbps.webm"
      ></video>
      <div className="absolute top-1/2 left-1/2 z-10 text-center w-full md:px-10 px-5 -translate-x-1/2 -translate-y-1/2">
        <h3 className="md:text-5xl text-2xl text-white">Get Started</h3>
        <h2 className="md:text-7xl sm:text-5xl text-3xl text-white font-bold md:font-medium">
          Start Your Journey
        </h2>
        <div className="flex items-center mt-5 gap-5 justify-center">
          <Link className="btn filled bg-primary" to={"/procedures"}>
            I'm Patient
          </Link>
          <Link className="btn filled white text-primary" to={"/courses"}>
            I'm Doctor
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
