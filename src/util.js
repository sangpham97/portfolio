import React from "react"
import WebIcon from "@material-ui/icons/Web"
import HomeIcon from "@material-ui/icons/Home"
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary"

export const navLinks2 = [
  {
    name: "Home",
    icon: <HomeIcon style={{ color: "teal" }} />,
    navigate: "/",
  },
  {
    name: "Blog",
    icon: <LocalLibraryIcon style={{ color: "teal" }} />,
    navigate: "/Blogs",
  },
  {
    name: "Project",
    icon: <WebIcon style={{ color: "teal" }} />,
    navigate: "/Projects",
  },
]
