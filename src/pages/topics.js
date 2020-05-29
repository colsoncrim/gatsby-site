import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TopicsPage = () => (
  <Layout>
    <SEO title="Topics" />
    <h1>Topics</h1>
    <ul>
        <li>Topic 1</li>
        <li>Topic 2</li>
        <li>Topic 3</li>
        <li>Topic 4</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TopicsPage