import React from "react"
import "./Product.css"
import aoMu1 from "../../assets/image/aoMU1.jpg"
import aoMu2 from "../../assets/image/aoMU2.jpg"
import aoMu3 from "../../assets/image/aoMU3.jpg"
import aoMu4 from "../../assets/image/aoMU4.jpg"
import Slider from "react-slick"

export default function Product() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={aoMu1} />
        </a>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="Product">
      <div className="container">
        <div className="left-container">
          <Slider {...settings}>
            <div>
              <img src={aoMu1} />
            </div>
            <div>
              <img src={aoMu2} />
            </div>
            <div>
              <img src={aoMu3} />
            </div>
            <div>
              <img src={aoMu4} />
            </div>
          </Slider>
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  )
}
