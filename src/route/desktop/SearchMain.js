import axios from "axios";
import React, { useState } from "react";

import SearchBox from "../../component/desktop/SearchBox";

import { Layout, Pagination } from "antd";
import SuggestBox from "../../component/desktop/SuggestBox";
import BookList from "../../component/desktop/BookList";

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

const SearchMain = () => {
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

  const onChange = async (e) => {
    const query = e.target.value;

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
    <Layout className="container" style={layoutStyle}>
      <Layout style={contentStyle}>
        <SearchBox
          size="large"
          placeholder="검색어를 입력해주세요"
          style={searchBoxStyle}
          onChange={(e) => {
            onChange(e);
          }}
          onSearch={(query) => {
            onSearch(query);
          }}
        />
        {suggests.length > 0 && <SuggestBox titles={suggests} />}
        {books.length > 0 && (
          <>
            <BookList
              books={books}
              totalCount={totalCount}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={totalCount}
              onChange={(page) => {
                onSearch(searchedQuery, page);
                setCurrentPage(page);
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
