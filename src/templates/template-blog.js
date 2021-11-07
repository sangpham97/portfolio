import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function SingleBlog({ data }) {
  const blog = data.datoCmsBlog
  const image = getImage(blog.image)
  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg mt-10">
        <h4 className="text-4xl capitalize font-mono">{blog.title}</h4>
        <p className="text-gray-500">{blog.date}</p>
        <div>
          <GatsbyImage
            image={image}
            style={{ borderRadius: 3, width: "100%" }}
          />
          <ReactMarkdown children={blog.content} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
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
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
