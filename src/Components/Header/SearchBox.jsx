import { Icon } from "@iconify/react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="search bg-gray-50 py-2 rounded-full  pl-5 pr-2 shrink-0 flex items-center justify-between">
      <input
        type="search"
        placeholder="Search Courses, etc..."
        name=""
        id=""
        className="w-full h-full bg-transparent outline-none"
      />
      <div className="icon p-2 text-2xl bg-primary text-white rounded-full">
        <Icon icon="tabler:search" />
      </div>
    </div>
  );
};

export default SearchBox;
