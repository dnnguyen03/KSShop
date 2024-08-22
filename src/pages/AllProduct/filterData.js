import aothun from "../../assets/image/aothun.png"
import varsity from "../../assets/image/varsity.png"
import aoam from "../../assets/image/aoam.png"
import vay from "../../assets/image/vay.png"
import quandai from "../../assets/image/quandai.png"
import aongu from "../../assets/image/aongu.png"
import somi from "../../assets/image/somi.png"
import quandui from "../../assets/image/quandui.png"

export const filterData = [
  {
    title: "Lọc giá",
    valueFilter: ["dưới 100.000", "100.000-300.000", "300.000-500.000", "Trên 500.000"],
    value: "price",
  },
  {
    title: "Màu sắc",
    valueFilter: ["Đỏ", "Tím", "Cam", "đen", "xanh lá", "xanh dương", "hồng", "Trắng"],
    value: "color",
  },
  {
    title: "Size",
    valueFilter: ["XS", "S", "M", "XL", "XXL"],
    value: "size",
  },
]
export const danhMuc = [
  {
    name: "Áo thun",
    icon: aothun,
  },
  {
    name: "Varsity",
    icon: varsity,
  },
  {
    name: "Áo ấm",
    icon: aoam,
  },
  {
    name: "Váy",
    icon: vay,
  },
  {
    name: "quần dài",
    icon: quandai,
  },
  {
    name: "áo ngủ",
    icon: aongu,
  },
  {
    name: "sơ mi",
    icon: somi,
  },
  {
    name: "quần đùi",
    icon: quandui,
  },
]
