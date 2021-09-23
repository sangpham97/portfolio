import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Title from "./Title"
import { useStaticQuery, graphql, Link } from "gatsby"
import ButtonAll from "./Button"

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
            gatsbyImageData(layout: FIXED, height: 180)
          }
          title
          slug
        }
      }
    }
  `)
  const blogs = data.allDatoCmsBlog.nodes
  return (
    <div style={{ marginTop: 30, marginBottom: 30 }} id="Blog">
      <Container maxWidth="md">
        <Title>New Blogs</Title>
        <Grid container spacing="2">
          {blogs.map((blog, i) => {
            return <Blog {...blog} key={i} />
          })}
        </Grid>
        <ButtonAll to="/Blogs" title="All Blog" />
      </Container>
    </div>
  )
}

export const Blog = ({ title, date, image, slug }) => {
  const Image = getImage(image)

  return (
    <>
      <Grid item md={4} sm={6} xs={12}>
        <Card>
          <GatsbyImage image={Image} alt="image" style={{ width: "100%" }} />
          <CardContent style={{ minHeight: 160 }}>
            <Typography gutterBottom color="primary">
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
