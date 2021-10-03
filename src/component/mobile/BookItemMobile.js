import React from "react";

import { Image } from "antd";

import missingImage from "../../resources/missing.png";

const BookItemMobile = ({ book }) => {
  return (
    <div style={bookItemContainerStyle}>
      <div>
        <Image
          src={book.imageUrl}
          alt={book.title}
          width="74px"
          height="90px"
          fallback={missingImage}
        />
      </div>
      <div style={bookInfoContainerStyle}>
        <p style={bookTitleStyle}>{book.title}</p>
        <p style={bookAuthorStyle}>{book.author}</p>
      </div>
    </div>
  );
};

const bookItemContainerStyle = {
  display: "flex",
  flexDirection: "row",
  margin: "0.3rem",
};

const bookInfoContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  margin: "0 0 0 0.4rem",
};

const bookTitleStyle = {
  fontFamily: "notosans_bold",
  fontSize: "0.9rem",
  color: "#000",
  margin: "0 0 0.3rem 0",
};

const bookAuthorStyle = {
  fontFamily: "notosans_medium",
  fontSize: "0.8rem",
  color: "#606060",
};

export default BookItemMobile;
