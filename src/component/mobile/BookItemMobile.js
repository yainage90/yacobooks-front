import React from "react";

import { Image } from "antd";

import missingImage from "../../resources/missing.png";

const BookItemMobile = ({ book }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "0.3rem",
      }}
    >
      <div>
        <Image
          src={book.imageUrl}
          width="74"
          height="90px"
          fallback={missingImage}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          margin: "0 0 0 0.4rem",
        }}
      >
        <p
          style={{
            fontFamily: "notosans_bold",
            fontSize: "0.9rem",
            margin: "0 0 0.3rem 0",
          }}
        >
          {book.title}
        </p>
        <p
          style={{
            fontFamily: "notosans_medium",
            fontSize: "0.8rem",
            color: "#606060",
          }}
        >
          {book.author}
        </p>
      </div>
    </div>
  );
};

export default BookItemMobile;
