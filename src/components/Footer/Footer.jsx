import React from "react";
import "./Footer.css";
import skype from "../../assets/image/Skype.png";
import linkedin from "../../assets/image/Linkedin.png";
import facebook from "../../assets/image/facebook.png";
import Logo from "../../assets/image/Logo.png";
import Paypal from "../../assets/image/Paypal.png";
import Visa from "../../assets/image/Visa.png";
import TinDung from "../../assets/image/TinDung.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="grid">
        <div className="grid__row">
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Chăm sóc khách hàng</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Hướng dẫn bán hàng
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Hướng dẫn đấu giá
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Trả hàng hoàn tiền
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">KSShop</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Về chúng tôi
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Cổ điển
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Đánh giá của khách hàng
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  ƯU đãi đặc biệt
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Blog
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Mẹo phong cách(Ai sợ thì đi về)
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Cộng đồng thời trang
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Giúp đỡ</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Liên hệ với chúng tôi
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Liên kết đến mạng xã hội
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Thông tin bản quyền
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <p>Email chúng tôi</p>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-email__link">
                  ksshop@gmail.com
                </a>
              </li>
              <ul className="social-icon d-flex align-items-center">
                <li>
                  <img src={facebook} alt="" className="social-item-icon" />
                </li>
                <li>
                  <img src={linkedin} alt="" className="social-item-icon" />
                </li>
                <li>
                  <img src={skype} alt="" className="social-item-icon" />
                </li>
              </ul>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <p>Goị cho chúng tôi</p>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-phone__link">
                  000 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="line">
          <div className="grid__footer">
            <div className="grid__footer-column">
              <div className="">
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className="grid__footer-column">
              <div>
                <ul className="payment d-flex align-items-center">
                  <li>
                    <img src={Paypal} alt="" className="payment-item" />
                  </li>
                  <li>
                    <img src={Visa} alt="" className="payment-item" />
                  </li>
                  <li>
                    <img src={TinDung} alt="" className="payment-item" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid__footer-column">
              <div className="text-nonecoppy">
                <p>Copyright © 2024 KSTeam all rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
