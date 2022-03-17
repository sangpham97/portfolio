import { Link } from "gatsby"
import React from "react"
import { navLinks2 } from "../util"

export default function Header() {
  function activeLinkStyle(link) {
    if (link === window.location.pathname) {
      return "active_link mx-3 uppercase py-2"
    } else {
      return "mx-3 uppercase border_link py-2"
    }
  }

  return (
    <div className="mx-auto max-w-screen-md mt-20 min-h-52">
      <div className="text-center space-y-4 pb-5">
        <Link className="text-5xl font-bold text-gray-800" to="/">
          {" "}
          Phạm Thanh Sang
        </Link>
        <h5 className="text-3xl font-serif text-gray-600">
          A Front-End Web Developer
        </h5>
        <ul className="flex justify-center text-md font-semibold">
          {navLinks2.map((item, i) => (
            <li key={i} className={activeLinkStyle(item.navigate)}>
              <Link to={item.navigate}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
