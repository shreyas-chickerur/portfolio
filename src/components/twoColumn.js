import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Row, DoubleColumn, Box, columnHeader } from '../styles/twoColumn.module.css'



const TwoColumn = () => {
    return (
        <div class={Row}>
            <div class={DoubleColumn}>
                <div>
                    {/* <StaticImage class = { BackgroundImage }src = "../images/blackSquare.webp"/> */}
                    <StaticImage class = { Box } src = "../images/formalPic.jpg"/>
                </div>
            </div>
            <div class={DoubleColumn}>
                <h2 class = { columnHeader}>About Me</h2>
                <p>Some text..</p>
            </div>
        </div>
        
    )
}

export default TwoColumn