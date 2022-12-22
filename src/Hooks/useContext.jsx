import { useContext } from "react";
import DataContext from "../Context/DataContext";

const useData = () => {
  return useContext(DataContext);
};

export default useData;
