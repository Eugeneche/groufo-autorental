import * as React from "react"
import { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./_ContentSlider.module.scss"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import seat from "../../images/icons/car-seat.svg"
import snowflake from "../../images/icons/snowflake_1.svg"
import transmission from "../../images/icons/transmission.svg"
import car from "../../images/icons/car.svg"

const ContentSliderItem = (props) => {

    const[imagePath, setImagePath] = useState({})
    const[slug, setSlug] = useState('')

    const data = useStaticQuery(graphql`
        query MyQuery {
          allFile(filter: {sourceInstanceName: {eq: "vehicles"}, extension: {eq: "jpg"}}) {
            nodes {
              relativePath
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR, height: 480, width: 640)
              }
            }
          }
          allMdx(filter: {slug: {ne: "categories"}}) {
            nodes {
              frontmatter {
                relPath
                category
              }
              slug
            }
          }
        }
      `)

      //console.log(data)

    const allPhotos = data.allFile.nodes
    const allSlugs = data.allMdx.nodes

    useEffect(() => {
      allPhotos.forEach(item => {

        allSlugs.forEach(slugEl => {
          //console.log(slugEl)
          //console.log((slugEl.frontmatter.category + slugEl.slug).toLowerCase().split('/'))
          if (item.relativePath === props.imagePath && item.relativePath === slugEl.frontmatter.relPath) {
            setImagePath(getImage(item.childImageSharp.gatsbyImageData))
            //setSlug(slugEl.slug.toLowerCase().split('/')[slugEl.slug.toLowerCase().split('/').length - 1])
            setSlug((slugEl.frontmatter.category + slugEl.slug).toLowerCase().split('/')[slugEl.slug.toLowerCase().split('/').length - 1])
            //console.log((slugEl.frontmatter.category + slugEl.slug).toLowerCase().split('/'))
          }
        })
      })
    })
    //console.log(window.location)
    return (
      <div className={styles.contentSliderItem} style={{width: props.style, margin: "0 0.5%"}}>
          <Link to={slug}><h3>{props.title}</h3></Link>
          <GatsbyImage image={imagePath} alt={props.alt} />
          <div className={styles.propertiesBar}>
            <div className={styles.propertyItem}>
              <img className={styles.propertyIcon} src={seat} alt="auto seat icon"></img><span>{props.seats}</span>
            </div>
            <div className={styles.propertyItem}>
              {props.ac && <img className={styles.propertyIcon} src={snowflake} alt="snowflake icon"></img>}             
            </div>   
            <div className={styles.propertyItem}>
              <img className={styles.propertyIcon} src={transmission} alt="transmission icon"></img><span>{props.transmission}</span>
            </div>    
            <div className={styles.propertyItem}>
              <img className={styles.propertyIcon} src={car} alt="car icon"></img><span>{props.bodyStyle}</span>
            </div>    
            <div className={styles.propertyItem}>
              {`Rok ${props.year}`}
            </div>    
          </div>
          <div className={styles.price}>
            {`${props.price} Kč/den`}
          </div>
      </div>
    )

}

export default ContentSliderItem