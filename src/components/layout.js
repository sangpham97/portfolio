import * as React from "react"
import Footer from "./Footer"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
