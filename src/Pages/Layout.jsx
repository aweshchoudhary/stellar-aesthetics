import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
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
