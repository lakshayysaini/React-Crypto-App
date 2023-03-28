import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>{" "}
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />{" "}
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies simplified={undefined} />}
              />{" "}
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route
                path="/news"
                element={<News simplified={undefined} />}
              />{" "}
            </Routes>{" "}
          </div>{" "}
        </Layout>{" "}
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            KryptoWorld <br />
            All Rights Reserved.{" "}
          </Typography.Title>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default App;
