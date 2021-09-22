import { Grid } from "@material-ui/core"
import React from "react"

export default function LeftSide({ children }) {
  return (
    <Grid item md={9} sm={9} xs={12}>
      <Grid container spacing="1">
        {children}
      </Grid>
    </Grid>
  )
}
