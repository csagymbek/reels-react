import React, { useEffect, useState } from "react";
import "./styles/App.css";
import VideoCard from "./components/VideoCard";
import { database } from "./configs/firebase";

export default function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    database
      .collection("reels")
      .onSnapshot((snapshot) =>
        setReels(snapshot.docs.map((doc) => doc.data()))
      );
    // console.log(reels);
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        {/* image logo  */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt=""
          className="app__logo"
        />
      </div>
      <div className="app__videos">
        {/* scrollable container of videos  */}
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
            key={url}
          />
        ))}
      </div>
    </div>
  );
}
