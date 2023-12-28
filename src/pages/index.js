import * as React from 'react'
import Layout from '../components/layout'
import TypeWriter from '../components/typewriter'
import LayeredImage from '../components/layeredImage'


const IndexPage = () => {
  return (
    // <Layout pageTitle="Home Page">
      <Layout>
        <TypeWriter message="Welcome to my Personal Portfolio"></TypeWriter>
        <div style={{textAlign: `center`}}>
          <LayeredImage></LayeredImage>
        </div>
    </Layout>
  )
}

export const Head = () => <>
  <title>Home Page</title>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
</>

export default IndexPage