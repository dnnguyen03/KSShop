import React from "react";
import Footer from "../../components/Footer/Footer";

import back from "../../assets/image/Back.png";
import Logo from "../../assets/image/logo-single.png";
import facebook from "../../assets/image/facebook-icon.png";
import google from "../../assets/image/google-icon.png";
export default function SignUp() {
  return (
    <div>
      <div className="auth-form">
        <div className="auth-form__header ">
          <div className="auth-form__nav">
            <div className="flex1">
              <a
                className="d-flex align-center-items"
                href="./SignIn"
                style={{ textDecoration: "none", color: "#666666" }}
              >
                <img src={back} alt="" />
                <p>Trở về</p>
              </a>
            </div>
            <div className="flex2 d-flex align-center-items">
              <p>Bạn đã có tài khoản?</p>
              <a href="./SignIn">Đăng nhập</a>
            </div>
          </div>
        </div>
        <div
          className="all d-flex flex-column bd-highlight mb-3"
          style={{ gap: "40px" }}
        >
          <div className="p-2 bd-highlight">
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "42px" }}
            >
              <div className="logo d-flex align-center-items">
                <img src={Logo} alt="" />
                <p
                  style={{
                    paddingTop: "12px",
                    color: "#333",
                    fontSize: "40px",
                    fontWeight: "500",
                  }}
                >
                  KSShop
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <h3 style={{ textAlign: "center" }}>
                  Đăng ký để bắt đầu mua hàng / bán <br /> hàng trên nền tảng
                  của chúng tôi
                </h3>
              </div>
              <div className="social__media-btn d-flex justify-content-center">
                <button
                  className="d-flex align-center-items"
                  style={{
                    width: "580px",
                    height: "64px",
                    marginTop: "24px",
                    border: "1px solid",
                    borderRadius: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <img
                    src={facebook}
                    alt=""
                    style={{ width: "32px", height: "32px" }}
                  />
                  Đăng nhập bằng tài khoản facebook
                </button>
              </div>
              <div className="social__media-btn d-flex justify-content-center">
                <button
                  className="d-flex align-center-items"
                  style={{
                    width: "580px",
                    height: "64px",
                    marginTop: "24px",
                    border: "1px solid",
                    borderRadius: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <img
                    src={google}
                    alt=""
                    style={{ width: "32px", height: "32px" }}
                  />
                  Đăng nhập bằng tài khoản Google
                </button>
              </div>

              <div
                className=""
                style={{
                  gap: "65px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="d-flex justify-content-center">
                  <div>
                    <div className="auth-form__group">
                      <h4
                        style={{
                          textAlign: "center",
                          marginBottom: "24px",
                        }}
                      >
                        Đăng kí với Email của bạn
                      </h4>
                      <p>Tên đăng nhập</p>
                      <input
                        type="text"
                        placeholder="Nhập tên đăng nhập của bạn"
                        className="auth-form__input"
                        style={{
                          width: "580px",
                          height: "64px",
                          marginTop: "12px",
                          border: "1px solid rgba(102, 102, 102, 0.35)",
                          borderRadius: "12px",
                          paddingLeft: "10px",
                        }}
                      />
                    </div>
                    <div className="auth-form__group">
                      <p>Email</p>
                      <input
                        type="text"
                        placeholder="Nhập địa chỉ Email của bạn"
                        className="auth-form__input"
                        style={{
                          width: "580px",
                          height: "64px",
                          marginTop: "12px",
                          border: "1px solid rgba(102, 102, 102, 0.35)",
                          borderRadius: "12px",
                          paddingLeft: "10px",
                        }}
                      />
                    </div>
                    <div className="auth-form__group">
                      <p>Mật khẩu</p>
                      <input
                        type="password"
                        placeholder="Nhập mật khẩu của bạn"
                        className="auth-form__input"
                        style={{
                          width: "580px",
                          height: "64px",
                          marginTop: "12px",
                          border: "1px solid rgba(102, 102, 102, 0.35)",
                          borderRadius: "12px",
                          paddingLeft: "10px",
                          marginBottom: "5px",
                        }}
                      />
                      <p
                        style={{
                          color: "#666",
                        }}
                      >
                        Sử dụng từ 8 kí tự trở lên bao gồm số, chữ viết thường,
                        in hoa,, dấu cách
                      </p>
                    </div>
                    <div className="auth-form__group">
                      <p>Nhập lại mật khẩu</p>
                      <input
                        type="password"
                        placeholder="Nhập lại mật khẩu của bạn"
                        className="auth-form__input"
                        style={{
                          width: "580px",
                          height: "64px",
                          marginTop: "12px",
                          border: "1px solid rgba(102, 102, 102, 0.35)",
                          borderRadius: "12px",
                          paddingLeft: "10px",
                          marginBottom: "5px",
                        }}
                      />
                      <p
                        style={{
                          color: "#666",
                        }}
                      >
                        Sử dụng từ 8 kí tự trở lên bao gồm số, chữ viết thường,
                        in hoa,, dấu cách
                      </p>
                    </div>
                    <div className="auth-form__group">
                      <p>Giới tính của bạn là gì?</p>
                      <form style={{ marginTop: "12px" }}>
                        <input type="radio" name="fav_language" />

                        <label
                          style={{
                            paddingRight: "40px",
                            marginLeft: "8px",
                          }}
                        >
                          Nam
                        </label>
                        <input type="radio" name="fav_language" />

                        <label
                          style={{
                            paddingRight: "40px",
                            marginLeft: "8px",
                          }}
                        >
                          Nữ
                        </label>
                        <input type="radio" name="fav_language" />

                        <label
                          style={{
                            marginLeft: "8px",
                          }}
                        >
                          Khác
                        </label>
                      </form>
                    </div>
                    <div className="auth-form__group">
                      <p style={{ paddingBottom: "12px" }}>Ngày sinh</p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p
                            style={{
                              color: "rgba(102, 102, 102, 0.35)",
                            }}
                          >
                            Ngày
                          </p>
                          <select
                            style={{
                              width: "180px",
                              height: "56px",
                              borderRadius: "12px",
                              border: "1px solid #666666",
                              marginTop: "10px",
                            }}
                          ></select>
                        </div>
                        <div>
                          <p
                            style={{
                              color: "rgba(102, 102, 102, 0.35)",
                            }}
                          >
                            Tháng
                          </p>
                          <select
                            style={{
                              width: "180px",
                              height: "56px",
                              borderRadius: "12px",
                              border: "1px solid #666666",
                              marginTop: "10px",
                            }}
                          ></select>
                        </div>
                        <div>
                          <p
                            style={{
                              color: "rgba(102, 102, 102, 0.35)",
                            }}
                          >
                            Năm
                          </p>
                          <select
                            style={{
                              width: "180px",
                              height: "56px",
                              borderRadius: "12px",
                              border: "1px solid #666666",
                              marginTop: "10px",
                            }}
                          ></select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <input type="checkbox" />
                  <label
                    style={{
                      width: "483px",
                      height: "38px",
                      paddingLeft: "10px",
                    }}
                  >
                    Bằng việc chấp nhận tạo tài khoản, bạn đồng ý với mọi điều
                    khoản sử dụng và chính sách của chúng tôi
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    style={{
                      width: "580px",
                      height: "64px",
                      marginTop: "24px",
                      color: "rgba(255, 255, 255, 1)",
                      borderRadius: "40px",
                      backgroundColor: "rgba(102, 102, 102, 0.35)",
                    }}
                  >
                    Đăng kí
                  </button>
                </div>

                <div className="d-flex justify-content-center">
                  <div
                    className="d-flex align-center-items"
                    style={{
                      marginBottom: "125px",
                      display: "block",
                      textAlign: "center",
                      color: "#000000",
                      fontWeight: "500px",
                    }}
                  >
                    <p>Bạn đã có tài khoản?</p>
                    <a
                      href="./SignIn"
                      style={{
                        color: "rgba(234, 88, 12, 1)",
                        textDecoration: "none",
                      }}
                    >
                      Đăng nhập
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
