import * as React from 'react'
import { Link } from 'gatsby'
import {
  navBar,
  navBarItemHome,
  navBarItemOther,
  navBarText
} from '../styles/layout.module.css'

const NavBar = () => {
    return (
        <nav className={navBar}>
        <ul>
          <li className={navBarItemHome}><Link to="/" className={navBarText}>Shreyas Chickerur</Link></li>
          <li className={navBarItemOther}><Link to="/work" className={navBarText}>Work</Link></li>
          <li className={navBarItemOther}><Link to="/about" className={navBarText}>About</Link></li>
        </ul>
      </nav>
    )
}

export default NavBar