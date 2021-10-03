import React from "react";

import { Link } from "react-router-dom";

import { List } from "antd-mobile";

import BookItemMobile from "./BookItemMobile";

const BookListMobile = ({ books }) => {
  return (
    <div>
      <List className="book-list">
        {books.map((book) => (
          <Link key={book.isbn13} to={`/book/product/${book.isbn13}`}>
            <BookItemMobile book={book} />
          </Link>
        ))}
      </List>
    </div>
  );
};

export default BookListMobile;
