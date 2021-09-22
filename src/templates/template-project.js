import React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CardActions } from "@material-ui/core"
import { navLinks2 } from "../util"
import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    padding: theme.spacing(2),
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
  // img: {
  //   width: "100%",
  // },
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
      <Box mt={5}>
        <Container maxWidth="md">
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
        </Container>
      </Box>
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