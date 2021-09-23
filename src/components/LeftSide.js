import { Grid } from "@material-ui/core"
import React from "react"

export default function LeftSide({ children }) {
  return (
    <Grid item md={9} sm={9} xs={12}>
      <Grid container style={{ marginTop: 10 }} alignItems="center" spacing="2">
        {children}
      </Grid>
    </Grid>
  )
}
