import { Button, makeStyles } from "@material-ui/core"
import React from "react"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(5),
    borderRadius: 20,
    fontSize: "1rem",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}))

export default function ButtonAll({ title, to }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button} color="primary">
        <Link to={to} className={classes.link}>
          {title}
        </Link>
      </Button>
    </div>
  )
}
