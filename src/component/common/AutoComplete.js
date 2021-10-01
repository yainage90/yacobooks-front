import React, { useContext } from "react";
import styled from "styled-components";

import { BookSearchContext } from "../../context/BookSearchContextProvider";
import { onSearch, onChange } from "../../search/SearchFunctions";

const SearchButton = styled.button`
  background-color: #fff0;
  border: 0;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;

const SearchIcon = ({ width, height }) => {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="search"
      width={width}
      height={height}
      fill="white"
      aria-hidden="true"
    >
      <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
    </svg>
  );
};

const SuggestItem = styled.div`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #d4d4d4;
  background-color: #f9f9f9;
  &:hover {
    background-color: #e9e9e9;
  }
`;

const AutoComplete = ({ style, max }) => {
  const { contextDispatch } = useContext(BookSearchContext);

  const { data } = useContext(BookSearchContext);
  const { typedQuery, suggests } = data;

  console.log("data", data);

  const inputRef = React.createRef();

  return (
    <div style={style.layout}>
      <div class="autoComplete" style={style.autoComplete}>
        <input
          id="search_input"
          type="text"
          placeholder="검색"
          onChange={(e) => {
            const query = e.target.value;
            onChange(query, contextDispatch);
          }}
          style={style.searchInput}
          ref={inputRef}
        />
        {suggests && (
          <div id="suggest-list" class="suggests" style={style.suggestList}>
            {suggests.splice(0, Math.min(5, suggests.length)).map((suggest) => (
              <SuggestItem
                className="suggest-item"
                onClick={() => {
                  inputRef.current.value = suggest;
                  onSearch(suggest, 1, contextDispatch);
                }}
              >
                {suggest}
                <input type="hidden" value={suggest} />
              </SuggestItem>
            ))}
          </div>
        )}
      </div>
      <div style={style.searchButton}>
        <SearchButton
          onClick={() => {
            onSearch(typedQuery, 1, contextDispatch);
          }}
        >
          <SearchIcon width="24px" height="24px" />
        </SearchButton>
      </div>
    </div>
  );
};

export default AutoComplete;
