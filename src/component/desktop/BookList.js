import React from "react";

import { Table, Image } from "antd";
import Layout from "antd/lib/layout/layout";

import missingImage from "../../resources/missing.png";

const BookList = ({ books }) => {
  const columns = [
    {
      title: <p style={tableColumnsTitleStyle}>사진</p>,
      dataIndex: "imageUrl",
      render: (src) => (
        <Image
          preview={false}
          width="100px"
          height="130px"
          src={src}
          fallback={missingImage}
        />
      ),
    },
    {
      title: <p style={tableColumnsTitleStyle}>제목</p>,
      dataIndex: "title",
      render: (text) => <p style={tableDataFontStyle}>{text}</p>,
    },
  ];

  const data = books.map((book, index) => ({
    key: index,
    title: book.title,
    imageUrl: book.imageUrl,
  }));

  return (
    <Layout class="book-list-container" style={bookListContainerStyle}>
      <Table
        showHeader={false}
        columns={columns}
        pagination={{ position: "bottomCenter" }}
        dataSource={data}
        style={{
          fontFamily: "notosans_medium",
        }}
        size="large"
      />
    </Layout>
  );
};

const bookListContainerStyle = {
  display: "flex",
  flexDirection: "column",
  //width: "70%",
  alignItems: "center",
  paddingTop: "5%",
};

const tableColumnsTitleStyle = {
  margin: "0 0",
  fontFamily: "notosans_bold",
  fontSize: "1.1rem",
};

const tableDataFontStyle = {
  margin: "0 0",
  fontFamily: "notosans_medium",
  fontSize: "1.1rem",
};

export default BookList;
