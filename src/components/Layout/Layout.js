import React from "react"
import styles from "./layout.module.scss"

import Header from "@components/Header/Header"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.layout}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
