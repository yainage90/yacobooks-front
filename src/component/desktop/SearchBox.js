import React from "react";

import { Input } from "antd";

const { Search } = Input;

const SearchBox = ({
  size,
  onSearch,
  onChange,
  placeholder,
  searchBoxStyle,
}) => {
  return (
    <Search
      placeholder={placeholder}
      enterButton="검색"
      size={size}
      onChange={onChange}
      onSearch={onSearch}
      style={searchBoxStyle || defaultStyle}
    />
  );
};

const defaultStyle = {
  width: "500px",
  maxWidth: "800px",
  minWidth: "300px",
  fontSize: "larger",
  fontFamily: "notosans_bold",
  color: "#444444",
  margin: "50px 50px 0 50px",
};

export default SearchBox;
