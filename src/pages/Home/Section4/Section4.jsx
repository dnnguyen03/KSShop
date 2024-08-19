import React from "react"
import CardProduct from "../../../components/CardProduct/CardProduct"
import { listProduct } from "./Data"
import "./Section4.css"

export default function Section4() {
  return (
    <div className="Section4">
      <div className="container">
        <div className="title">
          <h1>Chọn phong cách phổ biến nhất</h1>
          <p>
            Mua sắm hôm nay, tận hưởng phong cách độc đáo vào ngày mai. Kết quả tìm kiếm chất lượng
            cho tủ quần áo bền vững.
          </p>
        </div>
        <div className="list-product">
          {listProduct.map((item) => (
            <CardProduct {...item} />
          ))}
        </div>
        <button>Xem tất cả</button>
      </div>
    </div>
  )
}
