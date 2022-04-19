import * as React from "react"
import { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./_ContentSlider.module.scss"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import seat from "../../images/icons/car-seat.svg"
import snowflake from "../../images/icons/snowflake.svg"
import transmission from "../../images/icons/transmission.svg"
import car from "../../images/icons/car.svg"

const ContentSliderItem = (props) => {

    const[imagePath, setImagePath] = useState({})

    const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {sourceInstanceName: {eq: "vehicles"}, extension: {eq: "jpg"}}) {
        nodes {
          absolutePath
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, height: 480, width: 640)
          }
        }
      }
    }
      `)



    const allPhotos = data.allFile.nodes
    useEffect(() => {
      allPhotos.forEach(item => {
        if (item.relativePath === props.imagePath) {
          setImagePath(getImage(item.childImageSharp.gatsbyImageData))
        }
      })
    })
    
    return (
      <div className={styles.contentSliderItem} style={{width: props.style}}>
          <Link to="/"><h3>{props.title}</h3></Link>
          <GatsbyImage key={props.id} image={imagePath} alt={props.alt} /* style={{width: "95%", textAlign: "center"}} *//>
          <div className={styles.propertiesBar}>
            <div className={styles.propertyItem}>
              <img className={styles.propertyIcon} src={seat}></img><span>{props.seats}</span>
            </div>
            <div className={styles.propertyItem}>
              {props.ac && <img className={styles.propertyIcon} src={snowflake}></img>}             
            </div>   
            <div className={styles.propertyItem}>
              <img className={styles.propertyIcon} src={transmission}></img><span>{props.transmission}</span>
            </div>    
            <div className={styles.propertyItem}>
              <img className={styles.propertyIcon} src={car}></img><span>{props.bodyStyle}</span>
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

/* export const slugs = (graphql`
query {
  allMdx {
    nodes {
      slug
    }
  }
}
`)

console.log(data.allMdx.nodes) */