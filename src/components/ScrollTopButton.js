import React, { useState } from "react"
import { BsFillArrowUpCircleFill } from "react-icons/bs"

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  const isBrowser = () => typeof window !== "undefined"

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    if (isBrowser()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      })
    }
  }

  isBrowser() && window.addEventListener("scroll", toggleVisible)
  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <BsFillArrowUpCircleFill className="scroll_button md:h-14 h-8 mr-9 text-blue-600" />
    </button>
  )
}
