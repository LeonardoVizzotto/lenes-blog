import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import styles from "./bio.module.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          className={styles.avatar}
        />
        <p>
          Written by{" "}
          <a href={`https://twitter.com/${social.twitter}`}>
            <strong>{author.name}</strong>
          </a>
          <br />
          {author.summary}
        </p>
      </div>
    </div>
  )
}

export default Bio
