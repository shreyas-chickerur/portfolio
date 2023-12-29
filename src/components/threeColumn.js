import * as React from 'react'
import { Row, TripleColumnOne, TripleColumnTwo, TripleColumnThree,  columnHeader, columnBody } from '../styles/threeColumn.module.css'



const ThreeColumn = () => {
    return (
        <div class={Row}>
            <div class={TripleColumnOne}>
                <h2 class = { columnHeader }>Hobbies</h2>
                <p class = { columnBody }>In my spare time, I love listening to music, playing basketball, and cooking. Recently, I have been trying to cook Mediterranean food. My favorite artists are J Cole, Bryson Tiller, and SZA.</p>
            </div>
            <div class={TripleColumnTwo}>
                <h2 class = { columnHeader }>About Me</h2>
                <p class = { columnBody }>Some text..</p>
            </div>
            <div class={TripleColumnThree}>
                <h2 class = { columnHeader }>About Me</h2>
                <p class = { columnBody }>Some text..</p>
            </div>
        </div>
        
    )
}

export default ThreeColumn