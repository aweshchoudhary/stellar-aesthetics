import React from "react";
import Section from "./BodyComponent/Section";
import LinkBtn from "./LinkBtn";

const HeroSection = () => {
  return (
    <Section className="h-[600px] lg:px-0 lg:py-0 w-full bg-black relative">
      <video
        className="w-full h-full opacity-80"
        autoPlay
        src="https://stellaraesthetics.in/wp-content/uploads/2022/01/stellar-hero-bg-1mbps.webm"
      ></video>
      <div className="absolute top-1/2 left-1/2 z-10 text-center -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-5xl text-white">Get Started</h3>
        <h2 className="text-7xl text-white font-medium">Start Your Journey</h2>
        <p className="text-white mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
          vitae? Labore molestias incidunt placeat. Blanditiis optio sunt
          accusamus ipsa repudiandae!
        </p>
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
