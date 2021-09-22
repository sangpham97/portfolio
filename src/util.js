import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import React from "react"
import img1 from "./images/photo-1.png"
import img2 from "./images/photo-2.png"

export const navLinks1 = [
  { name: "About", link: "#About" },
  { name: "Blog", link: "#Blog" },
  { name: "Project", link: "#Project" },
]

export const navLinks2 = [
  {
    name: "Home",
    icon: <ArrowBackIcon style={{ color: "white", fontSize: "1.2rem" }} />,
    navigate: "/",
  },
]

export const ImagesSlider = [
  {
    img: img1,
  },
  {
    img: img2,
  },
]
