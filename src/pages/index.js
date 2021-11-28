import * as React from "react"
import About from "../components/About"
import BlogSection from "../components/BlogSection"

import Layout from "../components/layout"
import ProjectSection from "../components/ProjectSection"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo
      title="SangBlog | Home"
      description="Đây là trang chủ Blog của tôi gồm những Project và Blog mới nhất"
    />
    <About />
    <ProjectSection />
    <BlogSection />
  </Layout>
)

export default IndexPage
