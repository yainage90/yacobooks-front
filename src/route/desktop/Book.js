import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Image } from "antd";

import missingImage from "../../resources/missing.png";

import axios from "axios";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(Object.create({}));

  useEffect(async () => {
    await axios({
      url: `/api/book/${id}`,
      method: "get",
    })
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, id);

  return (
    <div style={layoutStyle}>
      <div
        className="book-layout"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          src={book.imageUrl}
          width="200px"
          height="260px"
          fallback={missingImage}
          style={{
            border: "1px solid #c0c0c0",
          }}
        />
        <div className="book-info-container" style={bookInfoContainerStyle}>
          <p className="title" style={titleStyle}>
            {book.title}
          </p>
          <p className="metadata" style={metaDataStyle}>
            {book.author + " | " + book.publisher + " | " + book.pubDate}
          </p>
        </div>
      </div>
      <p className="description" style={descriptionStyle}>
        {book.description}
      </p>
    </div>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1024px",
  minWidth: "300px",
  margin: "80px 0 0 0",
};

const bookInfoContainerStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "0 0 0 30px",
};

const titleStyle = {
  fontFamily: "notosans_bold",
  fontSize: "36px",
  margin: "0 0 14px 0",
  padingTop: 0,
};

const metaDataStyle = {
  fontFamily: "notosans_medium",
  fontSize: "20px",
  color: "#606060",
  margin: "0 0 10px 0",
};

const descriptionStyle = {
  fontFamily: "notosans_light",
  fontSize: "20px",
  marginTop: "30px",
};

export default Book;
