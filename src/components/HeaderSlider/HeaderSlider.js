import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HeaderSlider = () => {
    return (
        <>
            <StaticImage
                src="../../images/header_slider/slider_3.jpg"
                width={4000}
                height={1600}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A woman rented a car"
                style={{  }}
            />
        </>
    )

}

export default HeaderSlider