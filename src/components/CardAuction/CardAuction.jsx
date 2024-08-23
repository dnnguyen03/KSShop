import React from 'react'
import './CardAuction.css'
import menu_img from '../../assets/image/menu.png'

export default function CardAuction(props) {
  const {img, title, startprice, stepprice, startTime, endTime,Solandaugia} = props
  return (
    <div className="CardAuction col-md-4">
      <div className="img-menu">
        <img src={img} alt=""/>
      </div>
      <h4 className="nameAuction mt">{title}</h4>
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <div style={{width: '100%'}}>
            <div className="card">
              <p className="text"><p>Giá khởi điểm:</p> <p>{startprice}₫</p></p>
              <p className="text"><p>Bước giá: </p> <p>{stepprice}₫</p></p>
              {endTime === true ? 
              <p className="text"><p>Số lần đấu giá: </p> <p>{Solandaugia}</p></p> : 
              <p className="text"><p>Bắt đầu: </p> <p>{startTime}</p></p>
              }
              {endTime === true ? 
              <p className="text"  style={{color:'red', textAlign: 'center', fontWeight:'bold'}}>Phiên đấu giá kết thúc  </p> : 
              <p className="text"><p>Kết thúc: </p> <p>{endTime}</p></p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}