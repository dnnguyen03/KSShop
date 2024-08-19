import React from 'react';
import './News.css';
import Banner from '../../assets/image/banner-user-news.png';
import UserIcon from '../../assets/image/User-5.png';
import Paper from '../../assets/image/paperclip.svg';
import Send from '../../assets/image/Send.svg';
import SendBlack from '../../assets/image/Send-black.svg';
import Like from '../../assets/image/Like.svg';
import Comment from '../../assets/image/Comment.svg';
import Repost from '../../assets/image/Repost.svg';
import Dots from '../../assets/image/Dots.svg';
import CarouselImage1 from '../../assets/image/img-news.png';

export default function News() {
  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <div className="row">
        <div className="col">
          <div className="row news-left position-relative">
            <div className="img-banner">
              <img src={Banner} alt="news" />
            </div>
            <div className="info">
              <h3 className="fs-5">Trường Võ</h3>
              <p>Người dùng</p>
            </div>
            <img
              style={{ width: '70px' }}
              className="position-absolute top-50 translate-middle-y"
              src={UserIcon}
              alt="icon"
            ></img>
          </div>
        </div>
        <div className="col news-mid">
          <div className="d-flex mb-3">
            <img
              style={{
                width: '50px',
                height: '50px',
                marginRight: '12px',
                objectFit: 'cover',
                borderRadius: '100rem',
              }}
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

          <div className="border-top pt-3 d-flex mb-3">
            <img
              style={{
                width: '50px',
                height: '50px',
                marginRight: '12px',
                objectFit: 'cover',
                borderRadius: '100rem',
              }}
              src={UserIcon}
              alt="icon"
            ></img>
            <div className="news-article">
              <div className="d-flex justify-content-between">
                <h4
                  style={{
                    marginBottom: '9px',
                    fontSize: '14px',
                    fontWeight: '500',
                    fontStyle: 'normal',
                    lineHeight: '19px',
                    color: '#000',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Võ Phạm Khánh Trường
                </h4>
                <div className="d-flex justify-content-between gap-2">
                  <p
                    style={{
                      marginBottom: '12px',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      lineHeight: '19px',
                      color: '#999999',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    2 phút
                  </p>
                  <button className="bg-transparent border-0">
                    <img
                      src={Dots}
                      alt="icon"
                      style={{
                        marginBottom: '12px',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        lineHeight: '19px',
                        color: '#000',
                        textOverflow: 'ellipsis',
                      }}
                    ></img>
                  </button>
                </div>
              </div>

              <p
                style={{
                  marginBottom: '12px',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  lineHeight: '19px',
                  color: '#000',
                  textOverflow: 'ellipsis',
                }}
              >
                Tôi rất vui được chia sẻ với bạn những sản phẩm mới nhất của tôi
              </p>
              <div className="d-flex gap-3 align-content-center">
                <div className="d-flex gap-2">
                  <button className="bg-transparent border-0">
                    <img src={Like} alt="icon"></img>
                  </button>
                </div>
                <div className="d-flex gap-2">
                  <button className="bg-transparent border-0">
                    <img src={Comment} alt="icon"></img>
                  </button>
                  <p className="text-center m-0">1</p>
                </div>
                <button className="bg-transparent border-0">
                  <img src={Repost} alt="icon"></img>
                </button>
                <button className="bg-transparent border-0">
                  <img src={SendBlack} alt="icon"></img>
                </button>
              </div>
            </div>
          </div>

          <div className="border-top pt-3 d-flex mb-3">
            <img
              style={{
                width: '50px',
                height: '50px',
                marginRight: '12px',
                objectFit: 'cover',
                borderRadius: '100rem',
              }}
              src={UserIcon}
              alt="icon"
            ></img>
            <div className="news-article">
              <div className="d-flex justify-content-between">
                <h4
                  style={{
                    marginBottom: '9px',
                    fontSize: '14px',
                    fontWeight: '500',
                    fontStyle: 'normal',
                    lineHeight: '19px',
                    color: '#000',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Võ Phạm Khánh Trường
                </h4>
                <div className="d-flex justify-content-between gap-2">
                  <p
                    style={{
                      marginBottom: '12px',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      lineHeight: '19px',
                      color: '#999999',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    1 phút
                  </p>
                  <button className="bg-transparent border-0">
                    <img
                      src={Dots}
                      alt="icon"
                      style={{
                        marginBottom: '12px',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        lineHeight: '19px',
                        color: '#000',
                        textOverflow: 'ellipsis',
                      }}
                    ></img>
                  </button>
                </div>
              </div>

              <p
                style={{
                  marginBottom: '12px',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  lineHeight: '19px',
                  color: '#000',
                  textOverflow: 'ellipsis',
                }}
              >
                Tôi rất vui được chia sẻ với bạn những sản phẩm mới nhất của tôi
              </p>
              <img src={CarouselImage1} alt="Carousel"></img>
              <div
                className="d-flex gap-3 align-content-center"
                style={{ marginTop: '12px' }}
              >
                <div className="d-flex gap-2">
                  <button className="bg-transparent border-0">
                    <img src={Like} alt="icon"></img>
                  </button>
                </div>
                <div className="d-flex gap-2">
                  <button className="bg-transparent border-0">
                    <img src={Comment} alt="icon"></img>
                  </button>
                  <p className="text-center m-0">1</p>
                </div>
                <button className="bg-transparent border-0">
                  <img src={Repost} alt="icon"></img>
                </button>
                <button className="bg-transparent border-0">
                  <img src={SendBlack} alt="icon"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col" style={{ padding: '0' }}>
          <div className="row news-right">
            <p
              style={{
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                textAlign: 'center',
              }}
            >
              Những người bạn có thể biết:
            </p>
            <div className="pt-3 d-flex mb-3">
              <img
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '12px',
                  objectFit: 'cover',
                  borderRadius: '100rem',
                }}
                src={UserIcon}
                alt="icon"
              ></img>
              <div className="news-article ml-2">
                <div className="d-flex justify-content-between">
                  <h4
                    style={{
                      marginBottom: '9px',
                      fontSize: '14px',
                      fontWeight: '500',
                      fontStyle: 'normal',
                      lineHeight: '19px',
                      color: '#000',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Võ Phạm Khánh Trường
                  </h4>
                </div>

                <p
                  style={{
                    marginBottom: '12px',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    lineHeight: '19px',
                    fontWeight: '300',
                    color: '#000',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Dirty Coins
                </p>
              </div>
              <button className="bg-transparent border-0">
                type="button"
                style={{
                  padding: '10px',
                  borderRadius: '4px',
                  color: '#000',
                  textAlign: 'center',
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '7px',
                  width: '64.872px',
                  height: '32px',
                }}
              >
                Kết bạn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
