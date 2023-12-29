import * as React from 'react'
import TypeIt from "typeit-react"
import {HeadWriter, typeWriterHead} from '../styles/typewriter.module.css'




const TypeWriterHead = ({message, startDelay}) => {
    return (
        <div className="App">
            <div className={HeadWriter}>
                <TypeIt options={{
                speed: 60,
                waitUntilVisible: true,
                startDelay: parseInt(startDelay, 10)
                }}><span className={typeWriterHead}>{message}</span></TypeIt>
            </div>
        </div>
    );
  };
  
export default TypeWriterHead;