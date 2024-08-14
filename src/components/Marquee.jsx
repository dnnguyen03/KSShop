import React from "react"

export default function Marquee() {
  return (
    <div
      className="d-flex justify-content-center fs-5"
      style={{ background: "#FFEE00", overflow: "hidden", position: "relative" }}
    >
      <div
        className="d-flex align-items-center"
        style={{
          whiteSpace: "nowrap",
          width: "95%",
          animation: "marquee 10s linear infinite",
        }}
      >
        <span
          style={{ width: "10px", height: "10px" }}
          className="rounded-circle bg-black me-2"
        ></span>
        <p className="m-0 me-5">Get 10% Off on All Secondhand Clothing - Limited Time Offer!</p>
        <span
          style={{ width: "10px", height: "10px" }}
          className="rounded-circle bg-black me-2"
        ></span>
        <p className="m-0">Get 10% Off on All Secondhand Clothing - Limited Time Offer!</p>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  )
}
