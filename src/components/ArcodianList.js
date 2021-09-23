import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Arcodian from "./Arcodian"
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function ArcodianList() {
  const data = useStaticQuery(graphql`
    {
      Blogs: allDatoCmsBlog {
        nodes {
          title
          slug
        }
      }
    }
  `)
  const classes = useStyles()
  const blogs = data.Blogs.nodes

  return (
    <div className={classes.root}>
      <Arcodian type="Blogs" data={blogs} />
    </div>
  )
}
