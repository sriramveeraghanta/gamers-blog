import React from "react"
// components
import Navigation from "../headers/Navigation"

function BasicLayout({ children }) {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  )
}

export default BasicLayout
