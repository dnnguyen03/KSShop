import React from 'react';
import "./index.css" 
import banner from "../../assets/image/banner-user-news.png"
import iconUser form "../../assets/image/User-5.png"

export default function News() {
  return (
    <div style={{paddingTop: "100px"}} className="container">
      <div className="row">
        <div className="col user-news">
          <div className="img-banner"><img src={banner} alt="news" /></div>
          <div className=""></div>
        </div>
        <div className="col "></div>
        <div className="col"></div>
      </div>
    </div>
  );
}
