import * as React from "react"
import Layout from "../layout"
import { graphql, useStaticQuery } from "gatsby"
import * as commonStyles from "../../style/_style.module.scss"
import * as catsStyle from "./_categoryPage.module.scss"
import Seo from "../seo"
import ContentSliderItem from "../ContentSlider/ContentSliderItem"

const CategoryPage = (data) => {

  const query = useStaticQuery(graphql`
    query getCategory {
      mdx(slug: {eq: "categories"}) {
        frontmatter {
          categories
        }
      }
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
        }
      }
      allFile(filter: {sourceInstanceName: {eq: "vehicles"}, extension: {eq: "jpg"}}) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, height: 480, width: 640)
            id
          }
        }
      }
    }
  `)

  const currentCategory = data.pageContext.categoryName
  const mdxData = []
  const vehiclesOfCurrentCategory = []
  
  query.allMdx.nodes.map(nodeMdx => {
    
    if(nodeMdx.frontmatter.category === currentCategory) {
      mdxData.push(nodeMdx.frontmatter)
    }
  })

  mdxData.map(mdx => {
    query.allFile.nodes.map(imgNode => {
      if(mdx.relPath === imgNode.relativePath) {
        let allData = {...imgNode, ...imgNode.mdx = mdx}
        vehiclesOfCurrentCategory.push(allData)
      }
    })
  })

  return (
    <Layout>
      <Seo title="Category" />
      <div className={commonStyles.contentContainer}>
        <h1 className={catsStyle.itemPageTitle}>{data.pageContext.categoryName}</h1>
        {vehiclesOfCurrentCategory.map(vehicle => {
          //console.log(vehicle)
          return <ContentSliderItem 
            key={vehicle.childImageSharp.id}
            title={vehicle.name}
            bodyStyle={vehicle.bodyStyle}
            seats={vehicle.seats}
            year={vehicle.year}
            transmission={vehicle.transmission}
            ac={vehicle.airConditioner}
            imagePath={vehicle.relativePath}
            alt={vehicle.name}
            price={vehicle.price}
            /* style={`${100/photosQty - 1}%`} */
          />
        })}
      </div>
    </Layout>
  )
}

export default CategoryPage

