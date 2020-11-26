import React from "react";
import "./styles/App.css";
import VideoCard from "./components/VideoCard";

export default function App() {
  return (
    <div className="app">
      <div className="app__top">
        {/* image logo  */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt=""
          className="app__logo"
        />
        {/* reels text  */}
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {/* scrollable container of videos  */}
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}
