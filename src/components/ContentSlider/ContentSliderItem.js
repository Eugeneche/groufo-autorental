import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./_ContentSlider.module.scss"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const ContentSliderItem = (props) => {

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

    let src
    const allPhotos = data.allFile.nodes
    allPhotos.forEach(item => {
      if (item.relativePath === props.imagePath) {
        src = getImage(item.childImageSharp.gatsbyImageData)
      }
    })

    return (
      <div className={styles.contentSliderItem} style={{width: props.style}}>
          <Link to="ex"><h3>{props.title}</h3></Link>
          <p>{props.imagePath}</p>
          <GatsbyImage image={src} alt={props.alt} />
      </div>
    )

}

export default ContentSliderItem