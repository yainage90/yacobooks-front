import React, { useContext } from "react";

import { Layout, Pagination } from "antd";
import BookList from "../../component/desktop/BookList";

import { BookSearchContext } from "../../context/BookSearchContextProvider";

import { onSearch } from "../../search/SearchFunctions";

import AutoComplete from "../../component/common/AutoComplete";

const SearchMain = () => {
  const { contextDispatch } = useContext(BookSearchContext);
  const { data } = useContext(BookSearchContext);

  const { books, totalCount, currentPage, searchedQuery } = data;

  return (
    <Layout className="container" style={layoutStyle}>
      <Layout style={contentStyle}>
        <AutoComplete style={autoCompleteStyle} />
        {books.length > 0 && (
          <>
            <BookList books={books} />
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={totalCount}
              onChange={(page) => {
                onSearch(searchedQuery, page, contextDispatch);
              }}
              showSizeChanger={false}
            />
          </>
        )}
      </Layout>
    </Layout>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "row",
  width: "70%",
  maxWidth: "100%",
  minWidth: "300px",
  height: "100%",
  minHeight: "600px",
  overflow: "auto",
  background: "#fff",
  fontFamily: "notosans_light",
  fontSize: "15px",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  maxWidth: "1920px",
  minWidth: "800px",
  width: "100%",
  background: "white",
  padding: "50px",
};

const autoCompleteStyle = {
  layout: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minWidth: "300px",
    maxWidth: "600px",
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
    height: "56px",
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
    padding: "3px 14px 0 14px",
    background: "#22cc44",
  },
};

export default SearchMain;
