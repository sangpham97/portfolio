import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Seo from "../components/Seo"

export default function SingleBlog({ data }) {
  const blog = data.datoCmsBlog
  const image = getImage(blog.image)
  return (
    <Layout>
      <Seo title={"SangBlog | " + blog.title} description={blog.title} />
      <div className="mx-auto max-w-screen-lg mt-10 min-h-screen">
        <h4 className="text-xl capitalize font-serif md:text-3xl mb-3 underline">
          {blog.title}
        </h4>
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
      title
      image {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
