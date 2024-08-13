import Auction from "./pages/Auction"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Home from "./pages/Home"

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
        name: "Home",
        path: "/Home",
        element: <Home />,
      },
      {
        name: "Auction",
        path: "/Auction",
        element: <Auction />,
      },
      {
        name: "News",
        path: "/News",
        // element: <SignUp />,
      },
      {
        name: "Shop",
        path: "/Auction",
        // element: <SignUp />,
      },
      {
        name: "Page",
        path: "/Auction",
        // element: <SignUp />,
      },
    ],
  },
]
