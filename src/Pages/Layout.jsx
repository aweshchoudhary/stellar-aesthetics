import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Bar from "../Components/Loader/Bar";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import WhatsappBtn from "../Components/Main/WhatsappBtn";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>
          Best Cosmetic Treatments in India - Stellar Aesthetics | Face | Body |
          Skin | Hair
        </title>
        <meta
          property="og:site_name"
          content="Stellar Aesthetics | Face | Body | Skin | Hair"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/Stellar-Aesthetics-100540252464505/"
        />
        <meta
          property="article:modified_time"
          content="2022-11-30T14:53:44+00:00"
        />
        <meta
          property="og:image"
          content="https://stellaraesthetics.in/wp-content/uploads/2021/12/logo-177x100-1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="1 minute" />
        <link rel="shortlink" href="https://stellaraesthetics.in/" />
      </Helmet>
      <Header />
      <main>
        <article>
          <Suspense fallback={<Bar />}>
            <Outlet />
          </Suspense>
        </article>
      </main>
      <Footer />
      <WhatsappBtn />
    </>
  );
};

export default Layout;
