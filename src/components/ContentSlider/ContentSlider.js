import React, { useState, useEffect } from "react"

import ContentSliderItem from "./ContentSliderItem"
import * as styles from "./_ContentSlider.module.scss"

const ContentSlider = (props) => {

  const [width, setWidth] = useState(window.innerWidth)
  let photosQty
  if(width > 1000) {
    photosQty = 3
  } else if(width <= 1000 && width > 500) {
    photosQty = 2
  } else if(width <=  500) {
    photosQty = 1
  }

  const [slider, setSlider] = useState([])

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    window.removeEventListener('resize', () => setWidth())
    return () => { 
      setWidth(null)}
  }, [window.innerWidth])
 
  useEffect(() => {
    setSlider(props.imageData.slice(-photosQty))
  }, [photosQty, props.imageData])

  return (
    <div className={styles.contentSlider}>
      
        {slider.map(photo => {
            return <ContentSliderItem 
                    key={photo.id} 
                    style={`${100/photosQty - 1}%`} 
                    title={photo.frontmatter.name}
                    seats={photo.frontmatter.seats}
                    price={photo.frontmatter.price}
                    transmission={photo.frontmatter.transmission}
                    bodyStyle={photo.frontmatter.bodyStyle}
                    year={photo.frontmatter.year}
                    ac={photo.frontmatter.airConditioner}
                    imagePath={photo.frontmatter.relPath} 
                    alt={photo.frontmatter.name} 
                    />
          }
        )
      } 
    </div>
  )
}

export default ContentSlider