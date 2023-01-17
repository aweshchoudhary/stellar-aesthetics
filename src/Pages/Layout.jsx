import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Bar from "../Components/Loader/Bar";
import WhatsappBtn from "../Components/Main/WhatsappBtn";

const Layout = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Best Cosmetic Treatments in India - Stellar Aesthetics",
            url: "https://stellaraesthetics.in/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://stellaraesthetics.in/{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        <article>
          <Suspense fallback={<Bar />}>
            <Outlet />
          </Suspense>
        </article>
      </main>
      <Footer></Footer>
      <WhatsappBtn />
    </>
  );
};

export default Layout;
