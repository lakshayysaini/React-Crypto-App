import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";

import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes"></div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
