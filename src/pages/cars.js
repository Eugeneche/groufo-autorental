import * as React from "react"
import { Link } from "gatsby"
//import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"

const Cars = () => (
  <Layout>
    <Seo title="Podminky" />
    <div className={styles.contentContainer}>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Cars
