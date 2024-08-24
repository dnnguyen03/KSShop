import React from "react";
import Footer from "../../components/Footer/Footer";
import "./SignIn.css";
import Logo from "../../assets/image/logo-single.png";
import back from "../../assets/image/Back.png";
import facebook from "../../assets/image/facebook-icon.png";
import google from "../../assets/image/google-icon.png";
import mail from "../../assets/image/Icons-mail.png";
export default function SignIn() {
  return (
    <div>
      <div className="auth-form">
        <div className="auth-form__header ">
          <div className="auth-form__nav">
            <div className="flex1">
              <a
                className="d-flex align-center-items"
                href="http://localhost:3000/Home"
                style={{ textDecoration: "none", color: "#666666" }}
              >
                <img src={back} alt="" />
                <p>Trở về</p>
              </a>
            </div>
            <div className="flex2">
              <a href="./SignUp">Tạo tài khoản mới</a>
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
                <h3 style={{ textAlign: "center" }}>ĐĂNG NHẬP</h3>
              </div>
              <div className="p-2 bd-highlight">
                <div className="d-flex bg" style={{ gap: "65px" }}>
                  <div className="auth-form__form p-2">
                    <div className="auth-form__group">
                      <h4
                        style={{
                          textAlign: "center",
                          marginBottom: "24px",
                        }}
                      >
                        Đăng nhập
                      </h4>
                      <p>Email hoặc tên đăng nhập</p>
                      <input
                        type="text"
                        className="auth-form__input"
                        style={{
                          width: "300px",
                          height: "56px",
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
                        className="auth-form__input"
                        style={{
                          width: "300px",
                          height: "56px",
                          marginTop: "12px",
                          border: "1px solid rgba(102, 102, 102, 0.35)",
                          borderRadius: "12px",
                          paddingLeft: "10px",
                        }}
                      />
                    </div>
                    <button
                      style={{
                        width: "300px",
                        height: "56px",
                        marginTop: "24px",
                        color: "rgba(255, 255, 255, 1)",
                        borderRadius: "30px",
                        backgroundColor: "rgba(102, 102, 102, 0.35)",
                      }}
                    >
                      Đăng nhập
                    </button>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "23px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        width: "2px",
                        height: "200px",
                        borderRight: "2px solid rgba(102, 102, 102, 0.25)",
                        paddingLeft: "10px",
                      }}
                    ></div>
                    <div>
                      <p className="" style={{}}>
                        OR
                      </p>
                    </div>
                    <div
                      className=""
                      style={{
                        width: "2px",
                        height: "200px",
                        borderRight: "2px solid rgba(102, 102, 102, 0.25)",
                        paddingLeft: "10px",
                      }}
                    ></div>
                  </div>

                  <div
                    className="p-2"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="social__media-btn ">
                      <button
                        className="d-flex align-center-items"
                        style={{
                          width: "300px",
                          height: "56px",
                          marginTop: "24px",
                          border: "1px solid",
                          borderRadius: "30px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src={google} alt="" />
                        Tiếp tục với Google
                      </button>
                    </div>
                    <div className="social__media-btn">
                      <button
                        className="d-flex align-center-items"
                        style={{
                          width: "300px",
                          height: "56px",
                          marginTop: "24px",
                          border: "1px solid",
                          borderRadius: "30px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src={facebook} alt="" />
                        Tiếp tục với Facebook
                      </button>
                    </div>
                    <div className="signup-btn">
                      <button
                        className="d-flex align-center-items"
                        style={{
                          width: "300px",
                          height: "56px",
                          marginTop: "24px",
                          border: "1px solid",
                          borderRadius: "30px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src={mail} alt="" style={{ paddingTop: "2px" }} />
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2 bd-highlight">
                <div className="p-2 bd-highlight">
                  <a
                    href="#"
                    style={{
                      marginBottom: "125px",
                      display: "block",
                      textAlign: "center",
                      color: "#000000",
                      fontWeight: "500px",
                    }}
                  >
                    Bạn quên mật khẩu?
                  </a>
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
