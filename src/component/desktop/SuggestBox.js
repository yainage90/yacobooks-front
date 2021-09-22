import React from "react";

import { Layout, List } from "antd";

const SuggestBox = ({ titles }) => {
  return (
    <Layout style={containerStyle}>
      <List
        size="small"
        bordered
        dataSource={titles}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        style={suggestBoxStyle}
      />
    </Layout>
  );
};

const containerStyle = {
  display: "flex",
  width: "500px",
};

const suggestBoxStyle = {
  width: "500px",
  fontFamily: "notosans_regular",
  background: "#eaeaea",
  position: "absolute",
  zIndex: 10,
};

export default SuggestBox;
