import React from "react";

import { List } from "antd-mobile";

import BookItemMobile from "./BookItemMobile";

const BookListMobile = ({ books }) => {
  return (
    <div>
      <List className="book-list">
        {books.map((book) => (
          <BookItemMobile book={book} />
        ))}
      </List>
    </div>
  );
};

export default BookListMobile;
