import React from "react";

import { List } from "antd-mobile";

const SuggestBox = ({ titles }) => {
  return (
    <div class="suggest-container" style={suggestContainerStyle}>
      <List className="suggest-list">
        {titles.slice(0, Math.min(5, titles.length)).map((title) => (
          <List.Item>
            <p style={suggestItemStyle}>{title}</p>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

const suggestContainerStyle = {
  margin: "0.3rem 0 0 0",
};

const suggestItemStyle = {
  fontFamily: "notosans_regular",
  fontSize: "0.8rem",
  margin: 0,
  whiteSpace: "pre-line",
};

export default SuggestBox;
