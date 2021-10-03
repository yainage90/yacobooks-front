import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Image } from "antd";

import missingImage from "../../resources/missing.png";

import axios from "axios";

const BookMobile = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

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
    book && (
      <div style={layoutStyle}>
        <div style={imageContainerStyle}>
          <Image
            src={book.imageUrl}
            width="160px"
            height="220px"
            fallback={missingImage}
            style={{
              border: "1px solid #c0c0c0",
            }}
          />
        </div>
        <div className="book-info-container" style={bookInfoContainerStyle}>
          <p className="title" style={titleStyle}>
            {book.title}
          </p>
          <p className="metadata" style={metaDataStyle}>
            {book.author + " | " + book.publisher + " | " + book.pubDate}
          </p>
          <p className="description" style={descriptionStyle}>
            {book.description}
          </p>
        </div>
      </div>
    )
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "20px 10px 10px 10px",
};

const bookInfoContainerStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "10px 10px 0 10px",
};

const titleStyle = {
  fontFamily: "notosans_bold",
  fontSize: "20px",
  margin: "0 0 10px 0",
  padingTop: 0,
};

const metaDataStyle = {
  fontFamily: "notosans_medium",
  fontSize: "14px",
  color: "#606060",
  margin: "0 0 10px 0",
};

const descriptionStyle = {
  fontFamily: "notosans_light",
  fontSize: "12px",
  marginTop: "20px",
};

export default BookMobile;
