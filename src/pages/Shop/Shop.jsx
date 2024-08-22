import React from "react"
import avatar from "../../assets/image/avatar_infomationShop.png"
import NguoiTheoDoi from "../../assets/image/NguoiTheoDoi-icon.png"
import DangTheoDoi from "../../assets/image/DangTheoDoi-icon.png"
import SanPham from "../../assets/image/SanPham-icon.png"
import DanhGia from "../../assets/image/DanhGia-icon.png"
import "./Shop.css"
import CardProduct from "../../components/CardProduct/CardProduct"
import { listProduct } from "../Home/Section4/Data"
export default function Shop() {
  return (
    <div className="background">
      <div className="Shop ">
        <div className="shop-card container d-flex align-items-center">
          <div className="bia">
            <div className="d-flex align-items-center">
              <img src={avatar} alt="" />
              <p className="name">Lĩnh Store</p>
            </div>
            <div className="shop-button">
              <button className="flow-btn">Theo dõi</button>
              <button className="chat-btn">Nhắn tin</button>
            </div>
          </div>
          <div className="shop-infor d-flex align-items-center">
            <div>
              <div className="sanpham-icon d-flex align-items-center">
                <img src={SanPham} alt="" />
                <p>Sản phẩm: 101</p>
              </div>
              <div className="nguoitheodoi-icon d-flex align-items-center">
                <img src={NguoiTheoDoi} alt="" />
                <p>Người theo dõi: 3,1k</p>
              </div>
            </div>
            <div>
              <div className="danhgia-icon d-flex align-items-center">
                <img src={DanhGia} alt="" />
                <p>Đánh giá: 4.4(4,8k đánh giá)</p>
              </div>
              <div className="dangtheodoi-icon d-flex align-items-center">
                <img src={DangTheoDoi} alt="" />
                <p>Đang theo dõi: 38</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="list-product mt-4 container">
        {listProduct.map((item, index) => (
          <CardProduct key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
