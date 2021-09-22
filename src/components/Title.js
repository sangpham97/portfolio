import { Box, Typography } from "@material-ui/core"
import React from "react"

export default function Title({ children }) {
  return (
    <Box mt={4}>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        gutterBottom
        style={{ textDecoration: "underline" }}
      >
        {children}
      </Typography>
    </Box>
  )
}
