import React from "react"
import { graphql } from "gatsby"
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CardActions } from "@material-ui/core"
import { navLinks2 } from "../util"
import Layout from "../components/layout"
import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"
import ArcodianList from "../components/ArcodianList"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
  },
  card: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    marginLeft: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary,
    fontSize: "1.2rem",
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      width: "100%",
    },
  },
  desc: {
    display: "block",
    marginTop: theme.spacing(2),
    fontSize: "1.3rem",
  },
}))

export default function SingleProject({ data }) {
  const classes = useStyles()
  const project = data.datoCmsProject
  const categories = Object.values(JSON.parse(project.categories))
  const url = Object.values(JSON.parse(project.url))
  const image = getImage(project.image)
  return (
    <Layout Links={navLinks2}>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing="2">
            <LeftSide>
              <Card className={classes.card}>
                <GatsbyImage image={image} className={classes.img} />
                <div className={classes.wrapper}>
                  <CardContent className={classes.content}>
                    <Typography variant="h4" color="primary" gutterBottom>
                      {project.title}
                    </Typography>
                    {categories.map((c, i) => (
                      <Chip label={c} key={i} />
                    ))}
                    <Typography variant="p" className={classes.desc}>
                      {project.desc}
                    </Typography>
                    <CardActions>
                      <CardActionArea>
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className={classes.link}
                        >
                          View
                        </a>
                      </CardActionArea>
                    </CardActions>
                  </CardContent>
                </div>
              </Card>
            </LeftSide>
            <RightSide>
              <ArcodianList />
            </RightSide>
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SingleProject($slug: String) {
    datoCmsProject(slug: { eq: $slug }) {
      desc
      categories
      image {
        gatsbyImageData(layout: FIXED, height: 500, width: 550)
      }
      title
      url
      slug
    }
  }
`
