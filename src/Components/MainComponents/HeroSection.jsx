import React from "react";
import Section from "./MainComponents/Section";
import LinkBtn from "./MainComponents/LinkBtn";

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
          <LinkBtn
            others={{ to: "/procedures" }}
            varaint={"filled"}
            label={"I'm Patient"}
          />
          <LinkBtn
            others={{ to: "/courses" }}
            varaint={"filled"}
            white={true}
            label={"I'm Doctor"}
          />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
