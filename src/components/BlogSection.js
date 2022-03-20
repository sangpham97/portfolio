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
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
          title
          slug
        }
      }
    }
  `)
  const blogs = data.allDatoCmsBlog.nodes
  return (
    <div className="max-w-screen-lg mx-auto ">
      <Title>
        I have{" "}
        <Link
          className="text-red-700 border-red-700 border-b-4 pb-1"
          to="/Blogs"
        >
          Blogs
        </Link>
      </Title>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-10 gap-3">
        {blogs.map((item, i) => (
          <Blog {...item} key={i} />
        ))}
      </div>
      <div className="text-center my-10">
        <ButtonAll title="all blogs" to="/Blogs" />
      </div>
    </div>
  )
}

export const Blog = ({ title, image, slug }) => {
  const Image = getImage(image)

  return (
    <Link className="col-span-1 space-y-2" to={"/Blogs/" + slug}>
      <div className="lg:w-full h-48">
        <GatsbyImage
          image={Image}
          className="w-full h-full rounded-md"
          alt={slug}
        />
      </div>
      <div className="space-y-2">
        {title.length > 65 ? (
          <h4 className="text-red-700 text-md font-serif">
            {`${title.substring(0, 65)}...`}
          </h4>
        ) : (
          <h4 className="text-red-700 text-md font-serif">{title}</h4>
        )}
      </div>
    </Link>
  )
}
