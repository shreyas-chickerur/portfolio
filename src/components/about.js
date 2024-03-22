import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import ThreeColumn from './threeColumn'
import {} from '../styles/about.module.css'


const About = ({message, startDelay}) => {
    return (
        <div style={{padding: `30px`}}>
        <ThreeColumn></ThreeColumn>
        </div>
    );
  };
  
export default About;