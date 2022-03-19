import React from "react"

export default function Title({ children }) {
  return (
    <>
      <h3 className="text-4xl capitalize text-gray-800 font-serif ">
        {children}
      </h3>
    </>
  )
}
