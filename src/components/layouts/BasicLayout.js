import React from "react"
// components
import Navigation from "../headers/Navigation"
import Footer from "../footers/Footer"

function BasicLayout({ children }) {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default BasicLayout
