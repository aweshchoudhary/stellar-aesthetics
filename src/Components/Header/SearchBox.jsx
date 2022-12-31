import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuLink from "./menu.json";

const SearchBox = () => {
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 0) {
      const filterSuggestions = data.filter(
        (suggestion) => suggestion.label.toLowerCase().indexOf(query) > -1
      );
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
    console.log("clicked");
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
    }
  };

  const Suggestions = () => {
    return (
      <ul className="suggestions border absolute bg-white top-full mt-1 shadow-md md:shadow-xl z-50 p-3  md:w-[400px]">
        {suggestions.length ? (
          suggestions.map((suggestion, index) => {
            return (
              <li
                className={`${
                  index === suggestionIndex
                    ? "active text-primary bg-gray-50"
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
  useEffect(() => {
    const planeArr = () => {
      menuLink.forEach((item) => {
        setData((prev) => [...prev, { label: item.label, link: item.link }]);
        if (item.submenu) {
          item.submenu.forEach((subItem) => {
            if (subItem.label) {
              setData((prev) => [
                ...prev,
                { label: subItem.label, link: subItem.link },
              ]);
            }
            if (subItem.items) {
              subItem.items.forEach((subsubItem) => {
                setData((prev) => [
                  ...prev,
                  { label: subsubItem.label, link: subsubItem.link },
                ]);
              });
            }
          });
        }
      });
    };

    return () => {
      planeArr();
    };
  }, []);

  return (
    <div className="relative">
      <div className="search bg-gray-50 py-2 gap-3 rounded-full  pl-5 pr-2 shrink-0 flex items-center justify-between">
        <input
          type="search"
          placeholder="Search Courses, etc..."
          className="w-full h-full bg-transparent outline-none"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
        <div className="icon p-2 text-2xl bg-primary text-white rounded-full">
          <Icon icon="tabler:search" />
        </div>
      </div>
      {suggestionsActive && <Suggestions />}
    </div>
  );
};

export default SearchBox;
