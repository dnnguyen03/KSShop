import React from 'react';
import "./index.css" 
import banner from "../../assets/image/banner-user-news.png"

export default function News() {
  return (
    <div style={{paddingTop: "100px"}} className="container">
      <div className="row">
        <div className="col user-news">
          <img src={banner} alt="news" />

        </div>
        <div className="col "></div>
        <div className="col"></div>
      </div>
    </div>
  );
}
