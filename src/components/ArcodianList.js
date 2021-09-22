import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Arcodian from "./Arcodian"
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function ArcodianList() {
  const data = useStaticQuery(graphql`
    {
      Projects: allDatoCmsProject {
        nodes {
          title
          slug
        }
      }
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
  const projects = data.Projects.nodes
  return (
    <div className={classes.root}>
      <Arcodian type="Projects" data={projects} />
      <Arcodian type="Blogs" data={blogs} />
    </div>
  )
}
