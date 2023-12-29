import * as React from 'react'
import Layout from '../components/layout'
import TypeWriterHead from '../components/typewriterhead'
import ThreeColumn from '../components/threeColumn'




const IndexPage = () => {
  return (
    // <Layout pageTitle="Home Page">
      <Layout>
        <TypeWriterHead message="Welcome to my Personal Portfolio" startDelay="0" textType="writerBody"></TypeWriterHead>
        
        <ThreeColumn></ThreeColumn>
    </Layout>
  )
}

export const Head = () => <>
  <title>Home Page</title>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
</>

export default IndexPage