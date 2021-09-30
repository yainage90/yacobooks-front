import React, { useContext } from "react";

import { Input, AutoComplete } from "antd";

import { BookSearchContext } from "../../context/BookSearchContextProvider";

import { onChange, onSearch } from "../../search/SearchFunctions";

const SearchBox = () => {
  const { contextDispatch } = useContext(BookSearchContext);
  const { data } = useContext(BookSearchContext);

  const { suggests } = data;

  console.log(suggests);

  return (
    <AutoComplete
      style={defaultStyle}
      options={suggests.map((suggest, index) => ({
        key: index,
        value: suggest,
        label: suggest,
      }))}
      onSelect={(value) => {
        onSearch(value, 1, contextDispatch);
      }}
    >
      <Input.Search
        size="large"
        placeholder={"검색어를 입력하세요"}
        enterButton
        onSearch={(value) => {
          onSearch(value, 1, contextDispatch);
        }}
        onChange={(e) => {
          onChange(e.target.value, contextDispatch);
        }}
        allowClear
      />
    </AutoComplete>
  );
};

const defaultStyle = {
  width: "100%",
  maxWidth: "600px",
  minWidth: "300px",
  fontSize: "larger",
  fontFamily: "notosans_bold",
  color: "#444444",
  margin: "50px 50px 0 50px",
};

export default SearchBox;
