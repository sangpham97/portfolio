import { Typography } from "@material-ui/core"
import React from "react"

export default function Title({ children }) {
  return (
    <>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        gutterBottom
        style={{ textDecoration: "underline", marginTop: 30 }}
      >
        {children}
      </Typography>
    </>
  )
}
