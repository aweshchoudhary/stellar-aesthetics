import React, { useState } from "react";
import LinkBtn from "./LinkBtn";

const ReadMore = ({ children }) => {
  let text = children;
  let scrollValue;
  const [isMore, setIsMore] = useState(true);
  function toggleIsMore() {
    setIsMore(!isMore);
    if (isMore) {
      scrollValue = document.body.scrollTop;
      console.log(scrollValue);
    } else {
      document.body.scrollTo(scrollValue, 0);
    }
  }
  return (
    <>
      <p
        className={`text text-body ${
          isMore && "h-[150px] overflow-hidden text-effect"
        }`}
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
