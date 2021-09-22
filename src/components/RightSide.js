import { Grid } from "@material-ui/core"
import React from "react"

export default function RightSide({ children }) {
  return (
    <Grid item md={3} sm={3} xs={12}>
      {children}
    </Grid>
  )
}
