import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { routes } from "../router"
import Header from "../components/Header"

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "defaultLayout" &&
              pages.map(({ path, element }, index) => (
                <Route exact key={index} path={path} element={element} />
              ))
          )}
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
      </main>
    </div>
  )
}
