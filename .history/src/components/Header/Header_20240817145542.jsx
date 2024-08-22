import React, { useEffect, useState } from "react"
import { routes } from "../../router"
import { NavLink } from "react-router-dom"
import logo from "../../assets/image/Logo.png"
import User from "../../assets/image/User.png"
import Search from "../../assets/image/search.png"
import Cart from "../../assets/image/shopping_cart.png"
import Heart from "../../assets/image/Heart.png"
import "./Header.css"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <nav
      style={{ height: "85px", width: "100vw" }}
      className={`${
        isScrolled ? "scroll-nav" : "bg-transparent"
      }  d-flex align-items-center justify-content-center nav-fixed`}
    >
      <div
        style={{ width: "1170px", height: "44px" }}
        className="d-flex align-items-center justify-content-between"
      >
        <div className="nav-header d-flex align-items-center">
          <div className="logo me-4 d-flex align-items-center justify-content-center">
            <img src={logo} alt="" />
          </div>
          <div className="link-container d-flex">
            {routes.map(
              ({ pages, layout }, index) =>
                layout === "defaultLayout" && (
                  <ul key={index} className="d-flex mb-0 p-0 h-100">
                    {pages.map(({ name, path, menu }) => (
                      <li key={name} className="me-4">
                        {menu && (
                          <NavLink to={`${path}`}>
                            {({ isActive }) => (
                              <button
                                style={{ padding: "10px", borderRadius: "4px" }}
                                className={`${isActive ? "yellow" : `bg-transparent`} border-0`}
                              >
                                <p className="capitalize mb-0">{name}</p>
                              </button>
                            )}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                )
            )}
          </div>
        </div>
        <div className="link-icon-container">
          <ul className="d-flex mb-0 gap-3">
            <li className="w-100">
              <NavLink to={"auth/SignIn"}>
                <button className="bg-transparent border-0">
                  <img src={User} alt="" />
                </button>
              </NavLink>
            </li>
            <li className="w-100">
              <button className="bg-transparent border-0">
                <img src={Search} alt="" />
              </button>
            </li>
            <li className="w-100">
              <button className="bg-transparent border-0">
                <img src={Cart} alt="" />
              </button>
            </li>
            <li className="w-100">
              <NavLink to={`#`}>
                <button className="bg-transparent border-0">
                  <img src={Heart} alt="" />
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
