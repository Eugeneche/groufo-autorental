import React, { useState, useEffect } from "react"

import ContentSliderItem from "./ContentSliderItem"
import vehicles from "../../data/vehicles.yaml"
import * as styles from "./_ContentSlider.module.scss"
import auto from "../../images/vehicles/ford-focus-hatchback-2011/ford-focus-hatchback-2011.jpg"



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

  console.log(slider)
  
  return (
    <div className={styles.contentSlider}>
      
        {slider.map(photo => {
          console.log(photo.photo)
            return <ContentSliderItem 
                    key={photo.id} 
                    style={`${100/photosQty}%`} 
                    title={photo.name}
                    image={photo.photo} 
                    alt={photo.name} 
                    />
          }
        )
      } 
    </div>
  )
}

export default ContentSlider