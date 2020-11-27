import React from "react";
import "../styles/VideoHeader.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

export default function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosIcon />
      <h3>Reels</h3>
      <CameraAltOutlinedIcon />
    </div>
  );
}
