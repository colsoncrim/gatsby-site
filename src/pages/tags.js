import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = () => (
  <Layout>
    <SEO title="Tags" />
    <h1>Tags</h1>
    <ul>
        <li>Tag 1</li>
        <li>Tag 2</li>
        <li>Tag 3</li>
        <li>Tag 4</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TagsPage