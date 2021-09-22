import {
  Box,
  Card,
  CardContent,
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

export default function BlogSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsBlog(
        limit: 3
        sort: { fields: image___createdAt, order: DESC }
      ) {
        nodes {
          date(fromNow: true)
          image {
            gatsbyImageData(layout: FIXED, height: 200)
          }
          title
          slug
        }
      }
    }
  `)
  const blogs = data.allDatoCmsBlog.nodes
  return (
    <Box mt={9} mb={5} id="Blog">
      <Container maxWidth="lg">
        <Title>New Blogs</Title>
        <Grid container spacing="2">
          {blogs.map((blog, i) => {
            return <Blog {...blog} key={i} />
          })}
        </Grid>
        <ButtonAll to="/Blogs">All Blog</ButtonAll>
      </Container>
    </Box>
  )
}

export const Blog = ({ title, date, image, slug }) => {
  const classes = useStyles()
  const Image = getImage(image)

  return (
    <>
      <Grid item md={4} sm={6} xs={12}>
        <Card>
          <GatsbyImage image={Image} alt="image" style={{ width: "100%" }} />
          <CardContent className={classes.CardContent}>
            <Typography variant="h5" gutterBottom color="primary">
              <Link to={"/Blogs/" + slug} style={{ textDecoration: "none" }}>
                {title}
              </Link>
            </Typography>
            <Typography>{date}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}
