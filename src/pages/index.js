import * as React from 'react'
import Layout from '../components/layout'
import TypeWriterHead from '../components/typewriterhead'
import Slideshow from '../components/slideshow'




const IndexPage = () => {
  return (
      <Layout>

        <TypeWriterHead message="Welcome to my work" startDelay="0" textType="writerBody">
        </TypeWriterHead>
        <Slideshow message="Welcome to my work" startDelay="0" textType="writerBody"></Slideshow>

    </Layout>
  )
}

export const Head = () => <>
  <title>Home Page</title>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
</>

export default IndexPage
