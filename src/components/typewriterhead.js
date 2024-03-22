import * as React from 'react'
import TypeIt from "typeit-react"
import {HeadWriter, classWriterBg} from '../styles/typewriter.module.css'



const TypeWriterHead = ({message, startDelay}) => {
    return (
        <div>
        <div className={classWriterBg}>
            <div className="App">
                <div className={HeadWriter}>
                    <TypeIt options={{
                        speed: 60,
                        waitUntilVisible: true,
                        startDelay: parseInt(startDelay, 10)
                        }}
                        getBeforeInit={(instance) => { 
                            instance.type(message).pause(2000).delete(4).pause(1500).type("story").pause(2000).delete(5).pause(1500).type("life");
                                return instance;
                        }}
                    />
                </div>
            </div>
        </div>
        </div>
    );
  };
  
export default TypeWriterHead;
