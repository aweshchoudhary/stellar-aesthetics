import React, { useState } from "react";
import LinkBtn from "./LinkBtn";

const ReadMore = ({ children }) => {
  let text = children;
  const [isMore, setIsMore] = useState(true);
  function toggleIsMore() {
    setIsMore(!isMore);
  }
  return (
    <>
      <p
        className={`text ${isMore && "h-[150px] overflow-hidden text-effect"}`}
      >
        {text}
      </p>
      <br />
      <span onClick={toggleIsMore} className="read-or-hide">
        {isMore ? (
          <LinkBtn label={"Show More"} />
        ) : (
          <LinkBtn label={"Show Less"} />
        )}
      </span>
    </>
  );
};

export default ReadMore;
