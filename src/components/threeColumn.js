import * as React from 'react'
import { Row, TripleColumnOne, TripleColumnTwo, TripleColumnThree,  columnHeader, columnBody } from './threeColumn.module.css'



const ThreeColumn = () => {
    return (
        <div class={Row}>
            <div class={TripleColumnOne}>
                <h2 class = { columnHeader}>About Me</h2>
                <p class = { columnBody}>Some text..</p>
            </div>
            <div class={TripleColumnTwo}>
                <h2 class = { columnHeader}>About Me</h2>
                <p class = { columnBody}>Some text..</p>
            </div>
            <div class={TripleColumnThree}>
                <h2 class = { columnHeader}>About Me</h2>
                <p class = { columnBody}>Some text..</p>
            </div>
        </div>
        
    )
}

export default ThreeColumn