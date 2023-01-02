import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default PageTitle;
