import { Container, Grid } from "@material-ui/core"
import React from "react"
import Title from "../components/Title"
import { graphql } from "gatsby"
import { Project } from "../components/ProjectSection"
import { navLinks2 } from "../util"
import Layout from "../components/layout"
import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"
import ArcodianList from "../components/ArcodianList"

export default function Projects({ data }) {
  const projects = data.allDatoCmsProject.nodes
  return (
    <Layout Links={navLinks2}>
      <div style={{ margin: "30px 0" }}>
        <Container maxWidth="lg">
          <Title>All Project</Title>
          <Grid container spacing="2">
            <LeftSide>
              {projects.map((project, i) => {
                const git = Object.values(JSON.parse(project.gitlink))
                const Url = Object.values(JSON.parse(project.url))
                return <Project {...project} key={i} git={git} Url={Url} />
              })}
            </LeftSide>
            <RightSide>
              <ArcodianList />
            </RightSide>
          </Grid>
        </Container>
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
          gatsbyImageData(layout: FIXED, height: 200, width: 225)
        }
      }
    }
  }
`
