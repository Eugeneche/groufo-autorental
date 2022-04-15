import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderSlider from "../components/HeaderSlider/HeaderSlider"
import vehicles from "../data/vehicles.yaml"

import * as styles from "../style/_style.module.scss"
import ContentSlider from "../components/ContentSlider/ContentSlider"

import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {


  return (
  
    <Layout>
      <HeaderSlider />
      <Seo title="Home" />
      <div className={styles.contentContainer}>
        
          {vehicles['content'].map(bodyTipe => {
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



export default IndexPage
