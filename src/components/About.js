import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg mt-28">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-2">
        <div className="col-span-5 flex items-center">
          <div className="space-y-5 pl-3 md:pl-0">
            <h4 className="text-gray-800 uppercase text-4xl font-serif">
              hi! i'm sang
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg tracking-wide">
              Hi! Mình là Phạm Thanh Sang đang tự học và vọc vạch thiết kế web
              đặc biệt thích làm việc với
              <span className="font-bold"> React</span>
            </p>
          </div>
        </div>
        <div className="col-span-3 flex justify-center mt-4 md:mt-0">
          <StaticImage
            src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/118540546_713167122746593_1838832190750200407_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=dgUoHoeF79wAX9IyU6E&_nc_ht=scontent.fsgn6-1.fna&oh=0a7de6acc02403abc3bd1c44545f692c&oe=61AB7218"
            className="rounded-full w-72"
          />
        </div>
      </div>
    </div>
  )
}
