import React from 'react';
import "./index.css" 
import banner from "../../assets/image/banner-user-news.png"

export default function News() {
  return (
    <div className="container pt-5">
      <div class="row">
        <div class="col user-news">
          <img src={banner} alt="news" />

        </div>
        <div class="col "></div>
        <div class="col mt-5"></div>
      </div>
    </div>
  );
}
