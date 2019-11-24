import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/Layout"
import Header from "../organisms/Header"

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <p>Welcome to your new site.</p>
    <p>Now go do something great.</p>
    <Link to="/booking/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
