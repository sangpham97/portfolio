import React from "react"
import { Blog } from "../components/BlogSection"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Layout from "../components/layout"

export default function Blogs({ data }) {
  const blogs = data.allDatoCmsBlog.nodes

  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg mt-10">
        <div className="text-center">
          <Title>All Blogs</Title>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-10 gap-5">
          {blogs.map((item, i) => (
            <Blog {...item} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsBlog {
      nodes {
        date(fromNow: true)
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
        title
        slug
      }
    }
  }
`
