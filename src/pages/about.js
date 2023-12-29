import * as React from 'react'
import Layout from '../components/layout'
import TwoColumn from '../components/twoColumn'

const AboutPage = () => {
  return (
    <Layout>
      <TwoColumn></TwoColumn>
    </Layout>
  )
}

export const Head = () => <>
  <title>Home Page</title>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
</>

export default AboutPage