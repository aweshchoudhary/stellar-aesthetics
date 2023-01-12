import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import menuLink from "./menu.json";

const SearchBox = ({ setToggle }) => {
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 0) {
      const filterSuggestions = data.filter((suggestion) => {
        return (
          suggestion?.search?.toLowerCase()?.indexOf(query) > -1 ||
          suggestion.label.toLowerCase().indexOf(query) > -1
        );
      });
      console.log({ filteredData: filterSuggestions, allData: data });
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (link) => {
    setSuggestions([]);
    navigate(link);
    setValue("");
    setSuggestionsActive(false);
    setToggle && setToggle(false);
  };

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue("");
      navigate(suggestions[suggestionIndex].link);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
      setToggle && setToggle(false);
    }
  };

  const Suggestions = () => {
    return (
      <ul className="suggestions border absolute bg-white top-full mt-1 shadow-md md:shadow-xl z-50 p-3  md:w-[400px]">
        {suggestions.length ? (
          <p className="text-gray-500">Search Term Match</p>
        ) : null}
        {suggestions.length ? (
          suggestions.map((suggestion, index) => {
            return (
              <li
                className={`${
                  index === suggestionIndex
                    ? "active text-primary   bg-gray-50"
                    : ""
                } list-none p-2 md:text-lg w-full capitalize text-h-primary hover:bg-gray-50 block cursor-pointer`}
                key={index}
                onClick={() => handleClick(suggestion.link)}
              >
                {suggestion.label}
              </li>
            );
          })
        ) : (
          <li className="list-none p-2 md:text-lg w-full capitalize">
            No Search Results
          </li>
        )}
      </ul>
    );
  };

  // UseEffect Clean Up
  const componentWillUnmount = useRef(false);

  useEffect(() => {
    const planeArr = () => {
      menuLink.forEach((item) => {
        setData((prev) => [...prev, item]);
        if (item.submenu) {
          item.submenu.forEach((subItem) => {
            if (subItem.label) {
              setData((prev) => [...prev, subItem]);
            }
            if (subItem.items) {
              subItem.items.forEach((subsubItem) => {
                setData((prev) => [...prev, subsubItem]);
              });
            }
          });
        }
      });
    };
    componentWillUnmount && planeArr();
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);

  return (
    <div className="relative">
      <div
        id="search-container"
        className="search bg-gray-50 py-3 gap-3 rounded-full  pl-5 pr-2 shrink-0 flex items-center justify-between"
      >
        <div className="icon text-xl text-gray-400 rounded-full">
          <Icon icon="tabler:search" />
        </div>
        <input
          type="search"
          id="search-input"
          placeholder={"Search Courses, etc..."}
          className="w-full h-full bg-transparent outline-none"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {suggestionsActive && isFocus && <Suggestions />}
    </div>
  );
};

export default SearchBox;
