import React from "react"
import cart from "../../assets/image/cart.png"
import "./CardProduct.css"

export default function CardProduct(props) {
  const { img, name, gender, age, oldPrice, newPrice } = props
  return (
    <div className="CardProduct">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <h4 className="nameProduct mt-3">{name}</h4>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <div className="decs">
            <p className="gender">Giới tính: {gender}</p>
            <p className="age">Độ tuổi: {age}</p>
          </div>
          <div className="price">
            <h5 className="new-price">₫{newPrice}</h5>
            <h5 className="old-price">₫{oldPrice}</h5>
          </div>
        </div>
        <div className="cart">
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  )
}
