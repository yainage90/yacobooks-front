import React from "react";

import { List } from "antd";

const SuggestBox = ({ titles }) => {
  return (
    <List
      size="small"
      bordered
      dataSource={titles}
      renderItem={(item) => <List.Item>{item}</List.Item>}
      style={suggestBoxStyle}
    />
  );
};

const suggestBoxStyle = {
  width: "500px",
  fontFamily: "notosans_regular",
};

export default SuggestBox;
