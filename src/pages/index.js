import * as React from 'react'
import Layout from '../components/layout'
import TypeWriter from '../components/typewriter'
import LayeredImage from '../components/layeredImage'
// import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    // <Layout pageTitle="Home Page">
      <Layout>
        <TypeWriter message="Welcome to my Personal Portfolio"></TypeWriter>
        <LayeredImage></LayeredImage>
    </Layout>
  )
}

export const Head = () => <>
  <title>Home Page</title>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
</>

export default IndexPage