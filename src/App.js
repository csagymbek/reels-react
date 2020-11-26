import React from "react";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app">
      <div className="app__top">
        {/* image logo  */}
        <img
          src="https://1000logos.net/wp-content/uploads/2019/07/Instagram-Logo-2016%E2%80%93present.jpg"
          alt=""
          className="app__logo"
        />
        {/* reels text  */}
        <h1>Reels</h1>
      </div>
      <div className="app__videos">{/* scrollable container of videos  */}</div>
    </div>
  );
}
