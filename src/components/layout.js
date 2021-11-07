import * as React from "react"
import Footer from "./Footer"

import Header from "./header"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="px-4 lg:px-0">
      <Header />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
