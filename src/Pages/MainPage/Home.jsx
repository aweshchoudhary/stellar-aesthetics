import { lazy } from "react";
import { Helmet } from "react-helmet";
const HeroSection = lazy(() => import("../../Components/Main/HeroSection"));

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://stellaraesthetics.in/" />
        <meta
          name="description"
          content="stellar aesthetics, facial cosmetics, clinical cosmetology, trichology, micropigmentation and microblading, hair restoration, facial aesthetics"
        />
        <meta
          name="keywords"
          content="stellar aesthetics, facial cosmetics, clinical cosmetology, trichology, tricology, micropigmentation and microblading, hair restoration, facial aesthetics"
        />
        <title>Best Cosmetics Treatment In India</title>
      </Helmet>
      <HeroSection />
    </>
  );
};

export default Home;
