import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Row, Column, Box } from './twoColumn.module.css'



const TwoColumn = () => {
    return (
        <div class={Row}>
            <div class={Column}>
                <div>
                    {/* <StaticImage class = { BackgroundImage }src = "../images/blackSquare.webp"/> */}
                    <StaticImage class = { Box } src = "../images/formalPic.jpg"/>
                </div>
            </div>
            <div class={Column}>
                <h2>Column 2</h2>
                <p>Some text..</p>
            </div>
        </div>
        
    )
}

export default TwoColumn