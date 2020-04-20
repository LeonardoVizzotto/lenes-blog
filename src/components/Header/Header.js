import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styles from "./header.module.scss"

import Github from "@assets/github.svg"
import LinkedIn from "@assets/linkedin.svg"
import StackOverflow from "@assets/stackoverflow.svg"
import Twitter from "@assets/twitter.svg"

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

  const { title, social } = data.site.siteMetadata
  return (
    <header className={styles.header}>
      <ul className={styles.links} role="navigation">
        <li>
          <Link to={`/`}>{title}</Link>
        </li>
        <li>
          <a
            href={`https://twitter.com/${social.twitter}`}
            aria-label="Link to twitter"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href={`https://github.com/${social.github}`}
            aria-label="Link to github"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            href={`https://br.linkedin.com/in/${social.linkedin}`}
            aria-label="Link to linkedin"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a
            href={`https://stackoverflow.com/users/${social.stackOverflow}?tab=profile`}
            aria-label="Link to stack overflow"
          >
            <StackOverflow />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
