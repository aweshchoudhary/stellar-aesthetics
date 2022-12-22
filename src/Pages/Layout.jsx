import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Progress from "../Components/Loader/Progress";
import useData from "../Hooks/useContext";

const Layout = () => {
  const { loading } = useData();
  return (
    <>
      <Header />
      {/* <Progress isAnimating={loading.isAnimating} key={loading.key} /> */}
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
