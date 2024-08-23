import React, { useState } from "react"
import imgAuction from "../../assets/image/imgAuction.png"
import "./Auction.css"
import CardAuction from "../../components/CardAuction/CardAuction"
import { listAuction, listAuction2 } from "./data"

export default function Auction() {
  const [selectedOption, setSelectedOption] = useState("all")
  return (
    <div className="Auction">
      <div className="imageAuction container">
        <img src={imgAuction} alt="" />
      </div>
      <div className="introduce">
        <p>Diễn ra vào thứ 7 hàng tuần tại KSShop</p>
        <p>Sản phẩm được lựa chọn kỹ lưỡng để đem đến cho bạn</p>
        <p>Đừng bỏ lỡ cơ hội sưu tầm những sản phẩm quý hiếm và giá trị</p>
      </div>
      <div className="control container">
        <div>
          <div className="chonMuc">
            <label className={`${selectedOption === 'all' ? 'active': ''}`} onClick={() => setSelectedOption("all")} htmlFor="optionAuction1">
              Tất cả sản phẩm
            </label>
          </div>
          <div className="chonMuc">
            <label className={`${selectedOption === 'history' ? 'active': ''}`} onClick={() => setSelectedOption("history")} htmlFor="optionAuction2">
              Lịch sử đấu giá
            </label>
          </div>
          <div className="chonMuc">
            <label className={`${selectedOption === 'historyOfYou' ? 'active': ''}`} onClick={() => setSelectedOption("historyOfYou")} htmlFor="optionAuction3">
              Lịch sử đấu giá của bạn
            </label>
          </div>
        </div>
        <div className="realTime">
          <p>Thời gian:</p> <p>15:36:54 12/8/2024</p>
        </div>
      </div>

      <div className="content">
        <div className={`contentAllProduct ${selectedOption === "all" ? "d-block" : "d-none"}`}>
          <div className="dangdienra">
            <div className="container">
              <h4>Đấu giá đang diễn ra</h4>
              <div className="listProduct">
              {listAuction.map((item, index) => (
                <CardAuction key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div className="sapDienRa">
            <div className="container">
              <h4>Đấu giá sắp diễn ra</h4>
              <div className="listProduct">
              <div className="list-product">
                {listAuction.map((item, index) => (
                <CardAuction key={index} {...item} />
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`history ${selectedOption === "history" ? "d-block" : "d-none"}`}>
            <div className="listProduct">
              {listAuction2.map((item, index) => (
                <CardAuction key={index} {...item} />
                ))}
              </div>
        </div>
        <div className={`historyOfYou ${selectedOption === "historyOfYou" ? "d-block" : "d-none"}`}>
        <div className="listProduct">
              {listAuction2.map((item, index) => (
                <CardAuction key={index} {...item} />
                ))}
              </div>
        </div>
      </div>
    </div>
  )
}