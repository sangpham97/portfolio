import React from "react"
import { Blog } from "../components/BlogSection"
import { graphql } from "gatsby"
import { Box, Container, Grid } from "@material-ui/core"
import Title from "../components/Title"
import { navLinks2 } from "../util"
import Layout from "../components/layout"
import ArcodianList from "../components/ArcodianList"
import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"

export default function Blogs({ data }) {
  const blogs = data.allDatoCmsBlog.nodes
  return (
    <Layout Links={navLinks2}>
      <Box mt={5}>
        <Container maxWidth="lg">
          <Title>All Blog</Title>
          <Grid container spacing="2">
            <LeftSide>
              {blogs.map((blog, i) => {
                return <Blog {...blog} key={i} />
              })}
            </LeftSide>
            <RightSide>
              <ArcodianList {...blogs} />
            </RightSide>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsBlog {
      nodes {
        date(fromNow: true)
        image {
          gatsbyImageData(layout: FIXED, height: 150)
        }
        title
        slug
      }
    }
  }
`
