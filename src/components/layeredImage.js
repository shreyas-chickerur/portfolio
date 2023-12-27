import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { img, imgContainer } from './layeredImage.module.css'


const LayeredImage = () => {
    return (
        <div class={imgContainer}>
            <div class={img}>
                <StaticImage src="../images/formalPic.jpg"/>
            </div>
        </div>
    )
}

export default LayeredImage