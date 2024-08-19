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
          <div className="info d-flex justify-content-evenly position-absolute top-50">
            <img style={{ width: '50px' }} src={userIcon} alt="icon"></img>
            <h3 className="fs-5">Trường Võ</h3>
            <div className="line" style={{ width: '61px', height: '4px' }}>
              <div className="line-top"></div>
              <div className="line-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
