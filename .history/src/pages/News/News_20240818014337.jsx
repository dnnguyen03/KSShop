import React from 'react';
import './index.css';
import Banner from '../../assets/image/banner-user-news.png';
import UserIcon from '../../assets/image/User-5.png';
import Paper from '../../assets/image/paperclip.svg';
import Send from '../../assets/image/Send.svg';

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
            className="position-absolute top-50 translate-middle-y"
            src={UserIcon}
            alt="icon"
          ></img>
        </div>
        <div className="col-6 news-mid">
          <div className="d-flex mb-3">
            <img
              style={{ width: '50px', height: '50px', marginRight: '12px' }}
              src={UserIcon}
              alt="icon"
            ></img>
            <div className="news-article">
              <p
                style={{
                  marginBottom: '12px',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  lineHeight: '19px',
                  color: '#999',
                  textOverflow: 'ellipsis',
                }}
              >
                Chia sẻ điều gì đó ...
              </p>
              <div className="d-flex justify-content-between">
                <button className="bg-transparent border-0">
                  <img src={Paper} alt="icon"></img>
                </button>
                <button className="border-0 news-send rounded-circle">
                  <img src={Send} alt="icon"></img>
                </button>
              </div>
            </div>
          </div>
          <div className="border-top">
            <img
              style={{ width: '50px', height: '50px', marginRight: '12px' }}
              src={UserIcon}
              alt="icon"
            ></img>
          </div>
        </div>
        <div className="col news-right"></div>
      </div>
    </div>
  );
}
