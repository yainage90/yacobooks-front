import React from "react";

import { SearchBar } from "antd-mobile";

const SearchBoxMobile = ({ onSearch, onChange }) => {
  return (
    <div
      style={{
        margin: "0.2rem 0 0.6rem 0",
        border: "2px solid #06f",
      }}
    >
      <SearchBar
        placeholder="검색"
        onChange={onChange}
        onSubmit={onSearch}
        cancelText=" "
      />
    </div>
  );
};

export default SearchBoxMobile;
