import * as React from 'react'
import TypeIt from "typeit-react"
import {Writer, typeWriterText} from '../styles/typewriter.module.css'


const TypeWriter = ({message, children}) => {
    return (
        <div className="App">
            <div className={Writer}>
                <TypeIt options={{
                speed: 60,
                waitUntilVisible: true
                }}><span className={typeWriterText}>{message}</span></TypeIt>
            </div>
        </div>
    );
  };
  
export default TypeWriter;