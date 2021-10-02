import React from "react";

import { List } from "antd";
import Layout from "antd/lib/layout/layout";
import BookItem from "./BookItem";

import { Link } from "react-router-dom";
import styled from "styled-components";

const BookItemContainer = styled.div`
  &:hover {
    background-color: #0000ff30;
  }
`;

const BookList = ({ books }) => {
  console.log(books);

  return (
    <Layout class="book-list-container" style={bookListContainerStyle}>
      <List
        size="large"
        dataSource={books}
        renderItem={(book) => (
          <BookItemContainer>
            <Link key={book.isbn13} to={`/book/${book.isbn13}`}>
              <BookItem book={book} />
            </Link>
          </BookItemContainer>
        )}
      />
    </Layout>
  );
};

const bookListContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "5%",
};

export default BookList;
