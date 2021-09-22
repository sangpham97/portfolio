import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Title from "./Title"
import { useStaticQuery, graphql, Link } from "gatsby"
import ButtonAll from "./Button"

const useStyles = makeStyles(theme => ({
  cardContent: {
    [theme.breakpoints.down("md")]: {
      height: 160,
    },
  },
}))

export default function ProjectSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsProject(
        limit: 4
        sort: { fields: image___createdAt, order: DESC }
      ) {
        nodes {
          categories
          gitlink
          title
          slug
          url
          image {
            gatsbyImageData(layout: FIXED, height: 250)
          }
        }
      }
    }
  `)
  const projects = data.allDatoCmsProject.nodes
  return (
    <Box mt={8} id="Project">
      <Container maxWidth="lg">
        <Title>New Projects</Title>
        <Grid container spacing="2" style={{ marginTop: 4 }}>
          {projects.map((project, i) => {
            const git = Object.values(JSON.parse(project.gitlink))
            const Url = Object.values(JSON.parse(project.url))

            return <Project {...project} key={i} git={git} Url={Url} />
          })}
        </Grid>
        <ButtonAll to="/Projects">All Project</ButtonAll>
      </Container>
    </Box>
  )
}

export const Project = ({ categories, title, slug, Url, git, image }) => {
  const classes = useStyles()
  const Image = getImage(image)
  const Categories = Object.values(JSON.parse(categories))
  console.log(Url)
  return (
    <>
      <Grid item md={4} sm={6} xs={12}>
        <Card>
          <GatsbyImage image={Image} alt="image" style={{ width: "100%" }} />
          <CardContent className={classes.CardContent}>
            <Typography variant="h5" gutterBottom color="primary">
              <Link to={`/Projects/${slug}`} style={{ textDecoration: "none" }}>
                {title}
              </Link>
            </Typography>
            {Categories.map((c, i) => (
              <Chip
                label={c}
                key={i}
                style={{ marginRight: 2, backgroundColor: "khaki" }}
              />
            ))}
          </CardContent>
          <CardActions>
            <CardActionArea style={{ display: "flex" }}>
              <a
                href={Url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "blue" }}
              >
                View
              </a>
            </CardActionArea>
            <CardActionArea>
              <a
                href={git}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Source Code
              </a>
            </CardActionArea>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}
