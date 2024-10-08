import AllProduct from "./pages/AllProduct/AllProduct"
import Auction from "./pages/Auction/Auction"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Home from "./pages/Home/Home"
import News from "./pages/News/News"
import Product from "./pages/Product/Product"
import Shop from "./pages/Shop/Shop"

export const routes = [
  {
    layout: "auth",
    pages: [
      {
        name: "Sign In",
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        name: "Sign Up",
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },
  {
    layout: "defaultLayout",
    pages: [
      {
        menu: true,
        name: "Trang chủ",
        path: "/Home",
        element: <Home />,
      },
      {
        menu: true,
        name: "Đấu giá",
        path: "/Auction",
        element: <Auction />,
      },
      {
        menu: true,
        name: "Tin tức",
        path: "/News",
        element: <News />,
      },
      {
        menu: true,
        name: "Sản phẩm",
        path: "/AllProduct",
        element: <AllProduct />,
      },
      {
        menu: true,
        name: "Seller",
        path: "/",
      },
      {
        menu: false,
        name: "Shop",
        path: "/Shop",
        element: <Shop />,
      },
      {
        menu: false,
        name: "Product",
        path: "/Product",
        element: <Product />,
      },
    ],
  },
]
