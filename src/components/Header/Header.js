import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styles from "./header.module.scss"

import Github from "@assets/github.svg"
import LinkedIn from "@assets/linkedin.svg"
import StackOverflow from "@assets/stackoverflow.svg"
import Twitter from "@assets/twitter.svg"
import Menu from "@assets/menu.svg"
import useResizer from "@hooks/useResizer"
import classNames from "classnames"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title

          social {
            twitter
            github
            stackOverflow
            linkedin
          }
        }
      }
    }
  `)
  const [showMenu, setShowMenu] = useState(false)
  const isMobile = useResizer()
  const { title, social } = data.site.siteMetadata

  const renderLinks = () => (
    <React.Fragment>
      <li title="Twitter">
        <a href={`https://twitter.com/${social.twitter}`} aria-label="Twitter">
          <Twitter />
        </a>
      </li>
      <li title="Github">
        <a href={`https://github.com/${social.github}`} aria-label="Github">
          <Github />
        </a>
      </li>
      <li title="Linkedin">
        <a
          href={`https://br.linkedin.com/in/${social.linkedin}`}
          aria-label="Linkedin"
        >
          <LinkedIn />
        </a>
      </li>
      <li title="Stack overflow">
        <a
          href={`https://stackoverflow.com/users/${social.stackOverflow}?tab=profile`}
          aria-label="Stack overflow"
        >
          <StackOverflow />
        </a>
      </li>
    </React.Fragment>
  )

  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <ul role="navigation">
          <li>
            <Link to={`/`}>{title}</Link>
          </li>
          {isMobile ? (
            <li className={styles.menu}>
              <button
                aria-label="Opens menu"
                onClick={() => setShowMenu(!showMenu)}
              >
                <Menu aria-hidden="true" />
              </button>
              <ul
                className={classNames({
                  [styles.dropdown]: true,
                  [styles.show]: showMenu,
                })}
              >
                {renderLinks()}
              </ul>
            </li>
          ) : (
            renderLinks()
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header
