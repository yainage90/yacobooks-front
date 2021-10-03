import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import { List } from "antd-mobile";

import BookItemMobile from "./BookItemMobile";

const BookItemContainer = styled.div`
  &:hover {
    background-color: #0000ff30;
  }
`;

const BookListMobile = ({ books }) => {
  return (
    <div>
      <List className="book-list">
        {books.map((book) => (
          <BookItemContainer>
            <Link key={book.isbn13} to={`/book/product/${book.isbn13}`}>
              <BookItemMobile book={book} />
            </Link>
          </BookItemContainer>
        ))}
      </List>
    </div>
  );
};

export default BookListMobile;
