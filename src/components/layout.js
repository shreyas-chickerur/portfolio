import * as React from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const LayoutStyles = styled.div`
  min-height: 100vh;
  display:grid;
  grid-template-rows: auto 1fr auto;
`;


const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </LayoutStyles>
  )
}

export default Layout