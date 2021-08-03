import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./section1/App";
import Clock from "./section2/clock";
import Cards from "./section3/cards";
import About from "./section4/about";
import Footer from "./section5/footer";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock />
    <Cards />
    <About />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
