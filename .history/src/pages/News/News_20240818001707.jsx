import React from 'react'
import './index.css'
import Banner from '../../assets/image/banner-user-news.png'
import UserIcon from '../../assets/image/User-5.png'
import Paper from '../../assets/image/paperclip.svg'

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
        <div className="col-6 news-mid d-flex">
          <img style={{ width: '50px', height: '50px', marginRight: '12px'}} src={UserIcon} alt="icon"></img>
          <div className='news-article'>
          <p
            style={{
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '19px',
              color: '#999',
              textOverflow: 'ellipsis'
            }}
          >
            Chia sẻ điều gì đó ...
          </p>
          <button>
            <img src={Paper} alt="icon"></img>  
          </button>
          </div>
        </div>
        <div className="col news-right"></div>
      </div>
    </div>
  );
}
