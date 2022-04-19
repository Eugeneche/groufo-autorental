import React, { useState, useEffect } from "react"

import ContentSliderItem from "./ContentSliderItem"
import * as styles from "./_ContentSlider.module.scss"

import { graphql, useStaticQuery } from "gatsby"

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
    return () => window.removeEventListener('resize', () => setWidth(window.innerWidth))
  }, [width])
 
  useEffect(() => {
    setSlider(props.array.slice(-photosQty))
  }, [photosQty, props.array])

  return (
    <div className={styles.contentSlider}>
      
        {slider.map(photo => {
            return <ContentSliderItem 
                    key={photo.id} 
                    style={`${100/photosQty}%`} 
                    title={photo.name}
                    seats={photo.seats}
                    price={photo.price}
                    transmission={photo.transmission}
                    bodyStyle={photo.bodyStyle}
                    year={photo.year}
                    ac={photo.airConditioner}
                    imagePath={photo.relPath} 
                    alt={photo.name} 
                    />
          }
        )
      } 
    </div>
  )
}

export default ContentSlider