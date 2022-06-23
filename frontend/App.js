import "regenerator-runtime/runtime";
import React from "react";
import "./assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Header from "./components/header";
import ArticleComponent from "./components/article";
import MyArticles from "./components/myArticles";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="homePageContainer">
        <Header />
        {window.walletConnection.isSignedIn() ? (
          <Routes>
            <Route exact path="/" element={<ArticleComponent />}></Route>
            <Route exact path="/my-articles" element={<MyArticles />}></Route>
          </Routes>
        ) : (
          <Home />
        )}
      </div>
    </Router>
  );
}
