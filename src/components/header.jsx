import { Link } from "gatsby"
import React from "react"
import { navLinks2 } from "../util"

export default function Header() {
  return (
    <div className="mx-auto max-w-screen-md pt-10 min-h-52">
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
            <li key={i} className="text-xl ">
              <PartialNavLink to={item.navigate}>{item.name}</PartialNavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const PartialNavLink = props => {
  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    if (props.to === "/") {
      return {
        className: " mx-3 uppercase py-2 text-red-500",
      }
    } else {
      return isPartiallyCurrent
        ? { className: "active_link mx-3 uppercase py-2" }
        : { className: "mx-3 uppercase border_link py-2" }
    }
  }

  return <Link getProps={isPartiallyActive} {...props} />
}
