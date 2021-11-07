import React from "react"
import Title from "../components/Title"
import { graphql } from "gatsby"
import { Project } from "../components/ProjectSection"
import Layout from "../components/layout"

export default function Projects({ data }) {
  const projects = data.allDatoCmsProject.nodes
  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg">
        <div className="text-center my-10">
          <Title>All Project</Title>
        </div>
        <div className="space-y-3">
          {projects.map((project, i) => {
            const git = Object.values(JSON.parse(project.gitlink))
            const Url = Object.values(JSON.parse(project.url))
            return <Project {...project} key={i} git={git} Url={Url} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsProject {
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
