import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Github from "@assets/github.svg"
import LinkedIn from "@assets/linkedin.svg"
import StackOverflow from "@assets/stackoverflow.svg"

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
      <div className={styles.socialLinks}>
        <a
          href={`https://github.com/${social.github}`}
          aria-label="Link to github"
        >
          <Github />
        </a>
        <a
          href={`https://br.linkedin.com/in/${social.linkedin}`}
          aria-label="Link to linkedin"
        >
          <LinkedIn />
        </a>
        <a
          href={`https://stackoverflow.com/users/${social.stackOverflow}?tab=profile`}
          aria-label="Link to stack overflow"
        >
          <StackOverflow />
        </a>
      </div>
    </div>
  )
}

export default Bio
