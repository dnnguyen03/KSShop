import React from 'react';
import './index.css';
import Banner from '../../assets/image/banner-user-news.png';
import UserIcon from '../../assets/image/User-5.png';

export default function News() {
  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <div className="row">
        <div className="col news-left position-relative">
          <div className="img-banner">
            <img src={Banner} alt="news" />
          </div>
          <div className="info">
            <h3 className="fs-5">Trường Võ</h3>
            <p>Người dùng</p>
          </div>
          <img
            style={{ width: '50px' }}
            className="position-absolute top-50"
            src={UserIcon}
            alt="icon"
          ></img>
        </div>
        <div className="col news-mid">
          <img style={{ width: '50px' }} src={UserIcon} alt="icon"></img>
          <p style={{ fontSize: "14px", fontStyle: "normal", fontWeight: "500", lineHeight: "19px" }}>Chia sẻ điều gì đó ...</p>
        </div>
        <div className="col news-right"></div>
      </div>
    </div>
  );
}
