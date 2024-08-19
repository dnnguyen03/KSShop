import React from "react"
import "./AllProduct.css"
import iconSearch from "../../assets/image/search.png"
import { danhMuc, filterData } from "./filterData"
import { listProduct } from "../Home/Section4/Data"
import CardProduct from "../../components/CardProduct/CardProduct"

export default function AllProduct() {
  return (
    <div className="AllProduct container">
      <div className="left-container">
        <div className="d-flex justify-content-between align-items-center gap-5 w-100">
          <h5>Bộ lọc</h5>
          <p>Xóa tất cả</p>
        </div>
        {filterData.map(({ title, valueFilter, value }, index) => (
          <div key={index} className="filter-by-side">
            <div className="d-flex justify-content-between align-items-baseline">
              <h5 className="typeFilter mb-2">{title}</h5>
              <div className="icon-down">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <form>
              {valueFilter.map((item, index) => (
                <div key={index} className="valueFilter">
                  <input type="checkbox" value={value} id={item} />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </form>
          </div>
        ))}
      </div>

      <div className="right-container">
        <div className="header-container">
          <div className="d-flex justify-content-between">
            <h5>Danh mục</h5>
            <p style={{ color: "#572AF8" }} className="fw-bold">
              Xem tất cả
            </p>
          </div>
          <div className="listDanhMuc">
            {danhMuc.map((item, index) => (
              <div key={index} className="DanhMuc">
                <div className="image">
                  <img src={item.icon} alt="" />
                </div>
                <h6>{item.name}</h6>
              </div>
            ))}
          </div>
          <div className="d-flex w-100 justify-content-between mt-4">
            <div className="search">
              <input type="text" placeholder="Tìm kiếm sản phẩm ..." />
              <div className="icon-search">
                <img src={iconSearch} alt="" />
              </div>
            </div>
            <div className="filter">
              <div className="filter-prod">
                <input type="checkbox" id="filter-prod-open" hidden />
                <label htmlFor="filter-prod-open" className="select">
                  <div className="item-filter">Sắp xếp theo</div>
                  <div className="icon-down">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </label>
                <div className="sub-filter-prod">
                  <p>Mặc định</p>
                  <p>Mới nhất</p>
                  <p>Mua nhiều nhất</p>
                  <p>Được yêu thích nhất</p>
                  <p>Giá cao đến thấp</p>
                  <p>Giá thấp đến cao</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-product mt-4">
          {listProduct.map((item) => (
            <CardProduct {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
