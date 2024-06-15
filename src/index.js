import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import FAQ from "./Components/FAQ/FAQ";
import ScrollBasedComments from "./Components/MyStory/ScrollBasedComments";
import MovingButtonsContainers from "./Components/MovingButtons/MovingButtonsContainers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/ScrollBasedComments" element={<ScrollBasedComments />} />
      <Route path="/MovingButtonsContainers" element={<MovingButtonsContainers />} />

      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
