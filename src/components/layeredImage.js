import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { img } from '../styles/layeredImage.module.css'


const LayeredImage = () => {
    return (
        <StaticImage 
            src= "../images/formalPic.jpg"
            class={img}
        />
    )
}

export default LayeredImage