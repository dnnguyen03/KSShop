import React from "react"
import cart from "../../assets/image/cart.png"
import "./CardProduct.css"

export default function CardProduct(props) {
  const { productName, gender, Age, price, image, priceSale } = props
  const formatNumber = (number) => {
    return number.toLocaleString("vi-VN")
  }

  return (
    <div className="CardProduct">
      <div className="image">
        <img src={image[0]} alt="" />
      </div>
      <h4 className="nameProduct mt-3">{productName}</h4>
      <div className="d-flex align-items-center justify-content-between ">
        <div>
          <div className="decs">
            <p className="gender">Giới tính: {gender}</p>
            <p className="age">Độ tuổi: {Age}</p>
          </div>
          <div className="price">
            {priceSale && (
              <h5 style={{ color: "#FF0000" }} className="new-price">
                ₫{formatNumber(priceSale)}
              </h5>
            )}
            <h5 className={`old-price ${priceSale && "text-decoration-line-through"} `}>
              ₫{formatNumber(price)}
            </h5>
          </div>
        </div>
        <div className="cart">
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  )
}
