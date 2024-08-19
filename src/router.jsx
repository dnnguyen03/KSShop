import AllProduct from "./pages/Product/AllProduct"
import Auction from "./pages/Auction/Auction"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Home from "./pages/Home/Home"
import News from "./pages/News/News"
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
        path: "/Product",
        element: <AllProduct />,
      },
      {
        menu: true,
        name: "Trang",
        path: "/",
      },
      {
        menu: false,
        name: "Shop",
        path: "Shop",
        element: <Shop />,
      },
    ],
  },
]
