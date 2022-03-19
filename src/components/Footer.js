import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Footer() {
  return (
    <div className=" my-5 pt-5 border-t-2 border-gray-300">
      <div className="flex justify-center items-center">
        <h4 className="text-3xl font-serif mr-3">Sang Blog</h4>
        <StaticImage src="../images/icon.png" className=" w-12 h-10" />
      </div>
    </div>
  )
}
