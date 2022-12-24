import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Progress from "../Components/Loader/Progress";
import useData from "../Hooks/useContext";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Progress isAnimating={loading.isAnimating} key={loading.key} /> */}
      <main>
        <article>
          <Suspense fallback={<h1>Loading</h1>}>
            <Outlet />
          </Suspense>
        </article>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
