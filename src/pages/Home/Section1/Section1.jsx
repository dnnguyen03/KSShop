import React from "react"
import "./Section1.css"
import imgSection1 from "../../../assets/image/imgSection1.png"
import Star from "../../../assets/image/5Star.png"

export default function Section1() {
  return (
    <section
      style={{ backgroundColor: "#FDF0DF", padding: "110px 368px", gap: "100px" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container-left d-flex flex-column">
        <div>
          <h1>Mua sắm hôm nay, Tạo kiểu ngày mai</h1>
          <p className="fs-5 pe-4">
            Khám phá thời trang cũ hôm nay, tỏa sáng ngày mai. Nắm bắt phong cách bền vững để có một
            tương lai tốt đẹp hơn.
          </p>
          <div className="pt-4">
            <button className="btn">Mua ngay</button>
            <button className="btn">Khám phá</button>
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="star">
            <img src={Star} alt="" />
          </div>
          <h5 className="mb-0">10000+</h5>
          <p className="mb-0">Đánh giá của khách hàng (5/5)</p>
          <p className="underline">Tất cả đánh giá</p>
        </div>
      </div>
      <div className="container-right">
        <img src={imgSection1} alt="" />
      </div>
    </section>
  )
}
