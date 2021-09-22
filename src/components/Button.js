import { Typography } from "@material-ui/core"
import React from "react"
import { Link } from "gatsby"

export default function ButtonAll({ title, to }) {
  return (
    <Typography align="center" style={{ marginTop: 30 }}>
      <Link
        to={to}
        style={{
          padding: 10,
          borderRadius: 20,
          fontSize: "1.3rem",
          fontWeight: "bold",
          backgroundColor: "teal",
          textDecoration: "none",
          color: "white",
        }}
      >
        {title}
      </Link>
    </Typography>
  )
}
