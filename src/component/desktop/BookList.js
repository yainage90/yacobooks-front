import React from "react";

import { List } from "antd";
import Layout from "antd/lib/layout/layout";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  console.log(books);

  return (
    <Layout class="book-list-container" style={bookListContainerStyle}>
      <List
        size="large"
        dataSource={books}
        renderItem={(book) => <BookItem book={book} />}
        style={{
          width: "100%",
          maxWidth: "1024px",
        }}
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

export default BookList;
