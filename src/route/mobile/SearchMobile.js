import React, { useContext } from "react";

import { Pagination, Icon } from "antd-mobile";
import SearchBoxMobile from "../../component/mobile/SearchBoxMobile";
import SuggestBoxMobile from "../../component/mobile/SuggestBoxMobile";
import BookListMobile from "../../component/mobile/BookListMobile";
import { onSearch, onChange } from "../../search/SearchFunctions";

import { BookSearchContext } from "../../context/BookSearchContextProvider";

const SearchMobile = () => {
  const { contextDispatch } = useContext(BookSearchContext);
  const { data } = useContext(BookSearchContext);

  const { books, totalCount, currentPage, query, suggests } = data;

  return (
    <div
      style={{
        padding: "0.6rem 0.6rem 0 0.6rem",
      }}
    >
      <SearchBoxMobile
        onChange={(query) => {
          onChange(query, contextDispatch);
        }}
        onSearch={(query) => {
          onSearch(query, 1, contextDispatch);
        }}
      />
      <SuggestBoxMobile titles={suggests} />
      {books.length > 0 && (
        <>
          <BookListMobile books={books} />
          <Pagination
            mode="button"
            total={totalCount}
            current={currentPage}
            onChange={(page) => {
              onSearch(query, page, contextDispatch);
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

export default SearchMobile;
