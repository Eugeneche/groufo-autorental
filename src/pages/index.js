import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderSlider from "../components/HeaderSlider/HeaderSlider"
import vehicles from "../data/vehicles.yaml"

import * as styles from "../style/_style.module.scss"
import ContentSlider from "../components/ContentSlider/ContentSlider"

//import { graphql } from "gatsby"

const IndexPage = (props) => {
  //console.log(props)
  return (
  
    <Layout>
      <HeaderSlider />
      <Seo title="Home" />
      <div className={styles.contentContainer}>
        
          {vehicles.map(bodyTipe => {
            return (
              <section key={Object.keys(bodyTipe)}>
                <h2>
                  {Object.keys(bodyTipe)}
                </h2>
                <ContentSlider 
                  bodyType={Object.keys(bodyTipe).toString()} 
                  array={bodyTipe[Object.keys(bodyTipe).toString()]}/>
                  
                  {/* {console.log(bodyTipe[Object.keys(bodyTipe).toString()])} */} 
              </section>
            )
          })} 

      </div>
    </Layout>
)}

/* const data = graphql`
query MyQuery {
  allYaml {
    nodes {
      children {
        ... on File {
          name
        }
      }
    }
  }
}
`
console.log(data) */
export default IndexPage
