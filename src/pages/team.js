import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamPage = () => (
  <Layout>
    <SEO title="Team" />
    <h1>Our Team</h1>
    <ul>
        <li>Person 1</li>
        <li>Person 2</li>
        <li>Person 3</li>
        <li>Person 4</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TeamPage