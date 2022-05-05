import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderSlider from "../components/HeaderSlider/HeaderSlider"

import * as styles from "../style/_style.module.scss"
import ContentSlider from "../components/ContentSlider/ContentSlider"

import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {

  let data = useStaticQuery(graphql`
      query getdata {
        allMdx {
          edges {
            node {
              frontmatter {
                category
                airConditioner
                bodyStyle
                name
                price
                relPath
                seats
                title
                transmission
                year
                dir
              }
            }
          }
        }
      }
    `)

  let uniqueCategories = data.allMdx.edges.map(node => {
    return node.node.frontmatter.category
  })

  uniqueCategories = [...new Set(uniqueCategories)].reverse()

  return (
  
    <Layout>
      <HeaderSlider />
      <Seo title="Home" />
      <div className={styles.contentContainer}>
        
          {uniqueCategories.map(category => {
            const slider = []
            data.allMdx.edges.map(node => {
              return node.node.frontmatter.category === category && slider.push(node.node.frontmatter)
            })
            return (
              <section key={category}>
                <h2>{category}</h2>
                <ContentSlider array={slider}/>
              </section>
            )
          })} 

      </div>
    </Layout>
)}

export default IndexPage
