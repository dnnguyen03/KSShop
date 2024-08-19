import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../router";
import Marquee from "../components/Marquee";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
export default function DefaultLayout() {
  return (
    <div>
      <Marquee />
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
      <Footer></Footer>
    </div>
  );
}
