import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Bar from "../Components/Loader/Bar";
import WhatsappBtn from "../Components/Main/WhatsappBtn";

const Layout = () => {
  return (
    <>
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
