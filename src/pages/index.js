import * as React from "react"
import About from "../components/About"
import BlogSection from "../components/BlogSection"

import Layout from "../components/layout"
import ProjectSection from "../components/ProjectSection"
import Slider from "../components/Slider"
import { navLinks1 } from "../util"

const IndexPage = () => (
  <Layout Links={navLinks1}>
    <Slider />
    <About />
    <ProjectSection />
    <BlogSection />
  </Layout>
)

export default IndexPage
