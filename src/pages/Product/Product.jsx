import React, { useEffect, useRef, useState } from "react"
import "./Product.css"
import aoMu1 from "../../assets/image/aoMU1.jpg"
import aoMu2 from "../../assets/image/aoMU2.jpg"
import aoMu3 from "../../assets/image/aoMU3.jpg"
import aoMu4 from "../../assets/image/aoMU4.jpg"
import Slider from "react-slick"
import heart from "../../assets/image/redHeart.png"
import share from "../../assets/image/share.png"
import giohang from "../../assets/image/giohang.png"
import star from "../../assets/image/5Star.png"
import { listProduct } from "../Home/Section4/Data"
import CardProduct from "../../components/CardProduct/CardProduct"
import userDauGia from "../../assets/image/userDauThau.png"

export default function Product() {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let sliderRef1 = useRef(null)
  let sliderRef2 = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  useEffect(() => {
    setNav1(sliderRef1)
    setNav2(sliderRef2)
  }, [])
  return (
    <div className="Product">
      <div className="section1 container">
        <div className="left-container">
          <div className="slider-container">
            <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
              <div>
                <img src={aoMu1} alt="" />
              </div>
              <div>
                <img src={aoMu2} alt="" />
              </div>
              <div>
                <img src={aoMu3} alt="" />
              </div>
              <div>
                <img src={aoMu4} alt="" />
              </div>
            </Slider>
            <Slider
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <img src={aoMu1} alt="" />
              </div>
              <div>
                <img src={aoMu2} alt="" />
              </div>
              <div>
                <img src={aoMu3} alt="" />
              </div>
              <div>
                <img src={aoMu4} alt="" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="right-container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Áo</h2>
            <div className="d-flex gap-3">
              <div className="icon-heart">
                <img src={heart} alt="" />
                <p>888</p>
              </div>
              <div className="icon-share">
                <img src={share} alt="" />
              </div>
            </div>
          </div>
          <hr />
          <div className="price d-flex">
            <h2 className="new-price me-3">₫100.000</h2>
            <h2 className="old-price">₫200.000</h2>
          </div>
          <div className="mainDesc">
            <div className="size d-flex">
              <p>Size:</p>
              <div className="content">M</div>
            </div>
            <div className="state d-flex">
              <p>Tình trạng:</p>
              <div className="content">Còn hàng</div>
            </div>
            <div className="color d-flex">
              <p>Màu:</p>
              <div className="content">vàng</div>
            </div>
          </div>
          <hr />
          <button className="btnBuy">Mua ngay</button>
          <button className="btnAddCart">Thêm vào giỏ</button>
          <hr />
          <div>
            <div className="hoanTra">
              <img src={giohang} alt="" />
              <div>
                <h6>Hoàn trả hàng</h6>
                <p className="d-flex">
                  Miễn phí hoàn trả sau 14 ngày.
                  <p style={{ cursor: "pointer" }} className="text-decoration-underline ms-2">
                    Chi tiết
                  </p>
                </p>
              </div>
            </div>
            <div className="boxShop">
              <img src={aoMu1} alt="" />
              <div>
                <h5>Shop</h5>
                <div className="danhGia d-flex align-items-center gap-2">
                  <img src={star} alt="" />
                  <p>(8)</p>
                </div>
              </div>
              <button>Xem shop</button>
              <button>Chat ngay</button>
            </div>
          </div>
        </div>
        {/* <div className="right-container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Áo</h2>
            <div className="d-flex gap-3">
              <div className="icon-heart">
                <img src={heart} alt="" />
                <p>888</p>
              </div>
              <div className="icon-share">
                <img src={share} alt="" />
              </div>
            </div>
          </div>
          <hr />
          <div className="inforProduct">
            <div>
              <p>Giá khởi điểm:</p>
              <p>2.000.000₫</p>
            </div>
            <div>
              <p>Bước giá:</p>
              <p>50.000₫</p>
            </div>
            <div>
              <p>Số bước giá tối đa:</p>
              <p>5</p>
            </div>
            <div>
              <p>Thời gian bắt đầu:</p>
              <p>14:45 - 29/08/2024</p>
            </div>
            <div>
              <p>Thời gian kết thúc:</p>
              <p>14:45 - 29/08/2024</p>
            </div>
            <div>
              <p>Đếm ngược thời gian kết thúc:</p>
              <p>01:15:59</p>
            </div>
            <div className="inputDauGia">
              <input type="text" placeholder="3.050.000" />
              <button>Đấu giá</button>
            </div>
            <div style={{ margin: "15px 0" }} className="boxShop">
              <img src={aoMu1} alt="" />
              <div>
                <h5>Shop</h5>
                <div className="danhGia d-flex align-items-center gap-2">
                  <img src={star} alt="" />
                  <p>(8)</p>
                </div>
              </div>
              <button>Xem shop</button>
              <button>Chat ngay</button>
            </div>
            <div className="bxhDauThau">
              <h5>Giá thầu cao nhất</h5>
              <div>
                <div>
                  <h5>1</h5>
                  <img src={userDauGia} alt="" />
                  <h5>Lê Tuấn</h5>
                </div>
                <p>3.000.000₫</p>
              </div>
              <div>
                <div>
                  <h5>2</h5>
                  <img src={userDauGia} alt="" />
                  <h5>Lê Tuấn</h5>
                </div>
                <p>2.700.000₫</p>
              </div>
              <div>
                <div>
                  <h5>3</h5>
                  <img src={userDauGia} alt="" />
                  <h5>Lê Tuấn</h5>
                </div>
                <p>2.500.000₫</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="section2 container">
        <form>
          <div>
            <input type="radio" name="ChiTiet" id="option1" hidden />
            <label htmlFor="option1">Chi tiết</label>
          </div>
          {/* <div>
            <input type="radio" name="DanhGia" id="option2" hidden />
            <label htmlFor="option2">Đánh giá</label>
          </div> */}
        </form>
        <div className="contentProduct">
          <div className="contentChiTiet">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi perferendis sunt cum
            quod cupiditate accusantium voluptatibus similique obcaecati numquam assumenda
            laudantium at, eius porro asperiores! Est provident nulla iure suscipit. Dolore natus,
            tempore tempora libero nihil exercitationem velit voluptate, architecto ratione quia
            animi blanditiis culpa soluta modi ad nobis repellendus impedit quis debitis doloribus
            ipsum. Autem neque cumque blanditiis expedita? Nihil perspiciatis optio, culpa
            voluptates maxime ad quia soluta ducimus a recusandae ex numquam quas repellendus,
            sapiente dicta illum beatae minima nemo excepturi ea animi delectus id ipsum! Laborum,
            quo. Qui reprehenderit soluta recusandae nostrum illum maxime voluptatem animi veritatis
            laborum ratione ullam eveniet, adipisci nam rerum quidem commodi numquam nobis suscipit
            autem, nisi atque. Facilis earum magnam accusantium aut? Quas alias obcaecati iusto
            necessitatibus officiis modi, ipsa quibusdam, accusantium tempore aspernatur molestiae!
            Accusamus, fugiat aliquid provident amet aspernatur voluptas dignissimos nemo blanditiis
            aliquam voluptatum odio velit, nisi rerum. Ipsum! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Cupiditate nobis aperiam eaque pariatur, ad fugit, libero
            sint ullam veritatis eum dolorem dolorum ducimus quisquam, modi id facilis? Culpa, ea
            soluta!
          </div>
          {/* <div className="contentReview">
          </div> */}
        </div>
      </div>
      <div style={{ backgroundColor: "#FDF0DF" }} className="section3">
        <div className="container">
          <h2>Sản phẩm tương tự</h2>
          <div>
            <div className="slider-container">
              <Slider {...settings}>
                {listProduct.map((item, index) => (
                  <div>
                    <CardProduct key={index} {...item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
