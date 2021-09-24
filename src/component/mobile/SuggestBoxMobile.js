import React from "react";

import { List } from "antd-mobile";

const SuggestBox = ({ titles }) => {
  return (
    <div
      style={{
        margin: "0.3rem 0 0 0",
      }}
    >
      <List>
        {titles.slice(0, Math.min(5, titles.length)).map((title) => (
          <List.Item>
            <p
              style={{
                fontFamily: "notosans_regular",
                fontSize: "0.8rem",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {title}
            </p>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default SuggestBox;
