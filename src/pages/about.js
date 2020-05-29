import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Us</h1>
    <p>I'm baby photo booth mumblecore williamsburg next level marfa schlitz. 
       Tilde shaman health goth wayfarers authentic before they sold out food 
       truck tumblr forage lomo echo park poutine bushwick cloud bread. Craft 
       beer put a bird on it chicharrones chambray celiac hashtag, taiyaki pork 
       belly twee wolf activated charcoal single-origin coffee salvia lumbersexual 
       franzen. Before they sold out freegan raw denim kickstarter messenger bag 
       gentrify aesthetic raclette heirloom kitsch wolf leggings la croix.
       Typewriter normcore pok pok literally bespoke sartorial direct trade air plant 
       chillwave bicycle rights cold-pressed asymmetrical fixie mustache scenester. Flannel 
       woke locavore austin, pork belly pabst tumeric master cleanse. Seitan green juice tacos 
       etsy deep v truffaut. Occupy jean shorts yuccie craft beer four dollar toast.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage