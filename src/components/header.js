import { Link } from "gatsby"
import React from "react"
import { navLinks2 } from "../util"
import Title from "./Title"

export default function Header() {
  return (
    <div className="mx-auto max-w-screen-md mt-20">
      <div className="text-center space-y-4">
        <h4 className="text-5xl font-bold text-gray-800"> Phạm Thanh Sang</h4>
        <h5 className="text-3xl font-serif text-gray-600">
          A Front-End Web Developer
        </h5>
        <ul className="flex justify-center text-md font-semibold">
          {navLinks2.map((item, i) => (
            <li key={i} className="mx-3 border-b-2 border-red-500 uppercase">
              <Link to={item.navigate}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
