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
      allMdx(filter: {slug: {ne: "categories"}}) {
        nodes {
          frontmatter {
            airConditioner
            bodyStyle
            category
            dir
            name
            price
            relPath
            seats
            transmission
            year
          }
          id
        }
      }
      mdx(slug: {eq: "categories"}) {
        frontmatter {
          categories
        }
      }
    }
  `)

  //console.log(data)

  let mainPageCategories = data.mdx.frontmatter.categories

  return (
  
    
    <Layout>
      <HeaderSlider />
      <Seo title="Home" />
      <div className={styles.contentContainer}>
        
        {mainPageCategories.map(category => {
          const imageData = []
          data.allMdx.nodes.map(node => {
            return node.frontmatter.category === category && imageData.push(node)
          })
          return (
            <section key={category}>
              <h2>{category}</h2>
              <ContentSlider imageData={imageData}/>
            </section>
          )
        })} 

      </div>
    </Layout>
)}

export default IndexPage
