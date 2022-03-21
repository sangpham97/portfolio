import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { SiZalo } from "react-icons/si"
import { BsFacebook } from "react-icons/bs"

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg lg:mt-28 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-2">
        <div className="md:col-span-5 flex items-center">
          <div className="space-y-5 pl-3 md:pl-0">
            <h4 className="text-gray-800 uppercase text-4xl font-serif underline">
              hi! i'm sang
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg tracking-wide">
              Hi! Mình là Phạm Thanh Sang đang tự học và tìm hiểu lập trình web
              đặc biệt thích làm việc với
              <span className="font-bold"> React !</span>
            </p>
            <ul className="flex items-center  space-x-4 ">
              <li className="text-5xl text-blue-500 flex items-center ">
                <SiZalo />
                <span className="text-lg text-red-500 underline ml-1 font-semibold">
                  0973150912
                </span>
              </li>
              <li className="text-4xl text-blue-600 cursor-pointer">
                <a
                  href="https://www.facebook.com/sang.phamthanh.54379/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-3 flex justify-center mt-4 md:mt-0">
          <StaticImage
            src="../images/sang.jpg"
            className="rounded-full w-72 h-72"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  )
}
