import { Box, Container, Grid, Typography } from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { navLinks2 } from "../util"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"
import ArcodianList from "../components/ArcodianList"

export default function SingleBlog({ data }) {
  const blog = data.datoCmsBlog
  const image = getImage(blog.image)
  return (
    <Layout Links={navLinks2}>
      <Container maxWidth="lg">
        <Box mt={5}>
          <Typography variant="h4" color="primary">
            {blog.title}
          </Typography>
          <Typography variant="p">{blog.date}</Typography>
          <Box mt={3} mb={3}>
            <Grid container spacing="2">
              <LeftSide>
                <GatsbyImage
                  image={image}
                  style={{ borderRadius: 3, width: "100%" }}
                />
                <ReactMarkdown
                  children={blog.content}
                  remarkPlugins={[remarkGfm]}
                />
              </LeftSide>
              <RightSide>
                <ArcodianList />
              </RightSide>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query SingleBlog($slug: String) {
    datoCmsBlog(slug: { eq: $slug }) {
      content
      date(fromNow: true)
      title
      image {
        gatsbyImageData(layout: FIXED, height: 500, width: 300)
      }
    }
  }
`
