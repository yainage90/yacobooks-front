import axios from "axios";
import React, { useState } from "react";

import SearchBox from "../../component/desktop/SearchBox";

import { Layout } from "antd";
import SuggestBox from "../../component/desktop/SuggestBox";

const SearchMain = () => {
  const [suggests, setSuggests] = useState([]);

  const onChange = async (e) => {
    const query = e.target.value;
    await axios({
      url: "/api/book/ac",
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
    await axios({
      url: "/api/book/search",
      method: "get",
      params: {
        query,
        page,
      },
    })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });
  };

  return (
    <Layout className="container" style={layoutStyle}>
      <Layout style={contentStyle}>
        <SearchBox
          size="large"
          placeholder="검색어를 입력해주세요"
          style={{
            width: "50%",
            maxWidth: "600px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
          onChange={(e) => {
            onChange(e);
          }}
          onSearch={(query) => {
            onSearch(query);
          }}
        />
        <SuggestBox titles={suggests} />
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

export default SearchMain;
