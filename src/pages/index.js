import * as React from "react"
import About from "../components/About"
import BlogSection from "../components/BlogSection"

import Layout from "../components/layout"
import ProjectSection from "../components/ProjectSection"

const IndexPage = () => (
  <Layout>
    <About />
    <ProjectSection />
    <BlogSection />
  </Layout>
)

export default IndexPage
