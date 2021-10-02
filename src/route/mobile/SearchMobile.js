import React, { useContext } from "react";

import { Pagination, Icon } from "antd-mobile";
import BookListMobile from "../../component/mobile/BookListMobile";
import { onSearch } from "../../search/SearchFunctions";

import { BookSearchContext } from "../../context/BookSearchContextProvider";
import AutoComplete from "../../component/common/AutoComplete";

const SearchMobile = () => {
  const { contextDispatch } = useContext(BookSearchContext);
  const { data } = useContext(BookSearchContext);

  const { books, totalCount, currentPage, searchedQuery } = data;

  return (
    <div
      style={{
        padding: "0.6rem 0.6rem 0 0.6rem",
      }}
    >
      <AutoComplete style={autoCompleteStyle} />
      {books.length > 0 && (
        <>
          <BookListMobile books={books} />
          <Pagination
            total={totalCount / 10 + (totalCount % 10 > 0 ? 1 : 0)}
            current={currentPage}
            onChange={(page) => {
              onSearch(searchedQuery, page, contextDispatch);
            }}
            locale={{
              prevText: <Icon type="left" />,
              nextText: <Icon type="right" />,
            }}
          />
        </>
      )}
    </div>
  );
};

const autoCompleteStyle = {
  layout: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  autoComplete: {
    display: "inline-block",
    position: "relative",
    width: "100%",
  },
  searchInput: {
    border: "2px solid #22cc44",
    background: "#f1f1f1",
    padding: "10px",
    fontFamily: "notosans_regular",
    fontSize: "16px",
    width: "100%",
    height: "44px",
    background: "#fff",
  },
  suggestList: {
    position: "absolute",
    border: "1px solid #d4d4d4",
    borderBottom: "none",
    borderTop: "none",
    zIndex: 99,
    top: "100%",
    left: 0,
    right: 0,
  },
  suggestItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #d4d4d4",
  },
  searchButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px 7px 0 7px",
    background: "#22cc44",
  },
};

export default SearchMobile;
