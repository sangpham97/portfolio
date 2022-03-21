import React, { useState } from "react"
import Title from "../components/Title"
import { graphql } from "gatsby"
import { Project } from "../components/ProjectSection"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import ScrollTopButton from "../components/ScrollTopButton"

export default function Projects({ data }) {
  const projects = data.allDatoCmsProject.nodes
  const [projectsLength] = useState(projects.length)
  return (
    <Layout>
      <Seo
        title="SangBlog | Projects"
        description="Đây là trang tất cả project của tôi"
      />
      <div className="mx-auto max-w-screen-lg">
        <div className="text-center lg:my-16 my-8">
          <Title>All Projects</Title>
          <StaticImage src="../images/underline.jpg" className=" h-16" alt="" />
        </div>
        <div className="space-y-3">
          {projects.map((project, i) => {
            const git = Object.values(JSON.parse(project.gitlink))
            const Url = Object.values(JSON.parse(project.url))
            return (
              <Project
                {...project}
                key={i}
                git={git}
                Url={Url}
                i={i}
                projectsLength={projectsLength}
              />
            )
          })}
        </div>
      </div>
      <ScrollTopButton />
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsProject(sort: { fields: image___createdAt, order: DESC }) {
      nodes {
        categories
        desc
        title
        slug
        gitlink
        url
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`
