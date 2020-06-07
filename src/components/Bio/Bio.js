import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Place from "@assets/place.svg"
import styles from "./bio.module.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
            country
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div className={styles.container}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        className={styles.avatar}
      />
      <p>
        <strong>{author.name}</strong>
        <br />
        <small>
          <Place />
          {author.country}
        </small>
      </p>
      <p>{author.summary}</p>
    </div>
  )
}

export default Bio
