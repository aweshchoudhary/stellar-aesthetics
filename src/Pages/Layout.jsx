import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Bar from "../Components/Loader/Bar";

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
    </>
  );
};

export default Layout;
