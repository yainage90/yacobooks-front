import React, { useContext } from "react";

import SearchBox from "../../component/desktop/SearchBox";

import { Layout, Pagination } from "antd";
import SuggestBox from "../../component/desktop/SuggestBox";
import BookList from "../../component/desktop/BookList";

import { BookSearchContext } from "../../context/BookSearchContextProvider";

import { onChange, onSearch } from "../../search/SearchFunctions";

const SearchMain = () => {
  const { contextDispatch } = useContext(BookSearchContext);
  const { data } = useContext(BookSearchContext);

  const { books, totalCount, currentPage, query, suggests } = data;

  return (
    <Layout className="container" style={layoutStyle}>
      <Layout style={contentStyle}>
        <SearchBox
          size="large"
          placeholder="검색어를 입력해주세요"
          style={searchBoxStyle}
          onChange={(e) => {
            onChange(e.target.value, contextDispatch);
          }}
          onSearch={(query) => {
            onSearch(query, 1, contextDispatch);
          }}
        />
        {suggests.length > 0 && <SuggestBox titles={suggests} />}
        {books.length > 0 && (
          <>
            <BookList books={books} />
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={totalCount}
              onChange={(page) => {
                onSearch(query, page, contextDispatch);
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

const searchBoxStyle = {
  width: "50%",
  maxWidth: "600px",
  marginTop: "50px",
  marginBottom: "50px",
};

export default SearchMain;
