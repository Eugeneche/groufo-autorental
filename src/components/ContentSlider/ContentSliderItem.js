import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./_ContentSlider.module.scss"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const ContentSliderItem = (props) => {
    
    const image = getImage()
    console.log(props.image)
    return (
        <div className={styles.contentSliderItem} style={{width: props.style}}>
            <Link to="ex"><h3>{props.title}</h3></Link>
            <GatsbyImage image={props.image} alt={props.alt} />

{/*             <StaticImage
                src={`./vehicleData[bodyType]["photo"]`}
                width={4000}
                height={1600}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt={vehicleData[bodyType]["name"]}
                style={{  }}
            /> */}
        </div>
    )

}

export default ContentSliderItem