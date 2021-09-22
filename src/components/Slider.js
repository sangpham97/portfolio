import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper"
import { ImagesSlider } from "../util"
import { CardMedia } from "@material-ui/core"

// install Swiper modules
SwiperCore.use([Pagination, Autoplay])

export default function Slider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 4400,
      }}
      className="mySwiper"
    >
      {ImagesSlider.map((item, i) => (
        <SwiperSlide>
          <CardMedia src={item.img} key={i} component="img" height={340} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
