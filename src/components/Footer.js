import { Box, Container, Typography } from "@material-ui/core"
import React from "react"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      Sang Phạm ({new Date().getFullYear()})
    </Typography>
  )
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#4caf50",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          Designed By Sang
          <Copyright />
        </Typography>
      </Container>
    </Box>
  )
}
