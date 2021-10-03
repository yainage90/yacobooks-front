import React from "react";

import { List, Image } from "antd";

import missingImage from "../../resources/missing.png";

const BookItem = ({ book }) => {
  return (
    <List.Item key={book.isbn13}>
      <div style={itemContainerStyle}>
        <div>
          <Image
            src={book.imageUrl}
            width="100px"
            height="130px"
            fallback={missingImage}
            preview={false}
          />
        </div>
        <div style={bookInfoContainerStyle}>
          <p style={titleStyle}>{book.title}</p>
          <p style={metaDataStyle}>
            {book.author + " | " + book.publisher + " | " + book.pubDate}
          </p>
          <p style={descriptionStyle}>{book.description}</p>
        </div>
      </div>
    </List.Item>
  );
};

const itemContainerStyle = {
  display: "flex",
  flexDirection: "row",
};

const bookInfoContainerStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "0 0 0 30px",
  maxWidth: "900px",
};

const titleStyle = {
  fontFamily: "notosans_bold",
  fontSize: "18px",
  margin: "0 0 10px 0",
};

const metaDataStyle = {
  fontFamily: "notosans_medium",
  fontSize: "15px",
  color: "#606060",
  margin: "0 0 10px 0",
};

const descriptionStyle = {
  fontFamily: "notosans_light",
  fontSize: "14px",
};

export default BookItem;
