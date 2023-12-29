import * as React from 'react'
import TypeIt from "typeit-react"
import {BodyWriter, typeWriterBody} from '../styles/typewriter.module.css'




const TypeWriterBody = ({message, startDelay}) => {
    return (
        <div className="App">
            <div className={BodyWriter}>
                <TypeIt options={{
                speed: 60,
                waitUntilVisible: true,
                startDelay: parseInt(startDelay, 10)
                }}><span className={typeWriterBody}>{message}</span></TypeIt>
            </div>
        </div>
    );
  };
  
export default TypeWriterBody;