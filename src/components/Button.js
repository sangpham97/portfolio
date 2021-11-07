import React from "react"
import { Link } from "gatsby"

export default function ButtonAll({ title, to }) {
  return (
    <Link
      to={to}
      className="uppercase bg-red-400 p-3 rounded-sm text-white font-bold"
    >
      {title}
    </Link>
  )
}
