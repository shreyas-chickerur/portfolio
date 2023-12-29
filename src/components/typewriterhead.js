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
                    }}
                    getBeforeInit={(instance) => { 
                        instance.type(message).pause(750).delete(4).pause(1000).type("story").pause(1000).delete(5).pause(1000).type("life.");
                            return instance;
                    }}
                />
            </div>
        </div>
    );
  };
  
export default TypeWriterHead;
