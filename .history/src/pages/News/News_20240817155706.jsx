import React from 'react';
import './index.css';
import banner from '../../assets/image/banner-user-news.png';
import userIcon from '../../assets/image/User-5.png';

export default function News() {
  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <div className="row">
        <div className="col user-news position-relative">
          <div className="img-banner">
            <img src={banner} alt="news" />
          </div>
          <div className="img-icon">
            <div className="desc d-flex justify-content-between position-absolute top-50">
            <img
              style={{ width: '50px' }}
              src={userIcon}
              alt="icon"
            ></img>
              <p className="fs-5">Trường Võ</p>
              <div className="line">
                <div className="line-top"></div>
                <div className="line-bottom"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col "></div>
        <div className="col"></div>
      </div>
    </div>
  );
}
