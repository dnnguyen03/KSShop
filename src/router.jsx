import Auction from "./pages/Auction/Auction"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Home from "./pages/Home/Home"

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
        name: "Trang chủ",
        path: "/Home",
        element: <Home />,
      },
      {
        name: "Đấu giá",
        path: "/Auction",
        element: <Auction />,
      },
      {
        name: "Tin tức",
        path: "/News",
        // element: <SignUp />,
      },
      {
        name: "Shop",
        path: "/Shop",
        // element: <SignUp />,
      },
      {
        name: "Kênh người bán",
        path: "/",
        // element: <SignUp />,
      },
    ],
  },
]
