import React from 'react';
import "./index.css" 
import banner from "../../assets/image/banner-user-news.png"

export default function News() {
  return (
    <div className="container">
      <div class="row">
        <div class="col mt-5 user-news">
          <image src={banner} alt="news" />
        </div>
        <div class="col mt-5"></div>
        <div class="col mt-5"></div>
      </div>
    </div>
  );
}
