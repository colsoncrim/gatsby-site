import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TrendingPage = () => (
  <Layout>
    <SEO title="Trending" />
    <h1>Trending</h1>
    <ul>
        <li>Trend 1</li>
        <li>Trend 2</li>
        <li>Trend 3</li>
        <li>Trend 4</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TrendingPage