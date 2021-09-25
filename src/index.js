import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd-mobile/dist/antd-mobile.css";

import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
