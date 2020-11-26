import React, { useRef, useState } from "react";
import "../styles/VideoCard.css";
import VideoHeader from "./VideoHeader";

export default function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        src="https://scontent-sjc3-1.cdninstagram.com/v/t50.2886-16/124849611_1990703037738303_1273576629200824426_n.mp4?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Zk_MNHQdhJAAX-7HCBK&oe=5FC25D11&oh=1115824909ccd5e7f718633c3c1333e0"
        loop
        className="videoCard__player"
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
    </div>
  );
}
