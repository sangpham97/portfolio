import React from "react"
import { Link } from "gatsby"

export default function ButtonAll({ title, to }) {
  return (
    <Link
      to={to}
      className="uppercase bg-green-400 p-3 rounded-md text-white font-bold hover:bg-green-600"
    >
      {title}
    </Link>
  )
}
