import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Progress isAnimating={loading.isAnimating} key={loading.key} /> */}
      <main>
        <article>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </article>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
