import { lazy } from "react";
import { Helmet } from "react-helmet";
const HeroSection = lazy(() => import("../../Components/Main/HeroSection"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Cosmetics Treatment In India</title>
      </Helmet>
      <HeroSection />
    </>
  );
};

export default Home;
