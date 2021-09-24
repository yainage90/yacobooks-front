import axios from "axios";
import React, { useState } from "react";

import { Pagination, Icon } from "antd-mobile";
import SearchBoxMobile from "../../component/mobile/SearchBoxMobile";
import SuggestBoxMobile from "../../component/mobile/SuggestBoxMobile";
import BookListMobile from "../../component/mobile/BookListMobile";

const jaums = new Set([
  " ",
  "ㄱ",
  "ㄴ",
  "ㄷ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅅ",
  "ㅇ",
  "ㅈ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
  "ㄳ",
  "ㄵ",
  "ㄶ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅄ",
]);

const SearchMobile = () => {
  const [suggests, setSuggests] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const isChousngQuery = (query) => {
    for (let c of query) {
      if (!jaums.has(c)) {
        return false;
      }
    }

    return true;
  };

  const onChange = async (query) => {
    if (query.length < 2) {
      setSuggests([]);
      return;
    }

    const url = isChousngQuery(query) ? "/api/book/chosung" : "/api/book/ac";

    await axios({
      url: url,
      method: "get",
      params: {
        query,
      },
    })
      .then((res) => {
        console.log(res.data.titles);
        setSuggests(res.data.titles);
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });
  };

  const onSearch = async (query, page = 1) => {
    if (query.length <= 0) {
      return;
    }

    await axios({
      url: "/api/book/search",
      method: "get",
      params: {
        query,
        page,
      },
    })
      .then((res) => {
        console.log(res.data);
        setBooks(res.data.books);
        setTotalCount(res.data.totalHits);
        setSearchedQuery(query);
        setCurrentPage(page);
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });

    setSuggests([]);
  };

  return (
    <div
      style={{
        padding: "0.6rem 0.6rem 0 0.6rem",
      }}
    >
      <SearchBoxMobile
        onChange={(query) => {
          onChange(query);
        }}
        onSearch={(query) => {
          onSearch(query);
        }}
      />
      <SuggestBoxMobile titles={suggests} />
      {books.length > 0 && (
        <>
          <BookListMobile
            books={books}
            totalCount={totalCount}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          />
          <Pagination
            mode="button"
            total={totalCount}
            current={currentPage}
            onChange={(page) => {
              onSearch(searchedQuery, page);
              setCurrentPage(page);
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
