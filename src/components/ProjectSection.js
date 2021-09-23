import {
  CardActionArea,
  CardActions,
  Chip,
  Container,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Title from "./Title"
import { useStaticQuery, graphql } from "gatsby"
import ButtonAll from "./Button"

const useStyles = makeStyles(theme => ({
  img: {
    height: "100%",
    width: "100%",
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
            gatsbyImageData(layout: FIXED, height: 200, width: 225)
          }
          desc
        }
      }
    }
  `)
  const projects = data.allDatoCmsProject.nodes

  return (
    <div id="Project" style={{ margin: "30px 0" }}>
      <Container maxWidth="md">
        <Title>New Projects</Title>
        <Grid
          container
          style={{ marginTop: 10 }}
          alignItems="center"
          justifyContent="center"
          spacing="2"
        >
          {projects.map((project, i) => {
            const git = Object.values(JSON.parse(project.gitlink))
            const Url = Object.values(JSON.parse(project.url))

            return <Project {...project} key={i} git={git} Url={Url} />
          })}
        </Grid>
        <ButtonAll to="/Projects" title="All Project" />
      </Container>
    </div>
  )
}

export const Project = ({ categories, title, desc, Url, git, image }) => {
  const classes = useStyles()
  const Image = getImage(image)
  const Categories = Object.values(JSON.parse(categories))
  return (
    <>
      <Grid item md={3} sm={12}>
        <GatsbyImage image={Image} alt="image" className={classes.img} />
      </Grid>
      <Grid item md={9} sm={12}>
        <div style={{ padding: 20 }}>
          <Typography variant="h5" gutterBottom color="primary">
            {title}
          </Typography>
          {Categories.map((c, i) => (
            <Chip
              label={c}
              key={i}
              style={{
                marginRight: 2,
                backgroundColor: "khaki",
                marginBottom: 10,
              }}
            />
          ))}
          <br />
          <Typography variant="body1">{desc}</Typography>
        </div>
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
      </Grid>
    </>
  )
}
