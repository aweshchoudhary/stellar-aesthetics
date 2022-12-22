import React, { createContext, useState } from "react";

const dataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState({
    isAnimating: false,
    key: 0,
  });
  const [coursePage, setCoursePage] = useState({});

  return (
    <dataContext.Provider
      value={{ loading, setLoading, coursePage, setCoursePage }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default dataContext;
