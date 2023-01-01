import React, { useState } from "react";
import LinkBtn from "./LinkBtn";

const ReadMore = ({ children }) => {
  let text = children;
  const [isMore, setIsMore] = useState(true);
  const [scrollValue, setScrollValue] = useState(null);
  function toggleIsMore() {
    setIsMore(!isMore);
    if (isMore) {
      setScrollValue(document.body.scrollTop);
      console.log(scrollValue);
    } else {
      document.body.scrollTop = scrollValue;
    }
  }

  return (
    <>
      <div
        className={`text text-body ${
          isMore && "h-[150px] overflow-hidden text-effect"
        }`}
      >
        {text}
      </div>
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
