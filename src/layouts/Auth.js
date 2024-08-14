import { Route, Routes } from "react-router-dom"
import { routes } from "../router"

export default function Auth() {
  return (
    <div>
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }, index) => (
              <Route exact key={index} path={path} element={element} />
            ))
        )}
      </Routes>
    </div>
  )
}
