/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import "./layout.css"
import MainMenu from "./MainMenu/MainMenu"
import MobileMenu from "./MainMenu/MobileMenu"
import Footer from "./Footer/Footer"
import * as styles from "../style/_style.module.scss"

const Layout = ({ children }) => {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    window.removeEventListener('resize', () => setWidth())
    return () => { 
      setWidth(null)}
  }, [window.innerWidth])
  
  return (
    <div className={styles.appWrapper}>
      {/* <MainMenu /> */}
        {width > 1000 ? <MainMenu /> : <MobileMenu />}  
        <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
