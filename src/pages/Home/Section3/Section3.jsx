import React, { useState } from "react"
import "./Section3.css"
import { dataSection3, dataSection3Part2 } from "./Data"
import imgPart2 from "../../../assets/image/imgPart2-Section3.png"

export default function Section3() {
  const [control, setControl] = useState("Đấu giá")
  return (
    <section className="Section3">
      <div className="container">
        <div className="title-section3">
          <h1>Phát hiện tốt nhất cho tủ quần áo của bạn</h1>
          <p>
            Khám phá phong cách độc đáo hôm nay, tỏa sáng với thời trang ngày mai. Kết quả tìm kiếm
            chất lượng, lựa chọn bền vững.
          </p>
        </div>
        <div className="Section3.1">
          <div className="control">
            {dataSection3.map(({ title }, index) => (
              <div
                key={index}
                className={`${title === control ? "active" : ""}`}
                onClick={() => setControl(title)}
              >
                {title}
              </div>
            ))}
          </div>
          <div className="list-content">
            {dataSection3.map(({ title, titleContent, img, content, countDown }, index) => (
              <div
                key={index}
                className={`content d-flex justify-content-between ${
                  title !== control ? "d-none" : ""
                }`}
              >
                <div className="content-left">
                  <h1>{titleContent}</h1>
                  <p style={{ color: "#686977" }}>{content}</p>
                  <button>Mua ngay</button>
                </div>
                <div className="content-right">
                  <img src={img} alt="" style={{ width: "100%" }} />
                  {countDown && (
                    <div className="list-btn">
                      <button>
                        <p>04</p>
                        <p>Ngày</p>
                      </button>
                      <button>
                        <p>04</p>
                        <p>Giờ</p>
                      </button>
                      <button>
                        <p>04</p>
                        <p>Phút</p>
                      </button>
                      <button>
                        <p>04</p>
                        <p>Giây</p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Section3Part2 d-flex justify-content-between">
          <div className="content-left">
            <h1>Duyệt bộ sưu tập theo danh mục</h1>
            <img src={imgPart2} alt="" />
          </div>
          <div className="content-right">
            <p style={{ color: "#686977" }}>
              Mua sắm hôm nay, tỏa sáng ngày mai. Khám phá các danh mục tốt nhất của chúng tôi về
              thời trang cũ độc đáo và tìm những món đồ vượt thời gian để nâng tầm phong cách của
              bạn.
            </p>
            <div className="list-box">
              {dataSection3Part2.map(({ icon, title, quantity }, index) => (
                <div key={index} className="box">
                  <div className="iconPerson">
                    <img src={icon} alt="" />
                  </div>
                  <h4 className="title">{title}</h4>
                  <div style={{ color: "#686977" }} className="quantity">
                    {quantity} Bộ sưu tập
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
