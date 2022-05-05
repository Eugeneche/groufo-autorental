import * as React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../../style/_style.module.scss"
import * as style from "./_itemPage.module.scss"
import Seo from "../seo"

const ItemPage = ({data}) => {

  let imagePath 

  data?.allFile?.nodes.forEach(fileNode => {
    if(fileNode.relativePath === data.mdx.frontmatter.relPath) {
      imagePath = fileNode.childImageSharp.gatsbyImageData
    }
  })
console.log(data)
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.name} />
      <div className={styles.contentContainer}>
        <h1 className={style.itemPageTitle}>{data.mdx.frontmatter.name}</h1>
        <div className={style.info}>
          <div className={style.photo}>

              <GatsbyImage 
                image={imagePath}
                alt={data.mdx.frontmatter.name}/>     
          </div>
          <div className={style.characteristics}></div>
        </div>
      </div>     
    </Layout>
  )
}

export default ItemPage

export const query = graphql`
query getPageData($slug: String) {
  allFile(filter: {sourceInstanceName: {eq: "vehicles"}, extension: {eq: "jpg"}}) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData
      }
    }
  }
  mdx(slug: {eq: $slug}) {
    frontmatter {
      airConditioner
      bodyStyle
      category
      name
      price
      seats
      transmission
      year
      dir
      relPath
    }
    slug
  }
}
` 