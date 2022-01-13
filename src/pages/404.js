import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 page" description="not found what you want" />
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className=" text-2xl text-centered font-bold">404: Not Found</h1>
      <Link
        className="rounded-full bg-yellow-400 p-2 font-semibold block mt-4"
        to="/"
      >
        Về Home
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
