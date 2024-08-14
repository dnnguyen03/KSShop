import React from "react"
import Section1 from "./Section1/Section1"
import Section2 from "./Section2/Section2"

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }} className="w-100 m-auto">
      <Section1 />
      <Section2 />
    </div>
  )
}
